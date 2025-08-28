import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { useDropzone } from 'react-dropzone';

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [selectedX, setSelectedX] = useState('');
  const [selectedY, setSelectedY] = useState('');
  const [error, setError] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5000/api/files/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const parsedData = response.data.parsedData;
        setData(parsedData);

        if (parsedData.length > 0) {
          const cols = Object.keys(parsedData);
          setColumns(cols);
          setSelectedX(cols);
          setSelectedY(cols || cols);
        }
        setError(null);
      } catch (err) {
        setError('Failed to upload or parse file.');
      }
    },
  });

  const chartData = {
    labels: data.map((row) => row[selectedX]),
    datasets: [
      {
        label: selectedY,
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: data.map((row) => Number(row[selectedY]) || 0),
      },
    ],
  };

  return (
    <div style={{ maxWidth: 800, margin: '20px auto', fontFamily: 'Arial' }}>
      <h2>DataViz Studio - Upload CSV and Visualize</h2>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed #999',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          marginBottom: '15px',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop a CSV file here, or click to select file</p>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data.length > 0 && (
        <>
          <h3>Data Preview</h3>
          <div style={{ maxHeight: 200, overflowY: 'auto', border: '1px solid #ddd' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>{columns.map((col) => <th key={col} style={{ border: '1px solid #ccc', padding: '5px' }}>{col}</th>)}</tr>
              </thead>
              <tbody>
                {data.slice(0, 10).map((row, i) => (
                  <tr key={i}>
                    {columns.map((col) => (
                      <td key={col} style={{ border: '1px solid #eee', padding: '5px' }}>
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Chart Builder</h3>
          <label>
            X-Axis:
            <select value={selectedX} onChange={(e) => setSelectedX(e.target.value)} style={{ marginLeft: 10 }}>
              {columns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </label>
          <label style={{ marginLeft: 20 }}>
            Y-Axis:
            <select value={selectedY} onChange={(e) => setSelectedY(e.target.value)} style={{ marginLeft: 10 }}>
              {columns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </label>

          <div style={{ marginTop: '30px' }}>
            <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={400} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
