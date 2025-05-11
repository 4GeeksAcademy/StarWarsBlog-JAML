import { Link } from "react-router-dom";
import logo from '../assets/img/logosw.png'
import useGlobalReducer from "../hooks/useGlobalReducer"

const Navbar = () => {

    const { store, dispatch } = useGlobalReducer()

    const deleteItem = (item) => {
        dispatch({ type: 'delete_favorite', payload: item })
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="container">
                <Link to='/' className="navbar-brand p-0">
                    <img src={logo} alt="logoStarWars" className="logo-img ms-3" />
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContect">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <Link to='/Peoples'>
                        <button className="nav-item btn btn-secundary favorite me-3">Peoples</button>
                    </Link>

                    <Link to='/Planets'>
                        <button className="nav-item btn btn-secundary favorite me-3">Planets</button>
                    </Link>

                    <Link to='/Vehicles'>
                        <button className="nav-item btn btn-secundary favorite me-3">Vehicles</button>
                    </Link>
                    <div className="dropdown">
                        <button className="nav-item btn btn-secundary favorite me-3 dropdown-toggle" type='button' data-bs-toggle='dropdown'>Favorites {store.favorites.length}</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {
                                store.favorites.length === 0 ? (
                                    <li className="dropdown-item text-muted">No favorites</li>
                                ) : (
                                    store.favorites.map((item) => (
                                        <li key={item.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                            {item.name}
                                            <button className="btn btn-sm btn-danger" onClick={() => deleteItem(item.uid)}>
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </li>
                                    ))
                                )
                            }
                        </ul>
                    </div>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;