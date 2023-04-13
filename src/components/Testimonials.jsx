import React from "react";
import '../style/Testimonials.css'


export function Testimonials(props){
    return(
        <div className="testimonial-container">
            <img className="image-container" 
            src={require(`../images/testimonials-${props.image}.png`)}
            alt={`A photo of ${props.firstName}`}/>
            <div className="para-container">
                <p className="name-container">{props.name} in {props.country}</p>
                <p className="profession-container">Software Engineer at {props.company}</p>
                <p className="about-container">"{props.testimonials}"</p>
            </div>
        </div>
    )
}


