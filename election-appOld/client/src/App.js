import React, {useEffect, useState} from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Web3 from 'web3'
import ElectionABI from './contracts/Election.json'

function App() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchainData();
  }, [])

  const[currentAccount, setCurrentAccount] = useState('') // state с аккаунтом
  const[loading, setLoading] = useState('') // loader для загрузки данных
  const[Election, setElection] = useState('')
  const[balanceAccount, setBalanceAccount] = useState('') // полчение баланса
  const[Candidate2, setCandidate2] = useState('') // полчение баланса
  const[Candidate1, setCandidate1] = useState('') // полчение баланса



  const loadWeb3 = async () => { // Загрузка web3 и связь с metamsk
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }else{
      window.alert(
        "MetaMask/Ethereum is not found - Reboot browser / Download MetaMask"
      )
    }
  }
  const LoadBlockchainData = async () =>{ // поулчение данных у смартконтракта и получение данных от metamsk
    setLoading(true)
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts(); // получение аккаунта 
    const account = accounts[0];
    setCurrentAccount(account)
    console.log(account)

    const networkId = await web3.eth.net.getId();
    const networkData = ElectionABI.networks[networkId]

    let balance = await web3.eth.getBalance(account) // получение баланса у аккаунта
    balance = parseInt(balance)/(Math.pow(10,18));
    setBalanceAccount(balance)

    if(networkData){
      const election = new web3.eth.Contract(ElectionABI.abi, networkData.address)
      const candidate1 = await election.methods.candidates(1).call()
      const candidate2 = await election.methods.candidates(2).call()

      // const CD1Name = candidate1.name;
      // const CD2Name = candidate2.name;
      // const CD1VC = candidate1.voteCount;
      // const CD2VC = candidate2.voteCount;

      setCandidate1(candidate1)
      setCandidate2(candidate2)
      setElection(election)
      setLoading(false)

      console.log(candidate1);
      console.log(candidate2);
      console.log(election);
    }else{
      window.alert("Smart contract is not deployed current network")
    }
  }
  const voteCandidate = async(candidateId) => {
    setLoading(true)
    await Election.methods.vote(candidateId).send({from: currentAccount}).on()
    setLoading(false)
  }
  return (
    <div className="container-lg">
      {
        loading ?<h1 className="text-center my-5"><span className="text-danger mx-1">Loading the data, please wait</span></h1> :<> <Header balance={balanceAccount} account={currentAccount}/>
        <Content CD1={Candidate1} CD2={Candidate2} vote={voteCandidate}/>
        <h5 className="text-center text-white">by<span className="text-danger mx-1"><a href="https://github.com/d3pii" class="link-danger">d3pii</a></span></h5>
        </>
      }
      
    </div>
  )
}

export default App