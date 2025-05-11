export const DetailsVehicle = () => {
    return (
        <>
            <div>
                <h1>Details Vehicle</h1>

                <div className="card">
                    <div className="card-tittle">{detailVehicle.name}</div>
                    <div className="card-body" >
                        <p className="card-text">{detailVehicle.consumables}</p>
                        <p className="card-text">{detailVehicle.cargo_capacity}</p>
                        <p className="card-text">{detailVehicle.passengers}</p>
                        <p className="card-text">{detailVehicle.max_atmosphering_speed}</p>
                        <p className="card-text">{detailVehicle.crew}</p>
                        <p className="card-text">{detailVehicle.length}</p>
                        <p className="card-text">{detailVehicle.model}</p>
                        <p className="card-text">{detailVehicle.manufacturer}</p>
                        <p className="card-text">{detailVehicle.vehicle_class}</p>
                        <p className="card-text">{detailVehicle.pilots}</p>
                    </div>
                    <div className="card-footer"></div>

                </div>
            </div>
        </>
    )
}