import soap from '../../assets/shop/soap.jpg';
import './Banner.css';
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {
    return (
      <div className="container">
           <div className="hero min-h-screen" >
            <img className='background' src={soap}/>
           {/* style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}} */}
        <div className=""></div>
        <div className="text-neutral-content">
        <div className="text-inline pr-60">
        <p className='font-bold'>Bar Soaps</p>
       <br/>
        <p className="mb-5 text-4xl font-semibold">A body care classic, <br/> reimagined </p>
         <p className="mb-5">Breathing new life into the humble bar soap are Nurture, <br/> Polish and Refresh—three additions to the range, each <br/> imparting a unique constellation of benefits.</p>
      <button className="flex gap-10 border border-2 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">Discover Bar Soaps<BsArrowRight className='mt-1 ml-5'/></button>

      {/* <button className="btn btn-outline">Discover Bar Soaps<BsArrowRight className='mt-1 ml-5'/></button> */}


    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;