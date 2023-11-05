import { Helmet } from "react-helmet"
import Footer from "../Component/Footer"
import Navber from "../Component/Navber"

function Layout({ children, title}) {
    return (
        <>
        <Helmet>
            <title>{title}</title>
        </Helmet>

            <Navber />

            <main>
                {children}
            </main>
            
            <Footer />
        </>
    )
}

export default Layout