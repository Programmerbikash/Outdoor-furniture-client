import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductCategory = () => {
    const productCategory = useLoaderData();
    console.log(productCategory);

    return (
        <div>
            <h2 className="text-2xl">Total Length: {productCategory.length}</h2>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {/* {
                    productCategory.length > 0 ? 
                    productCategory.map(product => )
                } */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
            </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ProductCategory;