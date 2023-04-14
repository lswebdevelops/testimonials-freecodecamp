import './App.css';
import  Testimonials from './components/Testimonials';
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className='main-container'>
        <h1> Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonials
        name='Shawn Wang'
        image='shawn'
        firstName='Shawn'
        profession='Software Engineer'
        company='Amazon'
        country='Singapore'
        testimonials="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
  
        />
        <Testimonials
        name='Sarah Chima'
        image='sarah'
        firstName='Sarah'
        profession='Software Engineer'
        company='ChatDesk'
        country='Nigeria'
        testimonials="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        
        />
        <Testimonials
        name='Emma Bostian'
        image='emma'
        firstName='Emma'
        profession='Software Engineer'
        company='Spotify'
        country='Sweden'
        testimonials="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        
        />
        </div>
      </div>
    );
  
  }
}


export default App;
