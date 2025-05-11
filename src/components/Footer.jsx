export const Footer = () => {
    return (
        <div>
            <nav className="navbar fixed-bottom bg-secundary">
                <div className="container-fluid">
                    <div className="c-footer">
                        <p>Copyrightⓒ</p>
                    </div>
                    <div className="rs-footer me-5">
                        <p>¿Ya me sigues?</p>
                    </div>
                    <div className="rsi-footer me-5">

                        <button className="nav-item btn btn-secundary favorite me-3">
                            <a href="https://www.instagram.com/alessanderleon/?next=%2F" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </button>

                        <button className="nav-item btn btn-secundary favorite me-3">
                            <a href="https://www.facebook.com/jonathan.a.leon.3/" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </button>

                        <button className="nav-item btn btn-secundary favorite me-3">
                            <a href="https://x.com/Alessgreen94" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
