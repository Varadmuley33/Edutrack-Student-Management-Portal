import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [batches, setBatches] = useState([]);
  const [name, setName] = useState('');
  const [fees, setFees] = useState('');
  const [editId, setEditId] = useState(null);

  const getAllBatches = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Batches');
      setBatches(response.data);
    } catch (error) {
      console.log('Error fetching batches', error);
      setBatches([]);
    }
  };

  const addBatch = async (e) => {
    e.preventDefault();
    if (!name || !fees) return;

    try {
      await axios.post('http://localhost:8080/Batches', {
        name: name,
        fees: Number(fees),
      });
      setName('');
      setFees('');
      getAllBatches();
    } catch (error) {
      console.log('Error adding batch', error);
    }
  };

  const deleteBatch = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/Batches/id/${id}`);
      getAllBatches();
    } catch (error) {
      console.log('Error deleting batch', error);
    }
  };

  const editBatch = (batch) => {
    setName(batch.name);
    setFees(batch.fees);
    setEditId(batch.id);
  };

  const updateBatch = async (e) => {
    e.preventDefault();
    if (!name || !fees) return;

    try {
      await axios.put(`http://localhost:8080/Batches/id/${editId}`, {
        name: name,
        fees: Number(fees),
      });
      setName('');
      setFees('');
      setEditId(null);
      getAllBatches();
    } catch (error) {
      console.log('Error updating batch', error);
    }
  };

  const cancelEdit = () => {
    setName('');
    setFees('');
    setEditId(null);
  };

  useEffect(() => {
    getAllBatches();
  }, []);

  return (
      <div className="App">

        {/* Navbar */}
        <nav className="navbar">
          <h2>EduTrack</h2>
          <div className="user-avatar">V</div>
        </nav>

        {/* Main Container */}
        <div className="container">

          {/* Left Side - Form */}
          <div className="left-panel">
            <h2>{editId ? 'Update Batch' : 'Add New Batch'}</h2>

            <form onSubmit={editId ? updateBatch : addBatch}>
              <input
                  type="text"
                  placeholder="Batch Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />

              <input
                  type="number"
                  placeholder="Fees"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
              />

              <div className="form-buttons">
                <button type="submit">
                  {editId ? 'Update Batch' : 'Add Batch'}
                </button>

                {editId && (
                    <button type="button" onClick={cancelEdit} className="cancel-btn">
                      Cancel
                    </button>
                )}
              </div>
            </form>
          </div>

          {/* Right Side - List */}
          <div className="right-panel">
            <h2>All Batches</h2>

            {batches.length > 0 ? (
                <div className="batch-container">
                  {batches.map((batch) => (
                      <div key={batch.id} className="batch-card">
                        <div className="batch-info">
                          <h3>{batch.name}</h3>
                          <p>₹ {batch.fees}</p>
                        </div>

                        <div className="card-buttons">
                          <button onClick={() => editBatch(batch)} className="edit-btn">
                            Edit
                          </button>
                          <button onClick={() => deleteBatch(batch.id)} className="delete-btn">
                            Delete
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
            ) : (
                <p className="no-data">No batch data found</p>
            )}
          </div>

        </div>

        <footer className="app-footer">
          <p>© 2026 EduTrack</p>
        </footer>
      </div>
  );
}

export default App;