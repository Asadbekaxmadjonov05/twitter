import React, {useContext, useState } from 'react';
import { ModeIcon, SaveImgIcon, StatsIcon, GiftIcon, SimailIcon, CalendarIcon, Dots } from "../../components/Icons";
import  Mushtariy from '../../assets/images/mushtariy.png';
import  ShuhratbekImg from '../../assets/images/shuhratbek.png';
import Avatar from "../../assets/images/avatar.png";
import Button from '../../components/Button';
import PostItem from '../../components/PostItem';
import { Context } from '../../context/Context';

function Home() {
  const {postList, setPostList} = useContext(Context);
  const token = JSON.parse(localStorage.getItem("token"));
  const [postValue, setPostValue] = useState(""); 
  const [postImg, setPostImg] = useState("");

  function handleSubmitPost(e) {
    e.preventDefault();
    const data = {
      id: postList?.length ? postList[postList.length - 1].id + 1 : 1,
      name: token?.login,
      imgUrl: Avatar,
      email: "@inner · 25m",                                                                                                                              
      desription: e.target.postValue.value,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uploadCount: null,
      statistika: null,
      postImg: postImg
    };
    setPostList([data, ...postList]);
    e.target.reset()
  }

  return (
    <div className='w-[80%] flex '>
      <div className='w-[70%] border-r-[1px] border-slate-400 h-[100vh] overflow-auto'>
        <div className='bg-white sticky z-40 top-0 flex items-center justify-between p-[20px] border-b-[1px] w-full border-slate-400'>
          <h2 className='font-bold text-[24px]'>Home</h2>
          <button><ModeIcon /></button>
        </div>
        <form onSubmit={handleSubmitPost} autoComplete='off' className='pb-[46px] relative pl-[22px] items-start flex space-x-[15px] border-b-[1px] w-full border-slate-400'>
          <img src={Avatar} alt="Avatar icon" width={60} height={60} />
          <div className='flex flex-col w-full mt-[11px] space-y-[10px]'>
            <input
              onChange={(e) => setPostValue(e.target.value)}
              className='font-semibold mb-[53px] text-[22px] placeholder:text-[#828282] outline-none'
              type="text"
              placeholder='What’s happening'
              name='postValue'
            />
            <div className='flex w-full space-x-[22px]'>
              <label htmlFor="file-upload" className='cursor-pointer'>
                <SaveImgIcon />
              </label>
              <input onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} id="file-upload" type="file" className='hidden' />
              <label htmlFor="gift-upload" className='cursor-pointer'>
                <GiftIcon />
              </label>
              <input id="gift-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <StatsIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <SimailIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
              <label htmlFor="stats-upload" className='cursor-pointer'>
                <CalendarIcon />
              </label>
              <input id="stats-upload" type="file" className='hidden' />
            </div>
          </div>
          <Button
            width={108}
            extraStyle={`duration-300 absolute bottom-[5px] right-[18px] ${postValue ? "" : "opacity-[40%]"}`}
            title={"Tweet"}
            type={"submit"}
          />
        </form>
        <ul>{postList?.length > 0 && postList?.map(item => <PostItem key={item.id} item={item} />)}</ul>
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
  );
}

export default Home;
