import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Filters from './../Filters/Filters'; // Import the Filters component

// Import necessary Chart.js components
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [filters, setFilters] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API based on filters
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/api/v1/data/fetch-data', { params: filters });
                const data = response.data.data;

                if (Array.isArray(data) && data.length > 0) {
                    const intensities = data.map(item => item.intensity || 0);
                    const countries = data.map(item => item.country || 'Unknown');

                    setChartData({
                        labels: countries,
                        datasets: [
                            {
                                label: 'Intensity',
                                data: intensities,
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            }
                        ]
                    });
                } else {
                    setChartData({ labels: [], datasets: [] });
                    console.warn('No data available');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [filters]);

    const applyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div>
            <h2>Data Visualization Dashboard</h2>
            <Filters applyFilters={applyFilters} /> {/* Filters component */}

            {loading && <p>Loading data...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!loading && !error && chartData.labels.length > 0 && (
                <div className="chart-container" style={{ width: "100%", maxWidth: "900px", height: "500px", margin: "auto" }}>
                    <Bar
                        data={chartData}
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    title: {
                                        display: true,
                                        text: 'Intensity',
                                    },
                                },
                                x: {
                                    ticks: {
                                        maxRotation: 0,
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                    },
                                    title: {
                                        display: true,
                                        text: 'Countries',
                                    },
                                },
                            },
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true,
                                    position: 'top',
                                },
                                title: {
                                    display: true,
                                    text: 'Intensity by Country',
                                }
                            }
                        }}
                    />
                </div>
            )}

            {!loading && !error && chartData.labels.length === 0 && (
                <p>No data available for the selected filters</p>
            )}
        </div>
    );
};

export default Dashboard;
