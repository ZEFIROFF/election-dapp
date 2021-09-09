import React, {useState} from 'react'
import Card from './Card'

const CategoryCard = ({titleCategory,candidatesCategory, vote}) => {
    const[Candidate, setCandidate] = useState('') // получение текущего кандидата

    const checkVote = (e) =>{
        setCandidate(e)
        console.log(e);
    }

    onsubmit = () => {
        vote(Candidate)
    }

    return (
        <form className="px-0" onSubmit={onsubmit}>
            <h1 className="text-center text-white">{titleCategory}</h1>
            <div className="d-flex flex-wrap justify-content-between">
            {candidatesCategory.map((candEl, index) => <Card title={candEl.name} idCandidate={candEl.id} age={candEl.age} desripition={candEl.desripition} key={index} vote={checkVote} countVote={candEl.voteCount}/>)}
            </div>
        </form>
    )
}

export default CategoryCard


// const CategoryCard = ({titleCategory,candidatesCategory}) => {
//     return (
//         <div>
//             <h1 className="text-center text-white">{titleCategory}</h1>
//             <div className="d-flex flex-justify-between">
//             {candidatesCategory.map((candEl, index) => <Card title={candEl.fullName} key={index} countVote={candEl.voteCount} age={candEl.age} desripition={candEl.desripition}/>)}
//             </div>
//         </div>
//     )
// }
