import React, { useEffect, useState } from 'react';
import AllProduct from './AllProduct';

const ProductCategories = () => {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        fetch('https://outdoor-furniture-server.vercel.app/furniture')
            .then(res => res.json())
            .then(data => setFurniture(data));
    }, [])
    // console.log(furniture);

    return (
        <div>
            <div className='text-center mt-20'>
                <h2 className="text-4xl font-bold text-center my-6">Furniture Category</h2>
                <p>Explore Our Fresh Modern Furniture At Low Prices. The Quality You Want At Prices You Love. Restyle Your Home For A Fresh Look! Explore Our Fresh New Furniture Styles At Low Prices. No Money Down Financing. Select Items Ship Free. Designer Looks For Less.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 md:mx-12">
                {
                    furniture.length > 0 ?
                        furniture.map(furnitureItem => <AllProduct furnitureItem={furnitureItem} key={furnitureItem.category_id}></AllProduct>)
                        :
                        <p className="text-red font-semibold">Haven't any product</p>
                }
            </div>
        </div>
    );
};

export default ProductCategories;