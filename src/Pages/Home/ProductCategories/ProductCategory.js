import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from './CategoryProduct';
import { FaPlusSquare } from 'react-icons/fa';
import BookingModel from '../../Dashboard/Dashboard/BookingModel/BookingModel';

const ProductCategory = () => {
    const productCategory = useLoaderData();
    const [service, setService] = useState(null);


    return (
        <div className='my-10'>
            <h2 className="text-2xl text-center font-bold text-success my-4"><FaPlusSquare className='inline'/> Total Furniture: {productCategory.length}</h2>
            <div className="grid gap-12 md:ml-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    productCategory.length > 0 ? 
                        productCategory.map(product => <CategoryProduct
                            key={product._id}
                            product={product}
                            setService={setService}
                        ></CategoryProduct>)
                        : 
                        <h2 className="text-2xl">Haven't any product</h2>
                }
            </div>
            {
                service && 
                <BookingModel
                        setService={setService}
                        service={service}
                    ></BookingModel>
            }
        </div>
    );
};

export default ProductCategory;