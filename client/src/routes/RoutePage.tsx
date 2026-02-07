import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from '../pages/Login'

const RoutePage = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default RoutePage
