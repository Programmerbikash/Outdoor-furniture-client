import React from "react";
import {
  FaSearchLocation,
  FaUser,
  FaRegCalendarAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const CategoryProduct = ({ product, setService }) => {
    // console.log(service);
    
  const {
    title,
    img,
    location,
    resale_price,
    original_price,
    total_use,
    sellar_name,
    } = product;
    

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            <FaSearchLocation className="inline mr-2" /> Location: {location}
          </p>
          <p>
            <FaUser className="inline mr-2" /> Sellar Name: {sellar_name}
          </p>
          <p>
            <FaRegCalendarAlt className="inline mr-2" />
            Total Use: {total_use}
          </p>
          <div className="card-actions flex justify-between">
            <div className="">
              <FaMoneyCheckAlt className="inline mr-2" /> Original Price: $
              {original_price}
            </div>
            <div className="">
              <FaMoneyCheckAlt className="inline mr-2" /> Resale Price: $
              {resale_price}
            </div>
          </div>
          <div className="card-actions mt-4 mx-auto">
            <div>
              <label htmlFor="my-modal" onClick={() => setService({title, img, resale_price, location, sellar_name})} className="btn btn-primary">
              Booking Now
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
