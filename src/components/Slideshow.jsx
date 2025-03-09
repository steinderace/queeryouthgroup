import React from 'react'
import { Swiper, SwiperSlide } from 'swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles 
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation' 

// Import your images (replace with your actual image paths)
import Image1 from '../assets/images/3.-Nepal-Pride-Parade-2019.jpg'
import Image2 from '../assets/images/4.-Nepal-Pride-Parade-2019'
import Image3 from '../assets/images/2.-Trans-Pride-Parade-2020'
import Image4 from '../assets/images/IMG_6795.jpg'
import Image5 from '../assets/images/IMG_5290.jpg'


const Slideshow = () => {
    return (
        <div className="relative h-screen w-full">
          {/* Slideshow */}
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src={Image1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image4}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Image5}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
    
          {/* Site Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h1 className="text-6xl md:text-8xl font-bold text-white text-center">
              Queer Youth Group
            </h1>
          </div>
        </div>
      );
}

export default Slideshow