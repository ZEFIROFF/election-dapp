import React from 'react'

function Card(props) {
    return (
        <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desripition}</p>
            <a href="#" class="btn btn-primary">Проголосовать</a>
          </div>
        </div>
      </div>
    )
}

export default Card