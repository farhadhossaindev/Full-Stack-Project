import slider1 from '../assets/1.png'
import slider2 from '../assets/2.png'
import slider3 from '../assets/3.png'
import slider4 from '../assets/4.png'
import slider5 from '../assets/5.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../src/App.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



function SliderHomeMain() {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>


            </Swiper>
        </div>
    )
}

export default SliderHomeMain