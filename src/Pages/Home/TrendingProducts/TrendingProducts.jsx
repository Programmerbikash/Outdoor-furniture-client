import React, { useEffect, useState } from 'react';

const TrendingProducts = () => {
    const [trandFurniture, setTrandFurniture] = useState([]);

    useEffect(() => {
        fetch(`https://outdoor-furniture-server-programmerbikash.vercel.app/trandingFurniture`)
            .then(res => res.json())
            .then(data => setTrandFurniture(data));
    },[])

    return (
        <div className='my-20'>
            <h1 className="text-4xl font-bold text-center my-4">Trending This Week</h1>
            {/* <div className='w-1/2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center mx-auto'>
                <button className="font-bold bg-violet-600 hover:bg-violet-700 text-slate-50 hover:text-blue-100 px-5 py-3 shadow-md rounded-md">TRENDING</button>
                <button className="bg-violet-600 hover:bg-violet-700 text-slate-50 hover:text-blue-100 px-5 py-3 shadow-md rounded-md mx-2 font-bold">LATEST</button>
                <button className="bg-violet-600 hover:bg-violet-700 text-slate-50 hover:text-blue-100 px-5 py-3 shadow-md rounded-md font-bold">BEST SELLERS</button>
            </div> */}
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
                {
                    trandFurniture &&
                    trandFurniture.map(singleFurniture => <div className='' key={singleFurniture._id}>
                        <div className='text-center'>
                        <img className='bg-slate-100 p-4' src={singleFurniture.url} alt="" />
                        <h2 className="text-xl font-bold tracking-widest">{singleFurniture.title}</h2>
                        <p className="text-sm text-slate-400">${singleFurniture.price}</p>
                        </div>
                   </div>)
                }
            </div>
            <hr className='w-5/6 border-b-1 border-slate-200 mx-auto' />
        </div>
    );
};

export default TrendingProducts;