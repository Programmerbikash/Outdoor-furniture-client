import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BuyerProduct = () => {
    const { user } = useContext(AuthContext);

    const { isLoading, error, data: buyingdata = [] } = useQuery({
        queryKey: ["buyingdata", user?.email],
        queryFn: () =>
            fetch(`https://outdoor-furniture-server.vercel.app/buying?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
          }).then(
            (res) => res.json()
          ),
      });
        
        // console.log(buyingdata)
    
      if (isLoading) return "Loading...";
    
      if (error) return "An error has occurred: " + error.message;
    
    //   useEffect(() => {
    //     fetch(`https://outdoor-furniture-server.vercel.app/buying`)
    //       .then((res) => res.json())
    //       .then((data) => console.log(data));
    //   }, []);
    
      return (
        <div className='my-10'>
          <div className="overflow-x-auto ml-10 w-5/6">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  buyingdata &&
                    buyingdata.map((product, i) => <tr key={i}>
                    <th>
                      <label>{i+1}</label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="rounded w-12 md:w-24">
                            <img
                              src={product.service_img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                        <td>{product.service_name}</td>
                        <td>{product.selling_price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Payment</button>
                    </th>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default BuyerProduct;