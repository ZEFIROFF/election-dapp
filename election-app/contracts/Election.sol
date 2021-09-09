 // SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Election{
    //model candidate
    struct Candidate{
        uint id;
        string name; // имя
        uint voteCount; //количество голосов
        uint age; // возраст
        string desripition;
    }
    
    // Candidate public cand = Candidate(1,"zero",0);
    
    // candidate count
    uint public candidatesCount;
    
    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public votedornot;
    
    event electionOnUpdated(
        uint _candidateId
        );
    
    constructor(){
        addCandidate("human first", 18, "this is my desripition for candidates");
        addCandidate("human second", 28, "also this my desripition for candidates but 2");
        addCandidate("human second", 28, "also this my desripition for candidates but 2");

    }

    function addCandidate(string memory name, uint age, string memory desripition) public{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0, age, desripition);
    }
    
    function vote(uint _candidateId) public {//голосование 
        require(!votedornot[msg.sender]); //проверка на голосовал ли
        require(_candidateId > 0 && _candidateId <= candidatesCount); // существиет ли кандидат
        
        candidates[_candidateId].voteCount++; //добавление на текущего кандидата к количеству голосов
        votedornot[msg.sender] = true; // голосовал ли проверка
        
        emit electionOnUpdated(_candidateId);
        //triger event candidate
    }
}
// truffle migrate --reset = миграции 