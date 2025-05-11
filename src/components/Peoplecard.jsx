import { useEffect } from 'react'
import example from '../assets/img/babyYoda.jpg'
import { getPeoples } from "../Fetch";
import useGlobalReducer from '../hooks/useGlobalReducer'


export const Peoplecard = () => {

    const { store, dispatch } = useGlobalReducer()
    const peoples = store.peoples

    useEffect(() => {

        const fetchData = async () => {
            const _peoples = await getPeoples()
            dispatch({ type: 'get_peoples', payload: _peoples })
        }
        fetchData()

    }, [])

    const handleFavorite = (character) => {
        const isFavorite = store.favorites.some(fav => fav.uid === character.uid);
        if (isFavorite) {
            dispatch({ type: 'delete_favorite', payload: character.uid });
        } else {
            dispatch({ type: 'add_favorite', payload: character });
        }
    };;


    return (
        <div className='row people-card'>
            {
                peoples.map((character) => {
                    const isFavorite = store.favorites.some(fav => fav.uid === character.uid);

                    return (
                        <div className="card col-mb-2 m-1" key={character.uid}>
                            <div className="col">
                                <img src={example} alt="" className="imgPeople" />
                                <h5 className="card-title text-center mt-2">{character.name}</h5>
                                <div className='btn-card'>
                                    <button
                                        className={`btn ${isFavorite ? 'active' : 'like'} like`}
                                        onClick={() => handleFavorite(character)}
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