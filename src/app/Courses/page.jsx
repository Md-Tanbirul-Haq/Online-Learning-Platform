import { Course_data } from '@/Component/Course_data';
import { getData } from '@/lib/data';
import React from 'react';

const CoursesPage = () => {
    const Data = getData();
    return (
        <div>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-10/12 mx-auto my-10'>
                {
                    Data.map((data,index)=><Course_data key={index} data={data}></Course_data>)
                }
            </div>
        </div>
    );
};

export default CoursesPage;