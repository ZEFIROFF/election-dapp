import { addListener } from 'npm'
import React from 'react'
import Card from './Card'

const CategoryCard = ({titleCategory,candidatesCategory, voteF}) => {
    return (
        <div>
            <h1 className="text-center text-white">{titleCategory}</h1>
            <div className="d-flex flex-justify-between">
            {candidatesCategory.map((candEl, index) => <Card title={candEl.name} key={index} vote={voteF} countVote={candEl.voteCount}/>)}
            </div>
        </div>
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
