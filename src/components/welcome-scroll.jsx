import React from 'react';
import img1 from '../assets/1.gif';
import img2 from '../assets/2.gif';
import img3 from '../assets/3.gif';
import img4 from '../assets/4.gif';
import img5 from '../assets/5.gif';
import img6 from '../assets/6.gif';
import img7 from '../assets/7.gif';
import img8 from '../assets/8.gif';
import img9 from '../assets/9.gif';
import img10 from '../assets/10.gif';
import img11 from '../assets/11.gif';
import img12 from '../assets/12.gif';
import './welcome-scroll.css';

const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

class WelcomeScroll extends React.Component {
    constructor() {
        super();
        this.state = {
          index: 0,
          speed: 0
        }
      }

      onScroll = () => {
        var index = this.state.index;
        var speed = this.state.speed;
        speed = speed + 1;
        if(speed === 5) {
          speed = 0;
          index = index + 1;
        }
        if(index === 11) {
          index = 0;
        }
        this.setState({
          index: index,
          speed: speed
        })
      }
    
      render() {
        return (
          <div onScroll={this.onScroll} style={{height: '95vh', overflow: 'scroll', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{zIndex: '99', fontSize: '90px', position: 'absolute', width: '100%', textAlign: 'center'}}>Towards Indian Traditional Taste</h1>
            <img src = {img[this.state.index]} style={{width: '100%', height: '110vh'}}/>
          </div>
        );
      }
}

export default WelcomeScroll;