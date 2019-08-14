import React from 'react';
import './style.scss';
import Logo from '../../assets/logo-green-1x.png';

const header = () => {
    return (
        <header className="headerComponent" data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" data-test="LogoIMG" src={Logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

export default header;