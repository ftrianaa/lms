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
import UserPage from '../pages/teachers/Dashboard/Users/Users';
import CreateUsersPage from '../pages/teachers/Dashboard/Users/CreateUsers';
import CoursesPages from '../pages/teachers/Dashboard/Courses/Courses';
import CreateCoursesPage from '../pages/teachers/Dashboard/Courses/CreateCourses';
import CreateLessonsPage from '../pages/teachers/Dashboard/Lessons/CreateLessons';
import CreateTopicsPage from '../pages/teachers/Dashboard/Topics/CreateTopics';
import LessonsPage from '../pages/teachers/Dashboard/Lessons/Lessons';
import EditLessonsPage from '../pages/teachers/Dashboard/Lessons/EditLessons';
import EditCoursesPage from '../pages/teachers/Dashboard/Courses/EditCourses';
import Topics from '../pages/teachers/Dashboard/Topics/Topics';
import SingleCoursePage from '../pages/teachers/Dashboard/Courses/SingleCourse';

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
      <Route path="/teacher/courses" element={<CoursesPages />} />
      <Route path="/teacher/courses/create" element={<CreateCoursesPage />} />
      <Route path="/teacher/courses/:id" element={<SingleCoursePage />} />

      {/* course - section - lesson */}
      <Route path="/teacher/courses/edit" element={<EditCoursesPage />} />
      <Route path="/teacher/lessons" element={<LessonsPage />} />
      <Route path="/teacher/lessons/create" element={<CreateLessonsPage />} />
      <Route path="/teacher/lessons/edit" element={<EditLessonsPage />} />
      <Route path="/teacher/topics" element={<Topics />} />

      <Route path="/teacher/topics/create" element={<CreateTopicsPage />} />
      <Route path="/teacher/users" element={<UserPage />} />
      <Route path="/teacher/users/create" element={<CreateUsersPage />} />
    </Routes>
  );
};

export default Routers;
