import React from 'react';

import { getData } from '@/lib/data';
import { Course_data } from '@/Component/Course_data';

const Popular_CoursesPage = () => {
    const Data = getData();
    const sorted_Courses = Data.sort((a, b) => b.rating - a.rating);
       return (
           <div>
               <h1 className='text-center text-4xl font-bold'>Popular Courses</h1>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 w-10/12 mx-auto my-10'>
                   {
                       sorted_Courses.slice(0,3).map((data,index)=><Course_data key={index} data={data}></Course_data>)
                   }
               </div>
           </div>
       );
};

export default Popular_CoursesPage;