import React,{useEffect, useState} from "react";
import {useSwipeable} from "react-swipeable";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./Carousel.css";

export const CarouselItem = ({children, width}) =>{

    return(
        <div className="carousel-item" style={{ width : width }}>
            {children}
        </div>
    );

};

const Carousel = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex = React.Children.count(children)-1;
        }
        else if(newIndex>= React.Children.count(children)){
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(!paused){
                updateIndex(activeIndex + 1);
            }
        },5000);

        return ()=>{
            if(interval){
                clearInterval(interval);
            }
        }
    });

    const handlers = useSwipeable({
        onSwipedLeft: ()=>updateIndex(activeIndex+1),
        onSwipedRight: ()=>updateIndex(activeIndex-1)
    });

    return(

        <div    
            {...handlers} 
            className="carousel"
            onMouseEnter={()=> setPaused(true)}
            onMouseLeave={()=> setPaused(false)}
        >

            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child,index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>

            <div className="indicators">
                <button className="left-btn" onClick={()=>{updateIndex(activeIndex - 1);}} variant="outlined">
                    <ChevronLeftIcon />
                </button>

                <div className="slide-label-box-container">
                        {React.Children.map(children, (child,index)=>{
                        return(
                            <button className={`${index === activeIndex ? "slide-label-box active" : "slide-label-box"}`} onClick={()=>{updateIndex(index)}}>
                                
                            </button>
                        );
                    })}
                </div>

                <button className="right-btn" onClick={()=>{updateIndex(activeIndex + 1);}} variant="outlined">
                    <ChevronRightIcon />
                </button>
            </div>

        </div>
    );

};

export default Carousel;