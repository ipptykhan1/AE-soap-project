import { GrFavorite } from 'react-icons/gr';


const NavBar = () => {
    return (
        <div className='h-6'>
      <div className='flex justify-start'> 
      <div className="navbar bg-base-100 flex ">
       <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl lg:hidden">Aesop.</a>
       </div>
       <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
      
      <li><a>Skin care</a></li>
        <li><a>Body & Hand</a></li>
        <li><a>Hair</a></li>
        <li><a>Fragrance</a></li>
        <li><a>Home</a></li>
        <li><a>Kits & Travel</a></li>
        <li><a>Gifts</a></li>
        <li><a>Read</a></li>
        <li><a>Stores</a></li>
        <li><a>Facial Appointments</a></li>
    </ul>
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle lg:hidden ">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  
    <button className="btn btn-ghost btn-circle lg:hidden">
    <GrFavorite/>
    </button>
    <a className="btn ">Login</a>
    <a className="btn">cabinet</a>
    <a className="btn">cart</a>

    <div className="navbar-start">
    <div className="dropdown lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Skin care</a></li>
        <li><a>Body & Hand</a></li>
        <li><a>Hair</a></li>
        <li><a>Fragrance</a></li>
        <li><a>Home</a></li>
        <li><a>Kits & Travel</a></li>
        <li><a>Gifts</a></li>
        <li><a>Read</a></li>
        <li><a>Stores</a></li>
        <li><a>Facial Appointments</a></li>
        
      </ul>
    </div>
  </div>

  </div>
</div>
</div>
            
        </div>
    );
};

export default NavBar;