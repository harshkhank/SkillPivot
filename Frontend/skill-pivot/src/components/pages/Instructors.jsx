import React, { useState, useEffect } from 'react';
import './Instructors.css';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/instructors');
      if (!response.ok) {
        throw new Error('Failed to fetch instructors');
      }
      const data = await response.json();
      setInstructors(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="instructors-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading instructors...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="instructors-page">
        <div className="error-container">
          <h2>Error Loading Instructors</h2>
          <p>{error}</p>
          <button onClick={fetchInstructors} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="instructors-page">
      <div className="instructors-container">
        <div className="instructors-header">
          <h1>Meet Our Expert Instructors</h1>
          <p>Learn from industry professionals and experienced educators</p>
        </div>

        {instructors.length === 0 ? (
          <div className="no-instructors">
            <h3>No instructors available at the moment</h3>
            <p>Please check back later for our amazing instructors!</p>
          </div>
        ) : (
          <div className="instructors-grid">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="instructor-card">
                <div className="instructor-avatar">
                  <div className="avatar-placeholder">
                    {instructor.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                
                <div className="instructor-info">
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-email">{instructor.email}</p>
                  <div className="instructor-expertise">
                    <span className="expertise-label">Expertise:</span>
                    <span className="expertise-value">{instructor.expertise}</span>
                  </div>
                  
                  <div className="instructor-stats">
                    <div className="stat">
                      <span className="stat-number">
                        {instructor.courses ? instructor.courses.length : 0}
                      </span>
                      <span className="stat-label">Courses</span>
                    </div>
                  </div>
                  
                  <button className="view-profile-btn">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructors;