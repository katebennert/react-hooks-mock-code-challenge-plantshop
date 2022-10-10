import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const allPlants = plants.map(plant => <PlantCard key={plant.id} plant={plant} />);
  const searchedPlants = allPlants.filter(plant => plant.props.plant.name.includes(search));

  return (
    <ul className="cards">{(search === "") ? allPlants : searchedPlants}</ul>
  );
}

export default PlantList;
