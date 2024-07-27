import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DomainDetailsPage.css';

function DomainDetailsPage() {
    const { domainName } = useParams(); // Get the domainName parameter from the URL
    const [domainData, setDomainData] = useState(null);

    useEffect(() => {
        const fetchDomainData = async () => {
            try {
                const response = await axios.get(`https://api.example.com/domains/${domainName}`);
                setDomainData(response.data);
            } catch (error) {
                console.error('Error fetching domain data:', error);
            }
        };

        fetchDomainData();
    }, [domainName]);

    if (!domainData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='domain-details-container'>
            <h2>Details for {domainName}</h2>
            <p>{domainData.description}</p> {/* Example data field */}
            <div className='log-history'>
                <h3>Log History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {domainData.logHistory.map((log, index) => (
                            <tr key={index}>
                                <td>{log.name}</td>
                                <td>{log.email}</td>
                                <td>{log.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DomainDetailsPage;
