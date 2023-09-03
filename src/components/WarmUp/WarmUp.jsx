import { BsArrowRight } from 'react-icons/bs';
import Aesop from '../../assets/warmUp.jpg';
import './WarmUp.css';

const WarmUp = () => {
    return (
        <div className='bg-orange-50 pt-16 pb-16'>
            <div className="flex ml-6">
                <div className='ml-10'>
                <p className="font-semibold pt-14">The Athenaeum </p>
                <br/>
                <h4 className="text-3xl font-serif">The warm-up </h4>
                <br/>
                <p className="text-black">In The Athenaeum, our digital reading room: a guide to <br/> ensuring a healthy complexion through the warmer <br/> months.</p>
                <br/>
                <button className="flex gap-10 border border-2 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">Read more <BsArrowRight className='mt-1 ml-5'/></button>
                </div>
                <div className='ae'>
                    <img src={Aesop} alt='' className='aesop' />
                </div>
            </div>
        </div>
    );
};

export default WarmUp;