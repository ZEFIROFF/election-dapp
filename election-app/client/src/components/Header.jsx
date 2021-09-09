import React from 'react'

export default function Header({account, balance}) {
    return (
        <div className="text-center text-white">
            <h1>User</h1>
            <div>
            <small><h5> address <span className="text-danger">|</span> {account}</h5></small>
            <small><h5> balance <span className="text-danger">|</span> {balance} ETH</h5></small>
            </div>
        </div>
    )
}
