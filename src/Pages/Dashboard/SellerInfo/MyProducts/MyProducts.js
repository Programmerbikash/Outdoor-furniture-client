import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const [deletingSellers, setDeletingSellers] = useState(null);

    const closeModal = () => {
        setDeletingSellers(null);
    }


    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/seller/addProduct', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    
    const handleDeleteSellers = sellers => {
        fetch(`http://localhost:5000/seller/addProduct/${sellers._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Sellers ${sellers.name} deleted successfully`)
            }
        })
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div>
            <h2 className="text-3xl">Total Furniture: {sellers?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Quality</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers &&
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={seller.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{seller.name}</td>
                                <td>{seller.location}</td>
                                <td>{seller.sellingPrice}</td>
                                <td>{seller.quality}</td>
                                <td>{seller.phone}</td>
                                <td>
                                    <button className="btn btn-sm btn-error">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;