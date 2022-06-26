// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './header.css'

const Header = () => {
    return (
        <>
        <h1>Call a Friend</h1>
        <p>your friendly contact app</p>
        <p className='star'>*********************************</p>
        </>
    )
}

export default Header;