import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from '../pages/students/Courses/Courses';
import CoursesStructurePage from '../pages/students/Courses/CoursesStructurePage';
import Homepage from '../pages/students/Homepage';
import Signin from '../pages/students/Signin';
import Signup from '../pages/students/Signup';

import TopicsPage from '../pages/students/Topics/Topics';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courseStructure" element={<CoursesStructurePage />} />
      <Route path="/topics/:title" element={<TopicsPage />} />
    </Routes>
  );
};

export default Routers;
