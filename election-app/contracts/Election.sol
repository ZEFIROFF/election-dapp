 // SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Election{
    //model candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
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
        addCandidate("Lev");
    }

    function addCandidate(string memory name) public{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }
    
    function vote(uint _candidateId) public {
        require(!votedornot[msg.sender]);
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        
        candidates[_candidateId].voteCount++;
        votedornot[msg.sender] = true;
        
        emit electionOnUpdated(_candidateId);
        //triger event candidate
    }
}
