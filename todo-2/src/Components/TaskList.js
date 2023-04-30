import React, { useState, useEffect } from 'react'
import useHttp from '../hooks/use-http'
const TaskList = (props) => {
    return <>
        <div className='text-white m-4 '>
            <h3 className='text-lg pb-2 font-semibold'>On Going Task</h3>
            <ul className='overflow-scroll h-[30rem] transition-all duration-700 ease-in-out'>
                {props.task.map((item) => {
                    return  <div className='bg-[#24344E] mb-4 flex p-3 rounded-2xl drop-shadow-2xl'>
                                <div className='w-20 flex items-center justify-center'>
                                    <i class="fa-sharp fa-solid fa-list-check"></i>
                                </div>
                                <div className='relative w-full'>
                                    <li key={item.id} className='text-lg font-semibold'>{item.taskName}</li>
                                    <span className='text-xs font-light'>Client Project</span>
                                </div>
                                <div className='w-3 pe-5 flex items-center
                                                justify-center'>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                            </div>
                    })}
            </ul>
        </div >
    </>
}
export default TaskList
