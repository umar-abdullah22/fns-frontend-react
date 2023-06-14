import React, { useState } from 'react';
import Navbar from './Navbar.js';
const RegisterTeamComponent = () => {
  const [teamData, setTeamData] = useState({
    captainName: '',
    captainPhone: '',
    players: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  });

  const handleInputChange = (e, index) => {
    const updatedPlayers = [...teamData.players];
    updatedPlayers[index] = e.target.value;

    setTeamData({ ...teamData, players: updatedPlayers });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(teamData);
  };

  return (
    <div>
<Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="mb-8"></div> {/* Section break */}
      <p className="text-gray-800 text-lg mb-4">
        Please provide the following information to register your team:
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="captainName">
            Captain Name
          </label>
          <input
            type="text"
            name="captainName"
            value={teamData.captainName}
            onChange={(e) => setTeamData({ ...teamData, captainName: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="captainPhone">
            Captain Phone
          </label>
          <input
            type="text"
            name="captainPhone"
            value={teamData.captainPhone}
            onChange={(e) => setTeamData({ ...teamData, captainPhone: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Players</label>
          {teamData.players.map((player, index) => (
            <div key={index} className="mb-2">
              <label className="text-gray-700 font-bold" htmlFor={`player${index + 1}`}>
                Player {index + 1}
              </label>
              <input
                type="text"
                name={`player${index + 1}`}
                placeholder={`Player ${index + 1} Name`}
                value={player}
                onChange={(e) => handleInputChange(e, index)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterTeamComponent;
