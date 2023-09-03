import { BsArrowRight } from 'react-icons/bs';
import body1 from '../../assets/shop/body1.jpg';
import body2 from '../../assets/shop/body2.jpg';
import body3 from '../../assets/shop/body3.jpg';
import './Body.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const Body = () => {
    return (
        < div className='flex pb-2 bg-orange-50'>
           <div className='ml-10 mt-10 '>
              <p className='font-bold'>For the body</p>
              <h4 className="text-3xl font-serif">An expression of care</h4>
                <br/>
             <p className="text-black">Aesop formulations offer the body deserving care, to cleanse, <br/>replenish, and nourish skin. Each product is a sensory pleasure to use <br/> with its own delightful aroma.</p>
                <br/>
               <button className="flex gap-10 border border-2 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">See all body care <BsArrowRight className='mt-1 ml-5'/></button>
           </div>
      
           <Swiper
               rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swi"
      >
        <SwiperSlide className='text-pink swi'><img src={body1} alt='photo' className='image -mb-28'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin'>Nurture Bar Soap</p> </SwiperSlide>

        <SwiperSlide className='text-pink swi'><img src={body2} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin '>Nurture Bar Soap</p>
        </SwiperSlide>

        < SwiperSlide className='swi'><img src={body3} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>   
      </Swiper>
          
           </div>
    );
};

export default Body;