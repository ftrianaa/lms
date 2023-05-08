import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from '../pages/students/Courses/Courses';
import CoursesStructurePage from '../pages/students/Courses/CoursesStructurePage';
import Homepage from '../pages/students/Homepage';
import Signin from '../pages/students/Signin';
import Signup from '../pages/students/Signup';

import TopicsPage from '../pages/students/Topics/Topics';
import { onAuthStateChanged } from 'firebase/auth';
import { authFirebase } from '../config/firebase';
import { useAuthContext } from '../../src/context/context'
import ProtectedRoutes from '../../src/routers/ProtectedRoutes';

const Routers = () => {
	const { user } = useAuthContext();
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
			<Route path="/courses/:id" element={<CoursesStructurePage />} />
			<Route path="/courses/:course_id/topics/:topic_id" element={<TopicsPage />} />
		</Routes>
	);
};

export default Routers;
