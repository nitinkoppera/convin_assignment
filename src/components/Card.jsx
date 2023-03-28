import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GrAddCircle } from "react-icons/gr"
import EditForm from './EditForm';
import { useDispatch } from 'react-redux';
import { createHistory, updateVideo } from '../actions';

function Card({id,title,url,category,addCard,selectionVisible = true}) {
    const [isOpen,setIsOpen] = useState(false)
    // const embedId = 'qdCHEUaFhBk'
    const ref = useRef()
    const editRef = useRef()
    useEffect(() => {
        document.addEventListener("click",handleClickOutside,true)
    },[])

    const handleClickOutside = (e) => {
        if(ref.current&&!ref.current.contains(e.target) && editRef.current&&!editRef.current.contains(e.target)){
            setIsOpen(false)
        }
    }
    const dispatch = useDispatch();
    const handlePlay = () => {
        console.log('onplay worked');
        dispatch(createHistory({vid_id:id,title,url,category,time:new Date()}))
    }

    const [isEditForm,setIsEditForm] = useState(false)

    if(addCard){
        return(
            <div className='h-full' style={{width:'14em',aspectRatio:'4/3'}} >
                {!selectionVisible&&<div className='h-full px-5 py-5 cursor-pointer border border-gray-700 rounded-md text-white flex justify-center items-center'
                        onClick={()=>setIsOpen(io => !io)}
                >
                    <GrAddCircle className='' fill="#34D399" size={'30'} />
                </div>}
            </div>
        )
    }

    return(
        <div className='h-full' style={{width:'14em',aspectRatio:'4/3'}} >
            {isEditForm&&<div className='fixed bg-black bg-opacity-60 text-white top-0 left-0 h-full w-full'>
                <EditForm video={{id,title,url,category}} setIsEditForm={setIsEditForm} />
            </div>}
            <div className={'h-full overflow-hidden border border-gray-700 rounded-md z-10 text-white cursor-pointer'}
                onClick={()=>{
                    setIsOpen(io => !io)
                    handlePlay()
                }}
            >
                <div className='-z- 10 h-full flex-col'>
                    <div className='flex-1 overflow-hidden' >
                        <img className='h-3/4' src={`https://img.youtube.com/vi/${url}/mqdefault.jpg`} alt={title} />
                    </div>
                    <div className='h-1/4 flex items-center justify-center'>
                        <h2 className='text-center text-xl text-black '>{title}</h2>
                    </div>
                </div>



                {isOpen&&<div className='absolute'>
                <div className='z-30 fixed top-0 left-0 w-screen h-screen borsder-8 border-red-600 bg-black bg-opacity-60 bordder-4'>
                    <div className='bordser'>
                        <div className='fixed top-0 w-full bordder h-full flex justify-center items-center'>
                            <iframe ref={ref}
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/${url}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    <div 
                        className={'bg-gradient-to-b from-gray-800 via-transparent to-transparent text-center text-white pt-5 z-30'}
                    >
                        <span className=' text-5xl'>{title}</span>
                        <div className='borders'>
                            <div ref={editRef} className='z-30 mb-2'>
                                <span onClick={setIsEditForm} className='-translate-y-full mb-2 absolute right-1/4 text-xl border border-white hover:text-black hover:bg-white px-4 rounded'>edit</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Card;