import Banner from '@/Component/Banner';
import { Navbar } from '@/Component/Navbar';
// import Popular_Courses from '@/Component/Popular_Courses';
import React from 'react';
import Popular_CoursesPage from '../Populer_Courses/page';
import About_Learning from '@/Component/about_learning';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <Popular_CoursesPage></Popular_CoursesPage>
          <About_Learning></About_Learning>
        </div>
    );
};

export default HomePage;