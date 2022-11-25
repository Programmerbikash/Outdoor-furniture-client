import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ furnitureItem }) => {
    const { _id, title, category_img, description  } = furnitureItem;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-96' src={`${category_img}`} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center">
                <Link to={`allProduct/${_id}`}><button className="btn btn-primary">Show All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;