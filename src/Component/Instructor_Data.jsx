import { getInstructors } from '@/lib/instructor_data';
import React from 'react';
import { Instructor } from './Instructor';

const Instructor_Data = () => {
    const Data= getInstructors();
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
                {
                  Data.map((data,index) => <Instructor key={index} data={data}></Instructor>   )  
                }
            </div>
        </div>
    );
};

export default Instructor_Data;