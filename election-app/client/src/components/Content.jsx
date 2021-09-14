import CategoryCard from './CategoryCard';
import React from 'react'

const Content = ({CD, vote}) => {
  return (
    <div className="row d-flex my-5">
      <h1 className="text-white text-center">Your <span className="text-danger">choice</span> is the <span className="text-danger">main one</span></h1>
      <CategoryCard titleCategory="Main"  vote={vote} candidatesCategory={CD}/>
    </div>
  )
}

export default Content