import React from 'react'

const Loader = () => {
    return (
        <div className=" w-full h-[90vh] flex justify-center items-center p-5 " >
            <span className=' w-40 h-40 border-8 border-l-purple-200 border-purple-500 animate-spin rounded-full ' >

            </span>
        </div>
    );
}

export default Loader;