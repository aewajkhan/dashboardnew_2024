import React from "react";
import { FaStar } from "react-icons/fa";
import "./FeedbackTable.css";

const FeedbackTable = ({ title }) => {
  return (
    <div className="feedback-table-container">
      <h3 className="feedback-title">{title}</h3>
      <div className="feedback-list">
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="white-star">
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good.
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
              The food was excellent and so was the service...
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="white-star">
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
              The food was excellent and so was the service...
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="white-star">
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
              The food was excellent and so was the service...
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="white-star">
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
              The food was excellent and so was the service...
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good.
            </p>
          </div>
        </div>
        <div className="feedback-item">
          <div className="image-name">
            <img
              className="customer-image"
              src="https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
              alt="Customer"
            />
            <h4 className="customer-name">Jenny Wilson</h4>
          </div>
          <div className="feedback-content">
            <div className="star-ratting">
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="white-star">
                <FaStar />
              </div>
            </div>
            <p className="feedback-text">
            The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTable;
