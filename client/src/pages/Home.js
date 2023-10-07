import React from "react";
import './Home.css';

export default function Home(){
    return(<>
    
    <div className="circular-images">
      <div className="circular-image">
        <img src="images/HomePageImage.jpg"  alt="Circular Image 1" />
        <p >Emilio's image</p>

      </div>
      <div className="circular-image">
        <img src="images/HomePageImage.jpg"  alt="Circular Image 2" />
        <p >Flo's image</p>
      </div>
    </div>
       
        <div>
          here you write a little bit about the couple's story
         <p>how they fell in love ...</p> 
        </div>
    </>);
}