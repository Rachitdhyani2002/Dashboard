import React, { useState } from 'react';

const Filters = ({ applyFilters }) => {
    const [endYear, setEndYear] = useState('');
    const [startYear, setStartYear] = useState('');
    const [country, setCountry] = useState('');
    const [sector, setSector] = useState('');
    const [topic, setTopic] = useState('');

    const handleApplyFilters = () => {
        const filters = {};
        if (startYear) filters.start_year = startYear;
        if (endYear) filters.end_year = endYear;
        if (country) filters.country = country;
        if (sector) filters.sector = sector;
        if (topic) filters.topic = topic;

        applyFilters(filters);
    };

    return (
        <div>
             <div>
            <input
                type="number"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                placeholder="Enter Start Year"
                style={{padding:"5px",margin:"5px"}}
            />

            
            <input
                type="number"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
                placeholder="Enter End Year"
                style={{padding:"5px",margin:"5px"}}
            />

            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
                style={{padding:"5px",margin:"5px"}}
            />

            <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="Enter Sector"
                style={{padding:"5px",margin:"5px"}}
            />

            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter Topic"
                style={{padding:"5px",margin:"5px"}}
            />

            <button onClick={handleApplyFilters} style={{padding:"6px",margin:"5px",background:'rgba(75, 192, 192, 1.6)',border:"none",outline:'none',color:"white"}}>Apply Filters</button>
            </div>
        </div>
    );
};

export default Filters;
