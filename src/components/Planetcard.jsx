import example from '../assets/img/babyYoda.jpg'
import { useEffect } from 'react'
import { getPlanets } from "../Fetch";
import useGlobalReducer from '../hooks/useGlobalReducer'

export const Planetcard = () => {

    const { store, dispatch } = useGlobalReducer()
    const planets = store.planets

    useEffect(() => {

        const fetchData = async () => {
            const _planets = await getPlanets()
            dispatch({ type: 'get_planets', payload: _planets })
        }
        fetchData()

    }, [])

    const handleFavorite = (planet) => {
        const isFavorite = store.favorites.some(fav => fav.uid === planet.uid);
        if (isFavorite) {
            dispatch({ type: 'delete_favorite', payload: planet.uid });
        } else {
            dispatch({ type: 'add_favorite', payload: planet });
        }
    };;


    return (
        <div className='row people-card'>
            {
                planets.map((planet) => {
                    const isFavorite = store.favorites.some(fav => fav.uid === planet.uid);

                    return (
                        <div className="card col-mb-2 m-1" key={planet.uid}>
                            <div className="col">
                                <img src={example} alt="" className="imgPeople" />
                                <h5 className="card-title text-center mt-2">{planet.name}</h5>
                                <div className='btn-card'>
                                    <button
                                        className={`btn ${isFavorite ? 'active' : 'like'} like`}
                                        onClick={() => handleFavorite(planet)}
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