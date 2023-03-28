import { Box, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVideo, getVideos } from '../actions';

function CreateForm({bucketName,setIsFormOpen}) {
    const bucketTitles = [
        'Entertainment Videos',
        'Educational Videos',
        'Add new category',
    ]

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState(bucketName);
    const [newCategory, setNewCategory] = useState("");

    const dispatch = useDispatch
    const handleSubmit = async () => {
        // e.preventDefault();
        const final_cat = category=='Add new category'?newCategory:category
        await fetch('http://localhost:8000/videos',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title,url,category:final_cat})
        }).then(() => {
            console.log();
            console.log('pppp');
        }). catch(err => {
            console.log(err.message);
        })
        // dispatch(createVideo({title,url,category}))
    };

    const ref = useRef()
    useEffect(() => {
        document.addEventListener("click",handleClickOutside,true)
    },[])

    const handleClickOutside = (e) => {
        if(ref.current&&!ref.current.contains(e.target)){
            setIsFormOpen(false)
        }
    }
  
  
    return (
    <div className="z-50 inset-0 overflow-y-auto relative">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-20"></div>
            </div>

            <div ref={ref}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            >
                <div>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="w-full">
                        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        </div>
                    </div>

                    <div className="sm:flex sm:items-start mt-4">
                        <div className="w-full">
                        <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
                            URL
                        </label>
                        <input
                            type="text"
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        </div>
                    </div>

                    <div className="sm:flex sm:items-start mt-4">
                        <div className="w-full">
                        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a category</option>
                            {bucketTitles.map((bucket) => <option key={bucket} value={bucket}>{bucket}</option>)}
                            <option value='Add new category'>Add new category</option>
                        </select>
                        </div>
                    </div>

                    {category=='Add new category'&&<div className="sm:flex sm:items-start mt-4">
                        <div className="w-full">
                        <label htmlFor="newCategory" className="block text-gray-700 font-bold mb-2">
                            Add new Category
                        </label>
                        <input
                            type="text"
                            id="newCategory"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        </div>
                    </div>}

                    </div>


                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setIsFormOpen(false)}
                        >
                        Cancel
                    </button>
                    <button
                        // type="submit"
                        onClick={handleSubmit}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Create Card
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
                  );
}

export default CreateForm;