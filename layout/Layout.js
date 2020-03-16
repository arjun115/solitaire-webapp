import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

let MainLayout = ({ pageName = 'default', children }) => {
    return (
        <div className={`layout layout-${pageName}`}>
            <div className="d-flex flex-column h-100">
                <main className="flex-shrink-0">
                    <Navigation />
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout