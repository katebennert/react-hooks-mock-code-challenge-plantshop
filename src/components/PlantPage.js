import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plantData => setPlants(plantData))
  }, []);

  function onAddPlant(newPlantData) {
    setPlants([...plants, newPlantData])
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearchChange={onSearchChange}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
