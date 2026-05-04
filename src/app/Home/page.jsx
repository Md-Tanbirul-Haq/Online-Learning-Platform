import Banner from '@/Component/Banner';
import { Navbar } from '@/Component/Navbar';

import React from 'react';
import Popular_CoursesPage from '../Populer_Courses/page';
import About_Learning from '@/Component/about_learning';
import Instructor_Data from '@/Component/Instructor_Data';


const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <Popular_CoursesPage></Popular_CoursesPage>
          <About_Learning></About_Learning>
          <Instructor_Data></Instructor_Data>
          
        </div>
    );
};

export default HomePage;