import { Link, useLocation } from 'react-router'

export function Nav() {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link'
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <a href="/" className="nav-brand"><i className="bi bi-cup-hot"></i> CoffeeShop</a>
                        <ul className="nav-links">
                            <Link to={'/'} className={isActive('/')}>Home</Link>
                            <Link to={'/dashboard'} className={isActive('/dashboard')}>Dashboard</Link>
                            <Link to={'/contact'} className={isActive('/contact')}>Contact</Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}