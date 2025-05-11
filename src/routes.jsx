import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Peoplecard } from "./components/Peoplecard";
import { Planetcard } from "./components/Planetcard"
import { Vehiclecard } from "./components/Vehiclecard";
import { DetailsPeople } from "./pages/DetailsPeople";
import { DetailsPlanet } from "./pages/DetailsPlanet";
import { DetailsVehicle } from "./pages/DetailsVehicle";

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/Peoples" element={<Peoplecard />} />
        <Route path="/Planets" element={<Planetcard />} />
        <Route path="/Vehicles" element={<Vehiclecard />} />
        {/* <Route path= "/DetailsPeople/:id" element={<DetailsPeople />} />
        <Route path= "/DetailsPlanet/:id" element={<DetailsPlanet />} />
        <Route path= "/DetailsVehicle/:id" element={<DetailsVehicle />} /> */}
      </Route>
  )
);