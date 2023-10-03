import React, { useState } from 'react'
import 'dotenv/config'


const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);

    const addReview = (e) => {
        e.preventDefault();
    
        if (review.trim() !== '' && rating > 0) {
          const newReview = {
            reviewText: review,
            rating: rating,
          };
    
          setReviews([...reviews, newReview]);
          setReview('');
          setRating(0);
        }
      };

      const createSanityDocument = async () => {
        const apiUrl = `https://${process.env.SANITY_PROJECTID}.api.sanity.io/v1/data/mutate/${process.env.SANITY_DATASET}`;
        try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
                'mode': 'no-cors', // Set the request mode to 'no-cors'
                // Add any other headers as needed
              },
              body: JSON.stringify({
                _type: 'review'
              }),
            });
        
            if (!response.ok) {
              throw new Error(`Failed to create document in Sanity. HTTP error! Status: ${response.status}`);
            }
        
            // If the response is successful, you can handle the data here
            const responseData = await response.json();
            console.log('Document created:', responseData);
          } catch (error) {
            // Handle errors here
            console.error('Error creating document:', error);
          }
        }
        
    
  return (
    <div>
         <p># of customer reviews</p>
            <button><h2>Write A Review</h2></button>
           
            <form onSubmit={addReview}>
        <div>
          <label htmlFor="reviewText">Review:</label>
          <textarea
            id="reviewText"
            placeholder="Write your review here"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </div>
        <div>
          <button type="submit" onClick={createSanityDocument}>Submit Review</button>
        </div>
      </form>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>Rating: {review.rating}</p>
            <p>{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewSection