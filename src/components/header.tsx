import React, { useState, useContext } from 'react';
import Logo from "../img/logo.svg";
import Ext from "../img/ext.svg";
import { slide as Menu } from 'react-burger-menu';

const Header = () => {

    var styles = {
        bmBurgerButton: {
          position: 'relative',
          width: '36px',
          height: '30px',
        },
        bmBurgerBars: {
          background: '#000',
          borderRadius: '1px'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '50px',
          width: '50px'
        },
        bmCross: {
          background: '#fff'
        },
        bmMenuWrap: {
          top: '0',
          position: 'fixed',
          height: '100vh',
          width: '70%'
          
        },
        bmMenu: {
            background: '#101010',
          padding: '2.5em 1.5em 0',
          fontSize: '30pxpx',
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
            color: '#fff',
          padding: '0.8em',
          display: 'flex',
          flexDirection: 'column'
        },
        bmItem: {
          display: 'inline-block',
          color: '#fff',
          marginBottom: '70px',
          fontSize: '28px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }

    const [isOpen, setOpen] = useState(false)
    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                  <div className="header__left">
                    <img src={Logo} className="header__logo" />
                    <div className="header__bar">
                        <a href="#intro" className="header__tab">HOME</a>
                        <a href="#tokenomics" className="header__tab">TOKENOMICS</a>
                        <a href="#taxes" className="header__tab">TAXES & FEES</a>
                        <a href="#" target="_blank" className="header__tab">
                            <div style={{marginRight: "5px"}} >WHITEPAPER</div>
                            <img className="header__icon" src={Ext} alt="ext" />
                        </a>
                    </div>
                  </div>
                  <div className="header__right">
                    <a style={{marginRight: "8px"}} href="#" target='_blank' className="button__size button__transparent">START DAPP</a>
                    <a href="#" target='_blank' className="button__size button__style">BUY TOKENS</a>
                  </div>
                <div className='mob-menu'>
                    <Menu
                        isOpen={isOpen}
                        onOpen={handleIsOpen}
                        onClose={handleIsOpen}
                        styles={styles} right>
                        <a onClick={closeSideBar} className="menu-item" href="#intro">HOME</a>
                        <a onClick={closeSideBar} className="menu-item" href="#tokenomics">TOKENOMICS</a>
                        <a onClick={closeSideBar} className="menu-item" href="#taxes">TAXES & FEES</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="#">WHITEPAPER</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="#">START DAPP</a>
                        <a onClick={closeSideBar} className="menu-item" target='_blank' href="https://app.uniswap.org/#/swap">BUY TOKENS</a> 
                    </Menu>
                </div>
                </div>
            </div>
        </>
    )
}

export default Header;