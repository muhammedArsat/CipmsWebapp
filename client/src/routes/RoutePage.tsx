import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from '../pages/Login'
import Internships from '../pages/Internships'
import ProtectedRoute from './ProtectedRoute'
import HeaderLayout from '../layouts/HeaderLayout'
import Users from '../pages/Users'
import Dashboard from '../pages/Dashboard'
import NewInternship from '../pages/NewInternship'
import InternshipDetail from '../pages/InternshipDetail'
import Profile from '../pages/Profile'
import MyApplications from '../pages/MyApplications'
import Inbox from '../pages/Inbox'

const RoutePage = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route element={<HeaderLayout />}>
                    <Route path='/internships' element={<ProtectedRoute allowedRoles={["ADMIN", "MENTOR", "PLACEMENT_OFFICER", "STUDENT"]}>
                        <Internships />
                    </ProtectedRoute>} />

                    <Route path='/users' element={<ProtectedRoute allowedRoles={["ADMIN"]}>
                        <Users />
                    </ProtectedRoute>}
                    />

                    <Route path='/dashboard' element={<ProtectedRoute allowedRoles={["ADMIN", "MENTOR", "PLACEMENT_OFFICER", "STUDENT"]} >
                        <Dashboard />
                    </ProtectedRoute>} />

                    <Route path='/new-internship' element={<ProtectedRoute allowedRoles={[ "PLACEMENT_OFFICER"]} >
                        <NewInternship />
                    </ProtectedRoute>} />

                    <Route path='/internship-detail/:id' element={<ProtectedRoute allowedRoles={["ADMIN","MENTOR","PLACEMENT_OFFICER","STUDENT"]}>
                        <InternshipDetail/>
                    </ProtectedRoute>} />
                    <Route path='/my-applications/:id' element={<ProtectedRoute allowedRoles={["ADMIN", "MENTOR", "PLACEMENT_OFFICER", "STUDENT"]}>
                        <MyApplications />
                    </ProtectedRoute>} />

                    <Route path='/profile/:id' element={<ProtectedRoute allowedRoles={[ "STUDENT"]}>
                        <Profile />
                    </ProtectedRoute>} />


                    <Route path='/inbox' element={<ProtectedRoute allowedRoles={["MENTOR"]}>
                        <Inbox />
                    </ProtectedRoute>} />
                </Route>
                

            </Routes>
        </Router>
    )
}

export default RoutePage
