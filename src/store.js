export const initialStore = () => {
  return {
    peoples: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'get_peoples':

      return {
        ...store,
        peoples: action.payload
      };

    case 'get_planets':

      return {
        ...store,
        planets: action.payload
      }

    case 'get_vehicles':

      return {
        ...store,
        vehicles: action.payload
      }

    case 'add_favorite':
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      }

    case 'delete_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid !== action.payload)
      }

    default:
      throw Error('Unknown action.');
  }
}
