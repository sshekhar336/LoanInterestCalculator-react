import React from 'react';
import './Header.css';
import sidebarImage from './sidebarImage.png';

export default function Header(props) {
    return (
        <div className="header">
            <button className='sidebarbutton' onClick={() => props.sidebarToggleClickHandler()}><img src={sidebarImage} alt='sidebarImage'/> </button>
            Loan Interest Calculator
        </div>

    )
}
