import logo from './assets/logo.png'
export default function Header() {
    return (
        <nav className="navbar bg-light mb-4">
            <div className="container fluid">
                <a href="/" className="navbar-brand">
                    <div className="d-inline-flex">
                        <img
                            className="mr-2 img-fluid img-thumbnail d-inline-block align-text-top"
                            src={logo}
                            alt="Logo"
                            width="34"
                            height="32"
                        />
                        ProjectMgmt
                    </div>
                </a>
            </div>
        </nav>
    )
}
