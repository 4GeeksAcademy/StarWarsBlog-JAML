import example from '../assets/img/babyYoda.jpg'
import { useEffect } from 'react'
import { getVehicles } from "../Fetch";
import useGlobalReducer from '../hooks/useGlobalReducer'

export const Vehiclecard = () => {

    const { store, dispatch } = useGlobalReducer()
    const vehicles = store.vehicles

    useEffect(() => {

        const fetchData = async () => {
            const _vehicles = await getVehicles()
            dispatch({ type: 'get_vehicles', payload: _vehicles })
        }
        fetchData()

    }, [])

    const handleFavorite = (vehicle) => {
        const isFavorite = store.favorites.some(fav => fav.uid === vehicle.uid);
        if (isFavorite) {
            dispatch({ type: 'delete_favorite', payload: vehicle.uid });
        } else {
            dispatch({ type: 'add_favorite', payload: vehicle });
        }
    };;


    return (
        <div className='row people-card'>
            {
                vehicles.map((vehicle) => {
                    const isFavorite = store.favorites.some(fav => fav.uid === vehicle.uid);

                    return (
                        <div className="card col-mb-2 m-1" key={vehicle.uid}>
                            <div className="col">
                                <img src={example} alt="" className="imgPeople" />
                                <h5 className="card-title text-center mt-2">{vehicle.name}</h5>
                                <div className='btn-card'>
                                    <button
                                        className={`btn ${isFavorite ? 'active' : 'like'} like`}
                                        onClick={() => handleFavorite(vehicle)}
                                    >
                                        <i className="bi bi-star"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}