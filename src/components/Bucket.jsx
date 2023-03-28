import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { deleteVideo } from '../actions';
import Card from './Card';
import CreateForm from './CreateForm';

function Bucket({bucketName,videos,setDragId}) {
    const [idList, setIdList] = useState([])
    const [selectionVisible, setSelectionVisible] = useState(false)

    const [isFormOpen,setIsFormOpen] = useState(false)

    const changeIdList = (id) => {
        var index = idList.indexOf(id);
        if (index !== -1) {
            idList.splice(index, 1);
        }
        else{
            idList.push(id)
        }
        setIdList(idList)
    }

    const dispatch = useDispatch()
    const handleDelete = async () => {
        for(let i=0; i<idList.length; i++){
            dispatch(deleteVideo(idList[i]))
        }
    }

    // const [dragVisible,setDragVisible] = useState(false)
    // const intervalRef = useRef()
    // const [counter, setCounter] = useState(100);
    // useEffect(() => {
    //     return () => stopCounter(); // when App is unmounted we should stop counter
    // }, []);
    // const startCounter = () => {
    //     if (intervalRef.current) return;
    //         intervalRef.current = setInterval(() => {
    //         setCounter((prevCounter) => prevCounter + 1);
    //     }, 10);
    // };

    // const stopCounter = () => {
    //     if (intervalRef.current) {
    //         clearInterval(intervalRef.current);
    //         intervalRef.current = null;
    //         if(counter>5){
    //         }else{
    //             setIsFormOpen(true)
    //         }
    //     }
    // };

    return (
        <div>
            {isFormOpen&&<div className='fixed bg-black bg-opacity-60 text-white top-0 left-0 h-full w-full'>
                <CreateForm bucketName={bucketName} setIsFormOpen={setIsFormOpen} />
            </div>}
            <div className='px-2 flex justify-between items-center border-b-2 border-gray-700'>
                <div className='flex items-center'>
                    <BsChevronDown 
                        className='bordedr border-black h-full'
                        style={{
                            height:'1.5em',
                            width:'1.5em'
                        }}
                    />
                    <span className='text-xl px-2'>{bucketName}</span>
                </div>
                <div>
                    {!selectionVisible?<div onClick={()=>setSelectionVisible(true)} className='cursor-pointer border border-black hover:text-white hover:bg-gray-700 px-3 rounded'>select</div>:
                    <div className='flex'>
                        <div onClick={handleDelete}
                         className='cursor-pointer mr-2 border text-red-600 border-red-600 hover:bg-red-600 bg-wred-600 hover:text-white px-3 rounded'>Delete</div>
                        <div onClick={() => {
                            setIdList([])
                            setSelectionVisible(false)
                        }} className='cursor-pointer border border-black hover:text-white hover:bg-gray-700 px-3 rounded'>Cancel</div>
                    </div>
                    }
                </div>
            </div>
            <div className='flex flex-wrap items-stretch'>
                {videos.map((embed) => 
                    <div key={embed.url} className={selectionVisible?'p-5 relative float-right flex ':'p-5 float-right flex '}
                        >
                        {selectionVisible&&<div className='absolute pr-5' 
                            style={{
                                right: '0.5em',
                                top: '1.5em',
                            }}
                            onClick = {()=>changeIdList(embed.id)}
                        >
                            <input className='cursor-pointer w-6 h-6 rounded-full' type="checkbox" value={idList.indexOf(embed.id)} />
                        </div>}
                            <div 
                                // onMouseOver={() => setDragVisible(true)} 
                                // onMouseOut={() => setDragVisible(false)} 
                                className=''>
                                
                                
                                {/* <Draggable
                                className='relative'
                                    //   axis="x"
                                    handle=".handle"
                                    defaultPosition={{x: 0, y: 0}}
                                    position={null}
                                    //   grid={[25, 25]}
                                    //   scale={1}
                                    onStart={(e) => {
                                        console.log('start')
                                        console.log(e)
                                    }}
                                    onDrag={(e) => {
                                        console.log('drag')
                                        console.log(e)
                                    }}
                                    onStop={(e) => {
                                        console.log('stop')
                                        console.log(e)
                                    }}
                                >
                                    <div>
                                        <div className='handle absolute border border-red-600 p-2'>
                                            <RiDragMove2Line size={25} />
                                        </div> */}
                                        <Card width={'20%'} id={embed.id} title={embed.title} url={embed.url} category={embed.category} />
                                    {/* </div>
                                </Draggable> */}
                            </div>
                            
                    </div>
                )}
                <div className='h-full p-5 block'>
                    <div className='h-full'
                        onClick={() => setIsFormOpen(true)}
                        >
                        <Card width={'20%'} addCard={true} selectionVisible={selectionVisible} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bucket;