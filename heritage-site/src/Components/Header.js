import React from 'react';
import Carousel,{CarouselItem} from './Carousel';
import Navbar from './Navbar'
import './Header.css';
import Hampi from '../Images/hampi.jpg';
import Jagmohan from '../Images/jagmohan.jpg';
import TajMahal from '../Images/taj mahal.jpg';


const Header = ()=>{

    return(
        <header >
            <Navbar></Navbar>
            <Carousel>
                <CarouselItem><img src={Hampi} alt="Hampi"/></CarouselItem>
                <CarouselItem><img src={Jagmohan} alt="Jagmohan"/></CarouselItem>
                <CarouselItem><img src={TajMahal} alt="Taj Mahal"/></CarouselItem>
            </Carousel>
        </header>
    );
}

export default Header;