import React from 'react'
import { FaSadTear } from 'react-icons/fa';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center text-white items-center' >
            <p className=' font-bold text-white'>Lo sentimos algo salio mal.</p>
            <FaSadTear  size="30px" />
        </div>
    );
}

export default Error;