import React from 'react';
import "./style.css";

const Testimonials = ({ testimonials = [] }) => {
  return (
    <div className='testimonials-container'>
      <section className="customer-section">
        <div className="customer-section-title">
          <div className="customer-title">
            Here&apos;s what our <span className="blue">customers</span> have to say
          </div>
        </div>
        <button className="btn-outline">Read customer stories</button>
      </section>
      <section className="customer-reviews">
        {testimonials.map((review, index) => (
          <div
            className={`review-card ${[0, 3].includes(index) ? "bg-grey" : "bg-white"}`}
            key={review.id}
          >
            <div className="review-card-body">
              <h3>{review.text}</h3>
              <p>"{review.reviewComment}"</p>
              <div className="review-card-footer">
                <img
                  src={review.userImage} 
                  height={48}
                  width={48}
                  alt="User Avatar"
                />
                <div className="review-card-footer-content">
                  <div className="review-card-footer-content-name">
                    {review.name}
                  </div>
                  <div className="review-card-footer-content-designation">
                    <b>{review.role}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
