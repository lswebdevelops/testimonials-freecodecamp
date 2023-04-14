import React from "react";

import '../style/Testimonials.css'

class Testimonials extends React.Component{
    render(){
        return(
            <div className="testimonial-container">
                <img className="image-container" 
                src={require(`../images/testimonials-${this.props.image}.png`)}
                alt={`A photo of ${this.props.firstName}`}/>
                <div className="para-container">
                    <p className="name-container">{this.props.name} in {this.props.country}</p>
                    <p className="profession-container">Software Engineer at {this.props.company}</p>
                    <p className="about-container">"{this.props.testimonials}"</p>
                </div>
            </div>
        );
    }
}

export default Testimonials;


