import React, { useEffect, useState } from 'react';
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

import EditCoursesPage from '../pages/teachers/Dashboard/Courses/EditCourses';
import CreateCoursesPage from '../pages/teachers/Dashboard/Courses/CreateCourse';
import CreateUsersPage from '../pages/teachers/Dashboard/Users/CreateUsers';
import { onAuthStateChanged } from 'firebase/auth';
import { authFirebase } from '../config/firebase';
import { useAuthContext } from '../../src/context/context'
import ProtectedRoutes from '../../src/routers/ProtectedRoutes';

const Routers = () => {
	const user = useAuthContext();
	return (
		<Routes>
			<Route exact path="/" element={
				<Homepage />
			} />
			<Route path="/courses" element={
				<ProtectedRoutes
					user={user}
					redirectPath={"/login"}>
					<Courses />
				</ProtectedRoutes>
			} />
			<Route path="/login" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/courses/:course_id" element={<CoursesStructurePage />} />
			<Route path="/courses/:course_id/sections/:section_id" element={<TopicsPage />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/profile/:id" element={<ProfileUser />} />
			<Route path="/inbox" element={<Inbox />} />
			<Route path="/news" element={<DailyNews />} />
			<Route path="/people" element={<People />} />
			<Route path="/profile/edit" element={<EditProfile />} />
			<Route path="/account" element={<Account />} />
			<Route path="/teacher/dashboard" element={<DashboardPage />} />
			<Route path="/teacher/courses" element={<CoursePage />} />
			<Route path="/teacher/courses/edit" element={<EditCoursesPage />} />
			<Route path="/teacher/courses/create" element={<CreateCoursesPage />} />
			<Route path="/teacher/users" element={<UserPage />} />
			<Route path="/teacher/users/create" element={<CreateUsersPage />} />
		</Routes>
	);
};

export default Routers;
