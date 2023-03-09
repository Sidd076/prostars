import React, { useState } from 'react';
import './App.css';
import prostarData from './resource/prostar.json';

function App() {
  const [prostarList, setProstarList] = useState(prostarData.slice(0, 5));

  function addRandomProstar() {
    const randomIndex = Math.floor(Math.random() * prostarData.length);
    const randomProstar = prostarData[randomIndex];
    setProstarList([...prostarList, randomProstar]);
  }

  function sortByName() {
    const sortedProstarList = [...prostarList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setProstarList(sortedProstarList);
  }

  function sortByPopularity() {
    const sortedProstarList = [...prostarList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setProstarList(sortedProstarList);
  }

  function deleteProstar(index) {
    const newProstarList = [...prostarList];
    newProstarList.splice(index, 1);
    setProstarList(newProstarList);
  }

  return (
    <div className="App">
      <h1>Prostar List</h1>
      <button onClick={addRandomProstar}>Add Random Prostar</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prostarList.map((prostar, index) => (
            <tr key={index}>
              <td>
                <img src={prostar.pictureUrl} alt={prostar.name} />
              </td>
              <td>{prostar.name}</td>
              <td>{prostar.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => deleteProstar(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
