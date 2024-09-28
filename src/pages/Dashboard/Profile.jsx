import React from 'react'
import { ModeIcon , Dots} from '../../components/Icons'
import ProfileImg from "../../assets/images/profile.png"
import  Mushtariy from '../../assets/images/mushtariy.png';
import  ShuhratbekImg from '../../assets/images/shuhratbek.png';
import BoburImg from "../../assets/images/avatar.png"
import Button from "../../components/Button"
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className='w-[80%]'>
      <div className='w-[70%] border-r-[1px] border-slate-400 h-[100vh] overflow-y-auto'>
        <div className='bg-white sticky z-40 top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Profile</h2>
          <button><ModeIcon /></button>
        </div>
      <div className='h-[280px] relative'>
        <img src={ProfileImg} alt="Profile img" width={910} height={280}/>
      <div className='flex items-end justify-between px-[25px] -translate-y-[80px]'>
        <img src={BoburImg} alt="Avatar-img"  width={150} height={150}/>
        <Button title={"Edit Profile"} width={120} extraStyle={"py-[10px] bg-transparent text-black !border-[2px] !border-slate-500" }/>
      </div>
      </div>
      <ul className='mt-[80px] flex items-center justify-between px-[25px]'> 
        <li>
          <Link  className='text-[18px] font-bold' to={""}>Tweets</Link>
        </li>
        <li>
          <Link  className='text-[18px] font-bold' to={"tweets-replies"}>Tweets & replies</Link>
        </li>  
        <li>
          <Link  className='text-[18px] font-bold' to={"media"}>Media</Link>
        </li>
        <li>
          <Link  className='text-[18px] font-bold' to={"likes"}>Likes</Link>
        </li>
      </ul>
      <Outlet/>
      </div>
      <div  className='w-[30%] m-[20px] relative'> 
  <input className='w-full py-[15px] px-[30px] rounded-[31px] bg-[#EFF3F4] border-none overflow-none '   required type="search" placeholder='Search Twitter'   />
<div className='w-[373px] bg-[#F7F9F9] mt-[20px]   '>
  <h1 className='pl-[17px] font-bold text-[24px] mb-[20px]'>Trends for you</h1>
  <p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
  <h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
  <span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>

  <div className='absolute bottom-[20px]  top-[135px]  right-[16px] '>
<Dots/>
  </div>
  <p className='text-[#393B41] text-[16px] pl-[17px] mb-[3px]  font-regular'>Trending in Germany</p>
  <h2 className='text-[20px]  pl-[17px] font-semibold mb-[3px]  '>Revolution</h2>
  <span className='text-[#393B41] text-[16px]  pl-[17px] font-regular'>50.4K Tweets</span>

  <div className='absolute bottom-[20px]  top-[135px]  right-[16px]'>
<Dots/>
  </div>
</div>
<div className='w-[373px] bg-[#F7F9F9] mt-[40px] '>
  <strong className='pt-[20px] pl-[15px] mb-[30px]'>You might like</strong>
  <div className='flex items-center space-x-4 mt-[35px]'>
  <div>
<img className='pl-[15px]' src={Mushtariy} alt="" width={60} height={60} />
  </div>
<div>
  <strong>Mushtariy</strong>
  <p>@Mushtar565266</p>
</div>
<button className='text-white p-[10px] rounded-[50px] bg-black text-[14px] font-bold'>Follow</button>
  </div>
  <div className='flex items-center space-x-6 mt-[35px]'>
  <div>
<img className='pl-[15px]' src={ShuhratbekImg} alt="" width={60} height={60} />
  </div>
  <div>
  <strong>Shuhratbek</strong>
  <p>@mrshukhrat</p>
</div>
<button className='text-white p-[10px] rounded-[50px] bg-black text-[14px] font-bold'>Follow</button>
  </div>
</div>
<button className='text-[#1DA1F2] pt-[10px]'>Show more</button>
      </div>
    </div>
  )
}

export default Profile
