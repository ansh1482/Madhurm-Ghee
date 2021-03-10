import React from 'react';
import img from '../../assets/swasth.png';
import boy from '../../assets/boy.png';
import WelcomeScroll from '../../components/welcome-scroll';
import { SlideInUpDiv, ShakeDiv } from '../../components/animations/animations';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './homepage.css';
import ScrollAnimation from 'react-animate-on-scroll';

const HomePage = () =>
<SlideInUpDiv>
    <div>
        <WelcomeScroll />
        <div className='brand'>
            <div className='brand-ghee'>
                <ScrollAnimation animateIn='zoomIn' duration={5}>
                    <div className='brand-left'>
                        <h1 className='text-app' style={{marginBottom: '300px'}}>Healthy</h1>
                        <h1 className='text-app' style={{marginTop: '500px'}}>Granules</h1>
                    </div>
                </ScrollAnimation>
                <ShakeDiv><div className='swasth'><img src={img} /></div></ShakeDiv>
                <ScrollAnimation animateIn='zoomIn' duration={5}>
                    <div className='brand-right'>
                        <h1 className='text-app' style={{marginBottom: '300px'}}>Pure</h1>
                        <h1 className='text-app' style={{marginTop: '500px'}}>Tasty</h1>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div>
            <FaQuoteLeft style={{color: 'white', fontSize: '3rem', paddingLeft: '20%'}} />
            <h1 className='text-app' style={{margin: 'auto', textAlign: 'center', color: 'rgb(153, 100, 3)'}}>Taste bhi, Health bhi</h1>
            <h1 className='text-app' style={{margin: 'auto', textAlign: 'center', color: 'rgba(7, 160, 248, 0.993)'}}>Only with Madhurm Ghee</h1>
            <FaQuoteRight style={{color: 'white', fontSize: '3rem', float: 'right', marginRight: '20%'}} />
        </div>
        <div className='quality'>
            <ScrollAnimation animateIn='fadeIn' duration={2}>
                <h1 className='text-app' style={{textAlign: 'center', fontSize: '100px'}}>Why Madhurm Ghee?</h1>
                <div className='ghee-quality'>
                    <img src={boy} style={{width: '100%'}} />
                    <div className='points'>
                        <ScrollAnimation animateIn='bounceInRight' duration={2}>
                            <div>
                                <h1>BOOST IMMUNITY</h1>
                                <h2>Enriched with vitamin A, B & K, Madhurm Ghee helps to build immuntiy.</h2>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' duration={3}>
                            <div>
                                <h1>SUPPORT DIGESTIVE TRACT</h1>
                                <h2>Madhurm Ghee helps to support healthy digestive tract.</h2>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' duration={4}>
                            <div>
                                <h1>ABSORB NUTRIENTS</h1>
                                <h2>Madhurm Ghee consists of healthy fats helpful to absorb nutrients from food.</h2>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='bounceInRight' duration={5}>
                            <div>
                                <h1>REDUCE CARBOHYDRATE CONTENT</h1>
                                <h2>Madhurm Ghee helps to reduce carbohydrate content in blood sugar level.</h2>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    </div>
</SlideInUpDiv>
export default HomePage;