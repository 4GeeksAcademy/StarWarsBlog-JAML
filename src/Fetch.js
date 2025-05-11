// URB API
const URB = 'https://www.swapi.tech/api'

// GET PEOPLES
export const getPeoples = async () => {

    const resp = await fetch(`${URB}/people/`)
    const data = await resp.json()
    return data.results

}
// GET PLANETS
export const getPlanets = async () => {

    const resp = await fetch(`${URB}/planets/`)
    const data = await resp.json()
    return data.results
    
}

// GET VEHICLES
export const getVehicles = async () => {

    const resp = await fetch(`${URB}/vehicles/`)
    const data = await resp.json()
    return data.results
    
}

// GET ID PEOPLES
export const getPeopleID = async (id) => {

    const resp = await fetch(`${URB}/people/${id}`)
    if (!resp.ok) throw new Error('Error en la toma de datos del fetch peoples')
    const data = await resp.json()
    return data
} 

// GET ID PLANETS
export const getPlanetID = async (id) => {

    const resp = await fetch(`${URB}/planets/${id}`)
     if (!resp.ok) throw new Error('Error en la toma de datos del fetch planets')
    const data = await resp.json()
    return data
} 

// GET ID VEHICLES
export const getVehicleID = async (id) => {

    const resp = await fetch(`${URB}/vehicles/${id}`)
     if (!resp.ok) throw new Error('Error en la toma de datos del fetch vehicles')
    const data = await resp.json()
    return data
} 