import Footer from './Footer/Footer'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'



function HomePage() {
    return (
        <div>
            
            <Header /> 
            <div>
                <Outlet />
            </div> 
            <Footer />
        </div>
    )
}

export default HomePage