// FeedbackForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleButtonClick = () => {
    // Handle button click here
    alert(`Feedback submitted with rating: ${rating}`);
  };

  return (
    <div className="feedback-form-container">
      <h1>🌟 Give Us Your Feedback 🌟</h1>
      <p>We'd love to hear from you! Please provide your feedback or suggestions below:</p>
      <Form>
        <Form.Group controlId="feedbackText">
          <Form.Control as="textarea" rows={4} placeholder="Enter your feedback here" />
        </Form.Group>
        <div className="rating-container">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRatingChange(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= rating ? '#FFD700' : '#e4e5e7'}
                  size={25}
                />
              </label>
            );
          })}
        </div>
        <Button variant="primary" onClick={handleButtonClick} className="glow-button">
          Submit Feedback
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;
