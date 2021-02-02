import { bounceInRight, slideInLeft, fadeIn, slideInRight, slideInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceInAnimation = keyframes`${bounceInRight}`;
export const BounceInRightDiv = styled.div`
    animation: 4s ${bounceInAnimation};
`;

const slideInLeftAnimation = keyframes`${slideInLeft}`;
export const SlideInLeftButton = styled.button`
    animation: 4s ${slideInLeftAnimation};
`;
export const SlideInLeftUl = styled.ul`
    animation: 4s ${slideInLeftAnimation};
`;

const slideInRightAnimation = keyframes`${slideInRight}`;
export const SlideInRightImg = styled.img`
    animation: 4s ${slideInRightAnimation};
`;

const fadeInAnimation = keyframes`${fadeIn}`;
export const FadeInDiv = styled.div`
    animation: 1s ${fadeInAnimation};
`;

const slideInUpAnimation = keyframes`${slideInUp}`;
export const SlideInUpDiv = styled.div`
    animation: 0.5s ${slideInUpAnimation};
`;