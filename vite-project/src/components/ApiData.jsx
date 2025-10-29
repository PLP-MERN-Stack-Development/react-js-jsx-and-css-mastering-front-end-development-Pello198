import React, { useEffect, useState } from 'react';
import Button from './Button';
import Card from './Card.jsx';


const ApiData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust for pagination

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch API data');
      const result = await response.json();
      setData(result);
      setFilteredData(result); // Initially filteredData = all data
      setCurrentPage(1); // Reset page on refresh
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on search input
  useEffect(() => {
    const filtered = data.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page after search
  }, [search, data]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Card className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">API Data</h2>
        <Button onClick={fetchData} variant="primary" size="sm">
          Refresh
        </Button>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      />

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentData.map(user => (
              <li key={user.id} className="py-3">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email} — {user.company.name}
                </p>
              </li>
            ))}
          </ul>

          {/* Pagination buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="secondary"
                size="sm"
              >
                Previous
              </Button>

              <span className="px-2 py-1 text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="secondary"
                size="sm"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default ApiData;
