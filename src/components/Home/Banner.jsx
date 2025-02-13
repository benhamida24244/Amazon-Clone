import React from 'react'
import Slider from "react-slick";
import { bannerImgOne ,
    bannerImgTwo ,
    bannerImgThree ,
    bannerImgFour ,
    bannerImgFive } 
    from '../../assets';
import { div } from 'framer-motion/client';
function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div
              style={{
               position: "absolute",
               top: "70%",
               left: "40%",
               transform: "translate(-50% -50%)",
               width: "210px",
              }}
            >
              <ul style={{ 
                width:"100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
               }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        background: "#131921",
        padding: "8px 0",
        cursor: "pointer",
        border: "1px solid #f3a847"
              }}
            >
              {i + 1}
            </div>
          )
      };
  return (
    <div className='w-full'>
        <div className='w-full h-full relative'>
        <Slider {...settings}>   
        <div>
          <img src={bannerImgOne} alt="BannerImgOne" />
        </div>
        <div>
          <img src={bannerImgTwo} alt="bannerImgTwo" />
        </div>
        <div>
          <img src={bannerImgThree} alt="bannerImgThree" />
        </div>
        <div>
          <img src={bannerImgFour} alt="bannerImgFour" />
        </div>
        <div>
          <img src={bannerImgFive} alt="bannerImgFive" />
        </div>
      </Slider>
        </div>
    </div>
  )
}

export default Banner