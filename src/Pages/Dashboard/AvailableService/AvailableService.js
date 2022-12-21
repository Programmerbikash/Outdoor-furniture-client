import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryProduct from '../../Home/ProductCategories/CategoryProduct';

const AvailableService = ({ service }) => {
    // console.log(categoryService);
    // const { title, resale_price, sellar_name, location } = service;
    // const { title, resale_price, sellar_name, location } = categoryService;

     // Queries
    const {isLoading, isError, data: categoryService = [], error} = useQuery({
        queryKey: ['allProduct'],
        queryFn: () => fetch(`https://outdoor-furniture-server.vercel.app/singleProduct/6380beb2345d495b771dbc40`)
        .then(res => res.json())
    })
    console.log(categoryService);

    if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }
    
    return (
        <div>
            {
                categoryService.length > 0 ? 
                    categoryService.map(service => <CategoryProduct key={service._id} service={service}></CategoryProduct>)
                    :
                    <><p>Haven't any service</p></>
            }
            <h2 className="text-2xl">model</h2>
      <div>
        The button to open modal
        <label htmlFor="my-modal" className="btn">
          open modal
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AvailableService;