import React from 'react'

export default function Header({account, balance}) {
    return (
        <div className="text-center text-white">
            <h1>Your <span className="text-danger">choice</span> is the <span className="text-danger">main one</span></h1>
            <small><h5> Your address <span className="text-danger">|</span> {account}</h5></small>
            <small><h5> Your balance <span className="text-danger">|</span> {balance}</h5></small>
        </div>
    )
}
