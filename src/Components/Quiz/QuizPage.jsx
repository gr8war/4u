import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios for HTTP requests
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Quiz.css';
import NAVBAR from '../Navbar/Navbar.jsx';

function QuizPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
                setData(response.data);  // Set the fetched data into state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array means this effect runs once on component mount

    return (
      <>
      <NAVBAR/>
        <main className='main-container'>
            <div className='main-title'>
                <h3>Dashboard</h3>
            </div>

            <div className='main-cards'>
                {[
                    { title: 'Employee', icon: <BsFillArchiveFill />, count: 300 },
                    { title: 'Domain', icon: <BsFillGrid3X3GapFill />, count: 12 },
                    { title: 'Course', icon: <BsPeopleFill />, count: 33 },
                    { title: 'Simulation', icon: <BsFillBellFill />, count: 42 }
                ].map((card, index) => (
                    <div className='card' key={index}>
                        <div className='card-inner'>
                            <h3>{card.title}</h3>
                            {card.icon}
                        </div>
                        <h1>{card.count}</h1>
                    </div>
                ))}
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="not_clicked" fill="#1f702a" />
                        <Bar dataKey="clicked" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </main>
        </>);
    
}

export default QuizPage;
