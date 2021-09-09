import React from 'react'

const Card=({title, age, countVote, desripition}) => {
    return (
        <div class="col-sm-6 my-3 mx-2">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{title} | {age} years old</h4>
            <p class="card-text">{desripition}</p>
            <h5>Vote count: {countVote}</h5>
            <a href="#" class="btn px-3 btn-danger">Vote</a>
          </div>
        </div>
      </div>
    )
}

export default Card
// сделать новый смарт контракт , привизать на кнопку действие 