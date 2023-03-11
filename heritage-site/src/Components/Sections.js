import React from "react";
import Places from './Places';
import FAQ from './FAQ';
import './Sections.css';


const Sections = ()=>{

    return(
        <div className="all-section-container">
            <Places></Places>
            <FAQ></FAQ>
        </div>
    );
}

export default Sections;