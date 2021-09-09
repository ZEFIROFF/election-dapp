import React from 'react'

const Card=({title, age, countVote, desripition, vote, idCandidate}) => {
    return (
        <div className="col-sm my-3">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{title} | {age} years old | #{idCandidate}</h4>
            <p className="card-text">{desripition}</p>
            <h5>Vote count: {countVote}</h5>
            <button onClick={()=> vote(idCandidate)} href="#" className="btn px-3 btn-danger">
              Vote
              </button>
          </div>
        </div>
      </div>
    )
}

export default Card