import React,{useState} from "react";
import './Places.css';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import RedFort from '../Images/red fort.jpg';
import QutubMinar from '../Images/Qutub Minar.jpg';
import Vrindavan from '../Images/vrindavan.jpg';
import RamMandir from '../Images/ram mandir.jpg';
import SanchiStupa from '../Images/sanchi stupa.jpg';
import TajMahal from '../Images/taj mahal.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';






const Places=()=>{

    let placesListTop=[];
    let placesListBottom=[];
    let places=[
        {
            "place name" :"Taj Mahal",
            "open day":["Monday","Saturday"],
            "open time":["10:00 A.M","06:00 P.M."],
            "image": TajMahal
        },
        {
            "place name" :"Ayodhya Ram Mandir",
            "open day":["Monday","Saturday"],
            "open time":["10:00 A.M","06:00 P.M."],
            "image": RamMandir
        },
        {
            "place name" :"Sanchi Stupa",
            "open day":["Monday","Saturday"],
            "open time":["10:00 A.M","06:00 P.M."],
            "image": SanchiStupa
        },
        {
            "place name" :"Bake Bihari Vrindavan",
            "open day":["Monday","Saturday"],
            "open time":["10:00 A.M","06:00 P.M."],
            "image": Vrindavan
        },
        {
            "place name" :"Qutub Minar",
            "open day":["Monday","Saturday"],
            "open time":["10:00 A.M","06:00 P.M."],
            "image": QutubMinar
        },
        {
            "place name" :"Red Fort",
            "open day":["Monday","Saturday"],
            "open time":["10:00 A.M","06:00 P.M."],
            "image": RedFort
        },
    ]

    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(places.length/2);
    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex = (places.length/2)-1;
        }
        else if(newIndex>= (places.length/2)+1){
            newIndex = 0;
        }
        else{}

        if(activeIndex2<=0){
            setActiveIndex2(places.length/2);
        }
        else{
            setActiveIndex2(activeIndex2-1);
        }
        

        console.log(newIndex,activeIndex2);

        setActiveIndex1(newIndex);
    };

    
    places.forEach((place,index)=>{
    placesListTop.push(

        <div className="top-contents contents" key={index} style={{ transform: `translateX(-${activeIndex1 * 100}%)`}}>

            <div className="image-container">
                <img src={place["image"]} alt={place["place name"]} />
            </div>

            <div className="popup-card-conatiner">
                <div className="popup-card-content">
                    <div className="title">
                        <h5>{place["place name"]}</h5>
                    </div>
                    <div className="time-container">
                        <div className="day">
                            <div className="time-heading">
                                <CalendarMonthIcon className="calendar-icon" />
                                <h5>Open On:</h5>
                            </div>
                            <h6>{place["open day"][0]}<span>-</span>{place["open day"][1]}</h6>
                        </div>
                        <div className="time">
                            <div className="time-heading">
                                <AlarmOnIcon className="clock-icon" />
                                <h5>Time:</h5>
                            </div>
                            <h6>{place["open time"][0]}<span>-</span>{place["open time"][1]}</h6>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="location-content">
                            <AddLocationAltIcon className="location-icon"/>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="arrow-content">
                            <ArrowOutwardIcon className="arrow-icon"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

    placesListBottom.push(

        <div className="bottom-contents contents" key={index} style={{ transform: `translateX(-${activeIndex2 * 104}%)`}}>

            <div className="image-container">
                <img src={place["image"]} alt={place["place name"]} />
            </div>

            <div className="popup-card-conatiner">
                <div className="popup-card-content">
                    <div className="title">
                        <h5>{place["place name"]}</h5>
                    </div>
                    <div className="time-container">
                        <div className="day">
                            <div className="time-heading">
                                <CalendarMonthIcon className="calendar-icon" />
                                <h5>Open On:</h5>
                            </div>
                            <h6>{place["open day"][0]}<span>-</span>{place["open day"][1]}</h6>
                        </div>
                        <div className="time">
                            <div className="time-heading">
                                <AlarmOnIcon className="clock-icon" />
                                <h5>Time:</h5>
                            </div>
                            <h6>{place["open time"][0]}<span>-</span>{place["open time"][1]}</h6>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="location-content">
                            <AddLocationAltIcon className="location-icon"/>
                        </div>
                    </div>
                    <div className="icon-container">
                        <div className="arrow-content">
                            <ArrowOutwardIcon className="arrow-icon"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
    })

    return(
        <section>
            
            <div className="section-heading-container">

                <div className="heading-content">
                    <div className="heading-title">
                        <h1>explore the <span>beauty</span> of india</h1>
                    </div>
                </div>

                <div className="right-content">
                    <div className="button-container">
                        <div className="buttons">
                            <button className="left" onClick={()=>{updateIndex(activeIndex1 - 1);}}>
                                <KeyboardDoubleArrowLeftIcon className="left-arrow-icon arrow-icon" />
                            </button>
                            <button className="right" onClick={()=>{updateIndex(activeIndex1 + 1);}}>
                                <KeyboardDoubleArrowRightIcon className="right-arrow-icon arrow-icon" />
                            </button>
                        </div>
                    </div>

                    <div className="launch-text-container">
                        <div className="launch-text
                        ">
                            <h6>view more</h6>
                        </div>
                        <div className="launch-icon-container">
                            <LaunchIcon className="launch-icon" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="section-container">

                <div className="top-container container">
                    <div className="contents-container">
                        {placesListTop}
                    </div>
                </div>

                <div className="bottom-container container">
                    <div className="contents-container">
                        {placesListBottom}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Places;