import React from 'react';
import { FaAlignRight, FaTimesCircle } from 'react-icons/fa';
import './navigation-bar.css';
import { BounceInRightDiv, SlideInLeftButton, SlideInLeftUl, SlideInRightImg } from '../animations/animations';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    constructor() {
        super();

        this.state = {
            toggle: false,
            button: <FaAlignRight />
        }
    }

    toggleState = () => {
        if(this.state.toggle === false) {
            this.setState({
                toggle: true,
                button: <FaTimesCircle />
            })
        } else {
            this.setState({
                toggle: false,
                button: <FaAlignRight />
            })
        }
    }

    render() {
        return (
            <BounceInRightDiv>
                <div className='navbar'>
                    <SlideInLeftButton>
                        <button onClick={this.toggleState}>{this.state.button}</button>
                    </SlideInLeftButton>
                    <Link to='/'><img className='logo' src={logo} /></Link>
                    <SlideInLeftUl className="slideInLeftUl">
                        <ul className={this.state.toggle ? 'nav-links show-nav' : 'nav-links'}>
                            <li><Link className='link' to='/'>Home</Link></li>
                            <li><Link className='link' to='/about'>About us</Link></li>
                            <li><Link className='link' to='/product'>Our Products</Link></li>
                            <li><Link className='link' to='/contact'>Contact</Link></li>
                        </ul>
                    </SlideInLeftUl>
                </div>
                <div style={{width: '100%', height: '100px'}}></div>
            </BounceInRightDiv>
        );
    }
}

export default NavigationBar;