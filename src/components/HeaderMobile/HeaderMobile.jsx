import React from 'react';
import {GoThreeBars , GoHeart} from 'react-icons/go';

const HeaderMobile = () => {
    return (
        <div className=' w-full h-[10vh] lg:hidden flex justify-between items-center px-5 bg-red-500 min-w-[320px] '>
            <button className=' flex items-center justify-center text-purple-500 rounded-md bg-white/60 backdrop-blur p-2 shadow-sm cursor-pointer active:scale-75 transition-all ' type='button'>
                <GoThreeBars size="30px"/>
            </button>
            <img className=' w-36 h-14' src="https://i.imgur.com/7CNuKSf.png" alt="pokemon logo" />
            <button className="relative flex items-center justify-center text-purple-500 rounded-md bg-white/60 backdrop-blur p-2 shadow-sm cursor-pointer active:scale-75 transition-all">    
                <GoHeart size="30px"/>
                <span className="absolute top-[-3px] right-[-3px] rounded-full  w-3 h-3 bg-white animate-pulse">
            </span>
            </button>
        </div>
    );
}

export default HeaderMobile;