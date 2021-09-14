import React, {useState} from 'react'
import Card from './Card'

const CategoryCard = ({titleCategory,candidatesCategory, vote}) => {
    const[Candidate, setCandidate] = useState('') // получение текущего кандидата

    const checkVote = (e) =>{
        setCandidate(e)
    }

    onsubmit = () => {
        vote(Candidate)
    }

    return (
        <form className="px-0" onSubmit={onsubmit}>
            <h1 className="text-center text-white">{titleCategory}</h1>
            <div className="d-flex flex-wrap justify-content-between">
            {candidatesCategory.length!==0 ? candidatesCategory.map((candEl, index) => <Card title={candEl.name} idCandidate={candEl.id} age={candEl.age} desripition={candEl.desripition} key={index} vote={checkVote} countVote={candEl.voteCount}/>):
            <h1 className="text-center text-white">Data is not loaded/not found</h1>}
            </div>
        </form>
    )
}

export default CategoryCard