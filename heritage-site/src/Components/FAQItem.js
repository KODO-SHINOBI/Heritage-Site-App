import React,{useState} from 'react';
import './FAQItem.css';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import { display } from '@mui/system';



const FAQItem= (props)=>{

    
    const [iconClassName,setIconClassName] = useState('icon arrow-icon');
    const [cName,changeItemDescriptionClassName] = useState("items-description-hidden");
    const [iconIndex,setIconIndex] = useState(0);
    const [IconName,setIconName] = useState(KeyboardDoubleArrowDownIcon);


    const changeIndex = (index)=>{
        // console.log("clicked",displayProperty);
        if(index>1){
            index=0;
        }
        if(index===1){
            changeItemDescriptionClassName("items-description");
            setIconClassName('icon cross-icon');
            setIconName(CancelIcon);
        }
        else{
            changeItemDescriptionClassName("items-description-hidden");
            setIconClassName('icon arrow-icon');
            setIconName(KeyboardDoubleArrowDownIcon);
        }
        setIconIndex(index);
    }

    
    

    return(

        <div className='items-container'>

            <div className='items-content-container'>
                <div className='items-contents' >

                    <div className='items-content'>

                        <div className='items-title'>
                            <h3>{props.title}</h3>
                        </div>

                        <div className={cName} >

                            <p>{props.details}</p>

                        </div>

                    </div>

                    <div className='icon-container'>

                        <div className='icon-content' >
                            < IconName className={iconClassName} onClick={()=>{changeIndex(iconIndex+1)}}/>
                        </div>

                    </div>

                </div>
            </div>

        </div>
        
    );
}

export default FAQItem;