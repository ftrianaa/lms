import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from '../pages/students/Courses/Courses';
import CoursesStructurePage from '../pages/students/Courses/CoursesStructurePage';
import Homepage from '../pages/students/Homepage';
import Signin from '../pages/students/Signin';
import Signup from '../pages/students/Signup';
import TopicsPage from '../pages/students/Topics/Topics';
import Inbox from '../pages/students/Inbox/Inbox';
import EditProfile from '../pages/students/Profile/MyProfile/Edit/EditProfile';
import Profile from '../pages/students/Profile/MyProfile/Profile';
import ProfileUser from '../pages/students/Profile/OtherProfile/ProfileUser';
import DailyNews from '../pages/students/DailyNews/DailyNews';
import People from '../pages/students/People/People';
import Account from '../pages/students/Account/Account';
import DashboardPage from '../pages/teachers/Dashboard/Dashboard';
import CoursePage from '../pages/teachers/Dashboard/Courses/Courses';
import UserPage from '../pages/teachers/Dashboard/Users/Users';

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courseStructure" element={<CoursesStructurePage />} />
      <Route path="/topics/:title" element={<TopicsPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:id" element={<ProfileUser />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/news" element={<DailyNews />} />
      <Route path="/people" element={<People />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/account" element={<Account />} />
      <Route path="/teacher/dashboard" element={<DashboardPage />} />
      <Route path="/teacher/courses" element={<CoursePage />} />
      <Route path="/teacher/users" element={<UserPage />} />
    </Routes>
  );
};

export default Routers;
