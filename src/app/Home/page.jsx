import Banner from '@/Component/Banner';
import { Navbar } from '@/Component/Navbar';
// import Popular_Courses from '@/Component/Popular_Courses';
import React from 'react';
import Popular_CoursesPage from '../Populer_Courses/page';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <Popular_CoursesPage></Popular_CoursesPage>
        </div>
    );
};

export default HomePage;