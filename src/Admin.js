import React, { useState } from 'react';
import Navbar from './Navbar.js';

const AdminPanel = () => {
  // Hiring Form Data
  const [hiringFormData, setHiringFormData] = useState([]);
  const [formData, setFormData] = useState({
    userName: '',
    phoneNumber: '',
    position: '',
    email: '',
    image: '',
    rollNumber: '',
  });

  // Team Registration Data
  const [teamRegistrationData, setTeamRegistrationData] = useState([]);
  const [teamData, setTeamData] = useState({
    teamName: '',
    captainName: '',
    captainPhone: '',
    players: ['', '', '', '', ''],
  });

  // Function to handle hiring form submissions
  const handleHiringFormSubmit = (e) => {
    e.preventDefault();
    // Add the form data to the hiringFormData state
    setHiringFormData([...hiringFormData, formData]);
    // Clear the form data
    setFormData({
      userName: '',
      phoneNumber: '',
      position: '',
      email: '',
      image: '',
      rollNumber: '',
    });
  };

  // Function to handle team registration form submissions
  const handleTeamRegistrationSubmit = (e) => {
    e.preventDefault();
    // Add the form data to the teamRegistrationData state
    setTeamRegistrationData([...teamRegistrationData, teamData]);
    // Clear the form data
    setTeamData({
      teamName: '',
      captainName: '',
      captainPhone: '',
      players: ['', '', '', '', ''],
    });
  };

  return (
    <div>
        <br/>
        <br/>
        <br/>
      <Navbar />
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Panel</h2>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 mt-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Hiring Form Submissions</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2">User Name</th>
              <th className="py-2">Phone Number</th>
              <th className="py-2">Position</th>
              <th className="py-2">Email</th>
              <th className="py-2">Roll Number</th>
            </tr>
          </thead>
          <tbody>
            {hiringFormData.map((data, index) => (
              <tr key={index}>
                <td className="border-t py-2">{data.userName}</td>
                <td className="border-t py-2">{data.phoneNumber}</td>
                <td className="border-t py-2">{data.position}</td>
                <td className="border-t py-2">{data.email}</td>
                <td className="border-t py-2">{data.rollNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 mt-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Team Registrations</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2">Team Name</th>
              <th className="py-2">Captain Name</th>
              <th className="py-2">Captain Phone</th>
              <th className="py-2">Players</th>
            </tr>
          </thead>
          <tbody>
            {teamRegistrationData.map((data, index) => (
              <tr key={index}>
                <td className="border-t py-2">{data.teamName}</td>
                <td className="border-t py-2">{data.captainName}</td>
                <td className="border-t py-2">{data.captainPhone}</td>
                <td className="border-t py-2">{data.players.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
