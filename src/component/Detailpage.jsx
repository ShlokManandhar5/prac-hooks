import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data';

const DetailPage = () => {
    const [filteredData, setFilteredData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const numericId = parseInt(id, 10);
        const filtered = data.filter(item => item.id === numericId);
        setFilteredData(filtered[0] || null);
        console.log(filtered);
    }, [id]);

    if (!filteredData) {
        return <div>No data found for id: {id}</div>;
    }

    return (
        <div>
            <h1>Player Details</h1>
            <div>
                <p><strong>Name:</strong> {filteredData.name}</p>
                <p><strong>Number:</strong> {filteredData.number}</p>
                <p><strong>Date of Birth:</strong> {filteredData.DOB}</p>
                <p><strong>Wage:</strong> ${filteredData.wage}k</p>
            </div>
        </div>
    );
};

export default DetailPage;