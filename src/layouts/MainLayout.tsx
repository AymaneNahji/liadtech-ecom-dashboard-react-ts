import MainDrawer from '../components/layouts/MainDrawer'
import { Outlet } from 'react-router'
import MainHeader from '../components/layouts/MainHeader'



const MainLayout = () => {

    

    return (
        <div className='flex flex-nowrap h-screen'>
            <MainDrawer />
            <div className='overflow-auto relative flex-1'>
                <MainHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout