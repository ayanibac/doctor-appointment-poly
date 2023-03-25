import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Fade from 'react-reveal/Fade';
//-----css----
import './navbar.css'
//----image---
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const [sliderClicked, setSliderClicked] = useState(false)
    const menuClicked = () => {
        setSliderClicked(!sliderClicked)
    }

    return (
        <>
            <div className='navHolder'>
                <div className='navContainer'>
                    <div className='navContainerBox'>
                        <Fade top>
                            <img src={logo} />
                        </Fade>
                        <div className='navContainerBoxItem'>
                            <ul>
                                <Fade top>
                                    <li><Link to="/" >HOME</Link></li>
                                </Fade>
                                <Fade top>
                                    <li><Link to="/" >SERVICES</Link></li>
                                </Fade>
                                <Fade top>
                                    <li><Link to="/" >CLIENTS</Link></li>
                                </Fade>
                                <Fade top>
                                    <li><Link to="/" >TESTIMONIALS</Link></li>
                                </Fade>
                                <Fade top>
                                    <li><Link to="/" >CONTACT US</Link></li>
                                </Fade>
                            </ul>
                        </div>
                        <div className='MobileNavContainerBoxItem'>
                            <span onClick={menuClicked}>
                                <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#35637a" />
                            </span>

                        </div>
                    </div>

                </div>
                <span className='spanMenuContainer'></span>
                <div className={sliderClicked ? 'MenuSliderContainerBlock' : 'MenuSliderContainerNone'}>
                    <div className='MenuSliderContainerBox'>
                        <ul>
                            <li>
                                <Link to="/" onClick={() => {
                                    setOpen(false)
                                    setSliderClicked(false)
                                }}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    onClick={() => {
                                        setOpen(false)
                                        setSliderClicked(false)
                                    }}
                                >
                                    SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    onClick={() => {
                                        setOpen(false)
                                        setSliderClicked(false)
                                    }}
                                >
                                    CLIENTS
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    onClick={() => {
                                        setOpen(false)
                                        setSliderClicked(false)
                                    }}
                                >
                                    TESTIMONIALS
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    onClick={() => {
                                        setOpen(false)
                                        setSliderClicked(false)
                                    }}
                                >
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar