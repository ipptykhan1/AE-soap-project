import { BsArrowUpRight } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="text-white">        
        <footer className="footer grid grid-rows-2  p-10 bg-black text-white">
        < div className="text-white">
          <span className="footer-title text-2xl text-white border-b">Subscribe to Aesop communications</span>
          <input className="px-16 py-4 text-white  bg-black ml-10 mb-4 mt-3 rounded-sm font-semibold outline outline-2 outline-offset-2" type="text" name="email" placeholder="Email address" />
          <div className="form-control">
            <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox  bg-white" />
            <p className="label-text  text-white ml-2">Subscribe to receive communications from Aesop. By subscribing, by confirm <br/> you have read and understood our  <span className='border-b'>privacy policy</span></p> 
           </label>
         </div>
        </div> 
       
        <div>
          <span className="footer-title divide-y-8 border-b">Sustainability</span> 
          <p>All Aesop products are vegan, and we do not test our formulations or ingredients on <br/> animals. we are leaping bunny approved and a certified and a Certified B Corporation. <br/>Learn more</p>
        </div> 
        <div>
          <span className="footer-title border-b">Orders and support</span> 
          
          
          <a className="link link-hover flex gap-1"> Contact us <span>  <BsArrowUpRight/></span></a>   
          <a className="link link-hover flex gap-1">FAQs   <span>  <BsArrowUpRight/></span></a> 
          <a className="link link-hover flex gap-1">Shipping <span>  <BsArrowUpRight/></span></a>
          <a className="link link-hover flex gap-1">Returns <span>  <BsArrowUpRight/></span></a>
          <a className="link link-hover">Order history</a>
          <a className="link link-hover">Terms and conditions</a>
        </div> 

        <div>
          <span className="footer-title border-b">About</span> 

          <a className="link link-hover">Our story</a> 
          <a className="link link-hover">Foundation</a> 
          <a className="link link-hover">careers</a> 
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Accessibility</a>
          <a className="link link-hover">Cookie Policy</a>
          <a className="link link-hover">Github</a>
        </div> 
        <div>
          <span className="footer-title border-b">Services</span> 

          <a className="link link-hover">Live assistance</a> 
          <a className="link link-hover">Corporate gifts</a> 
          <a className="link link-hover">Facial Appointments</a> 
          <a className="link link-hover">Click and collect</a>
          <a className="link link-hover">Video consultation</a>
        </div> 
        <div>
          <span className="footer-title border-b">Social media</span> 
          <a className="link link-hover flex gap-1">Instagram <span>  <BsArrowUpRight/></span></a> 
          <a className="link link-hover flex gap-1">Twitter <span>  <BsArrowUpRight/></span></a> 
          <a className="link link-hover flex gap-1">LinkedIn <span>  <BsArrowUpRight/></span></a> 
          <a className="link link-hover">WeChat</a>
          <a className="link link-hover flex gap-1">Weibo <span>  <BsArrowUpRight/></span></a>
        </div>
       
        <div>
          <span className="footer-title border-b">Location preferences</span> 
          <p>Shipping:</p> 
          <a className="link link-hover border-b">HongKongSAR,China</a> 
          <br></br>
          <p>Language:</p>
          <a className="link link-hover border-b">English</a>
          <a className="link link-hover">你好</a>
        </div>
       
      </footer>
      

      <footer className="footer p-4 bg-black text-white">
      <div>
        <p> © Aesop </p>
      </div>
      </footer>

      </div>
      );
};

export default Footer;