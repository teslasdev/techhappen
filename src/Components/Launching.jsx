import React from 'react'
import bg0 from '../images/bg0.jpg'
import Countdown from 'react-countdown';


const Launching = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown

      return <div className='flex gap-1 items-center text-white'>
      <span className='bg-[#ffa500] sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] sm:text-[40px] text-[20px] rounded-sm text-white flex justify-center items-center shadow-md'>{days} d</span>
      :
      <span className='bg-[#ffa500] sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] sm:text-[40px] text-[20px] rounded-sm text-white flex justify-center items-center shadow-md'>{hours} h</span>
      :
      <span className='bg-[#ffa500] sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] sm:text-[40px] text-[20px] rounded-sm text-white flex justify-center items-center shadow-md'>{minutes} m</span>
      :
      <span className='bg-[#ffa500] sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] sm:text-[40px] text-[20px] rounded-sm text-white flex justify-center items-center shadow-md'>{seconds} s</span>

      </div>
    }
  };
  return (
    <div className='fixed z-10 flex flex-col-reverse sm:flex-row'>
      <img src={bg0} alt="" srcset=""  className='sm:static relative h-screen  w-full z-20 opacity-100'/>
      <div className='sm:static absolute z-30 bg-[#000875cd] sm:bg-[#000775]  flex flex-col justify-center items-center h-screen sm:w-screen w-full'>
        <h3 className='text-[40px] sm:w-[600px] px-6 sm:px-0 pb-6 uppercase font-bold text-white'>It's no longer news that the techappen website will be live</h3>
        <Countdown
          date={Date.now("April 21, 1983 01:15:00") + 172800000}
          renderer={renderer}
        />,
      </div>
    </div>
  )
}

export default Launching