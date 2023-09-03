
import { BsArrowRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Home.css'
import candol from '../../assets/skin/candol.jpg';
import candol2 from '../../assets/skin/candol.jpg';
import postDrop from '../../assets/skin/postDrop.jpg';
import bronzer from '../../assets/skin/bronzer.jpg';
import scent from '../../assets/skin/incense.jpg';



const Home = () => {
    return (
        <div className='bg-orange-50 pt-24 flex '>
           <div className='ml-10'>
              <p className='font-bold'>For the home</p>
              <h4 className="text-3xl font-serif">Domestic pleasures</h4>
                <br/>
             <p className="text-black">Our range of aromatic formulations for the home are practical <br/> and pleasing in equal measure.</p>
                <br/>
               <button className="flex gap-10 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">See all Home <BsArrowRight className='mt-1 ml-5'/></button>
           </div>
           <Swiper
               rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper pic"
      >
        <SwiperSlide><img src={candol} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>

        <SwiperSlide><img src={candol2} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>
        
        <SwiperSlide><img src={postDrop} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>
        
        <SwiperSlide><img src={bronzer} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>
        
        <SwiperSlide><img src={scent} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>
        
        <SwiperSlide><img src={scent} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>

        <SwiperSlide><img src={scent} alt='photo' className='image' />
        <p className='text-xl text-center font-semibold text-black mt-6'> Aganica aromatica Candol</p>
        <p className='text-center'>Cardamon, Mimosa, Tobacco</p></SwiperSlide>
        
      </Swiper>

        </div>
    );
};

export default Home;