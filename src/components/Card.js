import React from "react";
import kate from "../images/katie-zaferes.png";
import star from "../images/star.png";


/*{`../images/${props.img}`}*/

export default function Card(prop)
{

     /*
         title: "Life Lessons with Katie Zaferes",
         description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
         price: 136,
         coverImg: "katie-zaferes.png",
         stats: {
             rating: 5.0,

     */
     return(
          <div className="cardbox">
               <img src='./images/${prop.coverImg}' className="cardImage"/>
               <div className="cardStat">
                    <img src={star} className="star" />
                    <span> 5.0 </span>
                    <span className="gray"> (6) • </span>
                    <span className="gray"> USA </span>
               </div>
               <p>{prop.title}</p>
               <p>From <strong>${prop.price}</strong> / person</p>
          </div>


     )



}