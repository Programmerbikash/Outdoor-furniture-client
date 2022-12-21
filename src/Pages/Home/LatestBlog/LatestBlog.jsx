import React, { useEffect, useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const LatestBlog = () => {
    const [latestBlog, setLatestBlog] = useState([]);

    useEffect(() => {
        fetch('LatestBlog.json')
            .then(res => res.json())
            .then(data => setLatestBlog(data));
    },[])

    return (
        <div className='my-20'>
            <h1 className="text-4xl font-bold text-center my-6">Latest From The Blog: {latestBlog?.length}</h1>
            <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    latestBlog &&
                    latestBlog.map(blog => <div className='w-full p-2' key={blog.id}>
                        <div className='text-justify'>
                                <img className='w-full' src={blog?.url} alt="" />
                                <h2 className="text-md py-4 font-bold">{blog?.title}</h2>
                                <div className="flex space-x-20">
                                <p className="text-sm"><RiAdminFill className='inline mr-1'/> {blog?.admin}</p>
                                <p className="text-sm"><BsFillCalendarCheckFill className='inline mr-1'/>{blog?.date}</p>
                                </div>
                                {
                                blog?.description.length > 200 ?
                                <p className="text-sm text-slate-900">{blog?.description.slice(0,200)}...</p>
                                    :
                                <p className="text-sm text-slate-900">{blog?.description}</p>
                            }
                            <button className=" my-5 font-bold outline hover:text-white outline-violet-600 hover:bg-violet-700 px-5 py-3 shadow-md rounded-md">Read More</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestBlog;