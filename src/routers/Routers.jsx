import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from '../pages/students/Courses/Courses';
import CoursesStructurePage from '../pages/students/Courses/CoursesStructurePage';
import Homepage from '../pages/students/Homepage';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" />
      <Route path="/courseStructure" element={<CoursesStructurePage />} />
    </Routes>
  );
};

export default Routers;
