import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import ScrollToTop from '../Features/Components/ScrollToTop'

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout