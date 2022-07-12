import React from "react";
import Card from './Card.js';
import data from "../data.js";


     /*
         title: "Life Lessons with Katie Zaferes",
         description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
         price: 136,
         coverImg: "katie-zaferes.png",
         stats: {
             rating: 5.0,

     */


export default function CardSet(){
     const dataElements = data.map( element => {
          return <Card title={element.title} location={element.location}price={element.price} rating={element.stats.rating} coverImg={element.coverImg} />
      })



     return(

          <div>
               {dataElements}
          
          
          </div>




     )

}