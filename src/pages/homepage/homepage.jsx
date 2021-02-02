import React from 'react';
import ProductCard from '../../components/product-card/product-card';
import img from '../../assets/1.gif';
import WelcomeScroll from '../../components/welcome-scroll';
import { SlideInUpDiv } from '../../components/animations/animations';


const HomePage = () =>
<SlideInUpDiv>
    <div>
        <WelcomeScroll />
    </div>
</SlideInUpDiv>
export default HomePage;