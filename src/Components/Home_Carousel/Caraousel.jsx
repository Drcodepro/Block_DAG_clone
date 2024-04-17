// import React from "react";
// import "./Carousel.css"
// import Slider from 'react-slick';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Button from "../Buttons/Button";

// export default function Carousel(){
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 200000, // Adjust this value for the speed of automatic scrolling
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//     };

//     return(<Slider {...settings}>
      
//       <div >
//         <img src="./carousel_images/image1.png" alt="first slide" />
//         <Button value="Watch KEYNOTE"/>
//       </div>

//       <div className="SecondSlide carousel-slide " >
//         <video src="./carousel_images/slideVideo.mp4"autoPlay loop muted playsInline />
//       </div>

//       <div className="thirdSlide carousel-slide ">
//         <h1 style={{ display: "block" }}>Batch 8<br />Selling Out Fast<br />limited Miners<br />Available </h1>
//         <img src="./carousel_images/image3.webp" alt="third slide" />
//       </div>

//       <div className="forthSlide carousel-slide " >
//         <h1 style={{ display: "block" }}>Join Cloud Mining,<br />Earn BDAG,<br />Injoy.</h1>
//         <img src="./carousel_images/image4.webp" alt="forth slide" />
//       </div>

//       <div className="fifthSlide carousel-slide ">
//         <h1 style={{ display: "block" }}>Next Generation<br />Blockchain,<br />Built For Defi</h1>
//         <img src="./carousel_images/image2.webp" alt="fifth slide" />
//       </div>


//     </Slider>)
// }





import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import "./Carousel.css"
import Button from "../Buttons/Button";


export default function Carousel(){
    
    return(<Swiper
      slidesPerView={1}
      spaceBetween={50}
      centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      modules={[ Autoplay,Pagination]}
      className="mySwiper"
    >


      <SwiperSlide className="first_slide">
        <img src="./carousel_images/image1.png" alt="first slide"  className="firstimg" />
         <Button  value="Watch KEYNOTE"/>
      </SwiperSlide>

       <SwiperSlide className="video_Slide">
         <video src="./carousel_images/slideVideo.mp4"autoPlay loop muted playsInline />
         <h1>Presale is <span style={{color:"red"}}>Live</span></h1>
       </SwiperSlide>

       <SwiperSlide className="thirdSlide carousel-slide ">
         <h1 style={{ display: "block" }}>Batch 8<br />Selling Out Fast<br />limited Miners<br />Available </h1>
         <img src="./carousel_images/image3.webp" alt="third slide" />
       </SwiperSlide>

       <SwiperSlide className="forthSlide carousel-slide " >
         <h1 style={{ display: "block" }}>Join Cloud Mining,<br />Earn BDAG,<br />Injoy.</h1>
         <img src="./carousel_images/image4.webp" alt="forth slide" />
       </SwiperSlide>

       <SwiperSlide className="fifthSlide carousel-slide ">
         <h1 style={{ display: "block" }}>Next Generation<br />Blockchain,<br />Built For Defi</h1>
       <img src="./carousel_images/image2.webp" alt="fifth slide" />
       </SwiperSlide>


</Swiper>)
}