import React from "react";
import kate from "../images/katie-zaferes.png";
import star from "../images/star.png";


/*{`../images/${props.img}`}*/

export default function Card()
{
     return(
          <div className="cardbox">
               <img src={kate} className="cardImage"/>
               <div className="cardStat">
                    <img src={star} className="star" />
                    <span> 5.0 </span>
                    <span className="gray"> (6) • </span>
                    <span className="gray"> USA </span>
               </div>
               <p>Life Lessons with Katie Zaferes</p>
               <p>From <strong>$136</strong> / person</p>
          </div>


     )



}