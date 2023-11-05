import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useProductContext } from '../contextApi/allData';



function SliderCat() {
    const { category } = useProductContext()
    console.log(category)
    return (
        <div className='mx-10'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    category.map(cat => <SwiperSlide key={cat._id}>
                        <div className="card w-96 bg-base-100 shadow-xl image-full my-20">
                            <figure><img src={cat.imageUrl} alt="clothing" /></figure>
                            <div className="card-body justify-center align-middle">
                                <h2 className="card-title justify-center">{cat.CategoryNane}</h2>
                                <div className="card-actions align-middle justify-center my-10">
                                    <button className="btn btn-primary">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    )
}

export default SliderCat