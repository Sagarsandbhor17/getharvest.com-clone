import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FaStar } from 'react-icons/fa';
import '../styles/Slide.css'
export const Slide = ({onClick}) => {
    const data=[
        {   id:1,
            name:"Women on Adventure",
             desc: "i have tried numerous other invoiving tools but none compare to the stability and quality",
            review:"7 days ago"
        },
        {   id:2,
            name:"Women on Adventure",
             desc: "Harvest is great.it has LITERRALLY changed the way we work.makes ver easy",
            review:"10 days ago"
        },
        {   id:3,
            name:"Women on Adventure",
             desc: "We have tried using other solutions but end up coming back to harvest its extreamly well",
            review:"2 days ago"
        },
        {   id:4,
            name:"Women on Adventure",
             desc: " We would say harvest is great.it has LITERRALLY changed the way we work.makes ver easy",
            review:"8 days ago"
        },
        {   id:5,
            name:"Women on Adventure",
             desc: "i have tried numerous other invoiving tools but none compare to the stability and quality",
            review:"7 days ago"
        },
        {   id:6,
            name:"Women on Adventure",
             desc: "We have tried using other solutions but end up coming back to harvest its extreamly well",
            review:"6 days ago"
        },
        {   id:7,
            name:"Women on Adventure",
             desc: "Harvest is great.it has LITERRALLY changed the way we work.makes ver easy",
            review:"8 days ago"
        },
        {   id:8,
            name:"Women on Adventure",
             desc: "We have tried using other solutions but end up coming back to harvest its extreamly well",
            review:"11 days ago"
        },
        {   id:9,
            name:"Women on Adventure",
             desc: "i have tried numerous other invoiving tools but none compare to the stability and quality",
            review:"17 days ago"
        },
        
    ]
    
  return (
   <>
    <Splide className='splidemain'  options={{perPage:3,gap:"3rem",drag:"free"}}>
   {data.map((e)=>(
<SplideSlide>
    <div key={e.id} onClick={onClick} className="slide">
    <div className='rating'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
      <p style={{color:"grey",fontWeight:400,paddingLeft:"10px"}}>{e.review}</p>
    </div>
        <p>{e.desc}</p>
    </div>
</SplideSlide>
))}
   </Splide>
 
   
   </>
  )
}
