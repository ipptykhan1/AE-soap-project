import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import shop1 from '../../assets/shop/shop1.jpg'
import shop2 from '../../assets/shop/shop2.jpg'
import shop3 from '../../assets/shop/shop3.jpg'
import shop4 from '../../assets/shop/shop4.jpg'
import './Store.css';

const Store = () => {
    return (
      <div>
        
        <div className="hero min-h-screen bg-orange-50">
    <div className="hero-content flex-col-reverse lg:w-4/4 lg:flex-row-reverse"> 
  
  <Swiper
               rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swipe lg:w-1/2"
      >
        <SwiperSlide><img src={shop1} alt='photo' className='image' /></SwiperSlide>
        <SwiperSlide><img src={shop2} alt='photo' className='image'/></SwiperSlide>
        <SwiperSlide><img src={shop3} alt='photo' className='image'/></SwiperSlide>
        <SwiperSlide><img src={shop4} alt='photo' className='image'/></SwiperSlide>  
      </Swiper>
    <div className='py-8 mb-40 mr-6 w-1/2'>
    <h1 className="text-xl font-serif">Store Locator</h1>
    <p className="py-6">Our consultants are available to host you in-store  <br></br> and provide tailored guidance on gift purchases.</p>
    <button className="flex gap-10 border border-2 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">
              Find a nearby store <BsArrowRight className='mt-1 ml-10'/>  </button> 
    </div>
  
  </div>
        </div>
         </div>   
    );
};

export default Store;