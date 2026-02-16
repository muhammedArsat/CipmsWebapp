import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
const HeaderLayout = () => {
    return (
        <div>
            <Header />
            <main className='pt-16 px-1 md:px-4'>
                <Outlet />
            </main>
        </div>
    )
}

export default HeaderLayout
