import { useEffect } from "react";
import { getPeoples, getPlanets, getVehicles } from "../Fetch";
import useGlobalReducer from "../hooks/useGlobalReducer"
import storeReducer from "../store";


export const Home = () => {

const { store, dispatch } = useGlobalReducer()
	

	return (
		<>
			<div className="text-center mt-5">
				<h1>StarWars Blog BY Jonathan Alessander Medina Leon</h1>

				<h5>Este blog fue creado con la finalidad de que los fans de StarWars conozcan un poco mas de sus personajes favoritos
					 y en el mundo donde viven</h5>
			</div>
		</>
	);
}; 