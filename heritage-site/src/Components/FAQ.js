import React from "react";
import FAQItem from "./FAQItem";
import './FAQ.css';


const FAQ = ()=>{

    let faqItemsList=[]
    let faqItems=[
        {
                "titel":"How to book tour package?",

                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
        },
        {
                "titel":"How can we avail combo pack?",

                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
        },
        {
                "titel":"How can we cancel the package?",

                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
        },
        {
                "titel":"How can I get my refund?",

                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
        },
        {
                "titel":"Within how many days my money will be refunded?",

                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
        },
        {
                "titel":"How can I register my complan?",

                "details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
        }
    ]

    faqItems.forEach((item,index) => {
        faqItemsList.push(<FAQItem key={index} title={item["titel"]} details={item['details']} />)
    })


    return(

        <section>

            <div className="faq-section-container">

                <div className="section-heading-container">

                    <div className="heading-content">
                        <div className='heading-text'>

                            <h1>frequently asked questions</h1>

                        </div>
                    </div>

                </div>

                {faqItemsList}

            </div>

        </section>

    );

}

export default FAQ;