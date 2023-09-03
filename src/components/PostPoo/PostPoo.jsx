import { BsArrowRight } from 'react-icons/bs';
import backImg from '../../assets/shop/dropBackground.jpg'
import drop from '../../assets/shop/postDrop.jpg'

const PostPoo = () => {
    return (
        
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative ml-14'>
    <img src={backImg} className="w-3/4 rounded-lg mr-0 shadow-2xl" />
    <img src={drop} className="w-1/2 rounded-lg shadow-2xl absolute right-5 bottom-0" />
    </div>
    
    <div>
      <h1 className="text-5xl font-bold">Post-Poo Drops has returned</h1>
      <p className="py-6">Here to make the malodorous melodious once again.<br/> Dispense this favoured formulation into the toilet bowl <br/> after flushing to effectively mask disagreeable odours.</p>
      <button className="flex gap-10 border border-2 font-bold mt-4 ps-5 px-14 py-3 hover:bg-black hover:text-white">Discover Post-poo Drops <BsArrowRight/></button>
    </div>
  </div>
</div>     
        
        
    );
};

export default PostPoo;