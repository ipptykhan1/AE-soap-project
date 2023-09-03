import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import a from '../../assets/skin/postDrop.jpg';
import b from '../../assets/skin/Fcleanser.jpg';
import c from '../../assets/skin/aesop-skin-care.jpg';
import d from '../../assets/skin/serun.jpg';
import e from '../../assets/skin/aesop-skin-care.jpg';
import f from '../../assets/skin/Fcleanser.jpg';
import g from '../../assets/skin/serun.jpg';
import h from '../../assets/skin/postDrop.jpg';
import './Skin.css';



const Skin = () => {
    return (
        <div className='bg-orange-50'>
            <div className=' container ml-10 '>
              <p className='font-bold'>For the skin</p>
              <h4 className="text-3xl font-serif">Attention for all types</h4>
                <br/>
             <p className="text-black">The well-being of your skin is the product of hydration, nourishment, <br/> and protection through discerning rituals. Explore requisite skin care <br/>for all skin types.</p>
                <br/>
               <button className="flex gap-10 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">See all skin care <BsArrowRight className='mt-1 ml-5'/></button>
           </div>
           <Swiper
               rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper swi"
      >
        <SwiperSlide className='text-pink swi'><img src={a} alt='photo' className='image -mb-28'/>
        <p className='text-center  font-semibold'>Lucent facial concentrate</p>
        <p className='text-center  font-thin'>A vitamin C-rice layering serum</p> </SwiperSlide>

        <SwiperSlide className='text-pink swi'><img src={b} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin '>Nurture Bar Soap</p>
        </SwiperSlide>

       
        < SwiperSlide className='swi'><img src={c} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>

         < SwiperSlide className='swi'><img src={d} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>

        < SwiperSlide className='swi'><img src={e} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>

        < SwiperSlide className='swi'><img src={f} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>

        < SwiperSlide className='swi'><img src={g} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>

        < SwiperSlide className='swi'><img src={h} alt='photo' className='image -mb-20'/>
        <p className='text-center font-semibold'>Nurture Bar Soap</p>
        <p className='text-center font-thin mb-8'>Nurture Bar Soap</p>
        </SwiperSlide>

      </Swiper>

                     
        </div>
    );
};

export default Skin;