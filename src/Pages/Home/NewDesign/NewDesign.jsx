import React, { useEffect, useState } from 'react';

const NewDesign = () => {
    const [newDesign, setNewDesign] = useState([]);

    useEffect(() => {
        fetch('https://outdoor-furniture-server-programmerbikash.vercel.app/newDesign')
            .then(res => res.json())
            .then(data => setNewDesign(data));
    },[])

    return (
        <div className='my-20'>
            <h1 className="text-4xl font-bold text-center my-6">New Design</h1>
            <div className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='text-center bg-slate-100 p-4 mr-1'>
                    <div>
                        <img className='w-full h-80' src="https://i.ibb.co/K5C8n3g/image.png" alt="" />
                        <h1 className="text-2xl font-bold pt-4">All</h1>
                        <p className="text-sm text-slate-400">5 Products</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>
                    {
                        newDesign &&
                        newDesign.map(design => <div key={design._id}>
                            <div className='text-center'>
                                <img className='bg-slate-100 p-4' src={design?.url} alt="" />
                                <h2 className="text-xl font-bold tracking-widest">{design?.title}</h2>
                                <p className="text-sm text-slate-400">${design?.price}</p>
                            </div>
                        </div>)
                    }
            </div>
            </div>
        </div>
    );
};

export default NewDesign;