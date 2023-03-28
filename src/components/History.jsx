import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../actions';

function History() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getHistory())
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    }, [dispatch]);
    const historyPromise = useSelector(state => {
        console.log("state");
        console.log(state);
        return state.history});
    const [isLoading, setIsLoading] = useState(true);
    const [history, sethistory] = useState([]);
  
    useEffect(() => {
        console.log('historyPromise');
        console.log(historyPromise);
        historyPromise.then((data) => {
            sethistory(data);
            console.log('history')
            console.log(history)
            setIsLoading(false);
        }).catch((err) => console.log(err));
    }, [historyPromise]);

    const dateNtime = (date) => {
        // date = date.toString()
        // console.log(typeof(date));
        // return date
        let res = ""
        res += date.split('T')[0] + ' / ' + date.split('T')[1].split(".")[0]
        return res
    }

    return (
        <div className='px-10 pt-10'>
            <div className='px-2 flex justify-between items-center border-b-2 border-gray-700'>
                <div className='flex items-center'>
                    <span className='text-3xl px-2'>History</span>
                </div>
            </div>
            <div className='px-20 mt-5'> 
                <div className='border-b border-black text-gray-700 flex justify-evenly text-xl'>
                    <div className='w-full text-center font-extrabold'>Title</div>
                    <div className='w-full text-center font-extrabold'>Category</div>
                    <div className='w-full text-center font-extrabold'>Date</div>
                </div>
                {history.map(hist => 
                    <div key={hist.id} className='border-b border-gray-600 text-gray-600 flex justify-evenly text-lg'>
                        <div className='w-full text-center'>{hist.title}</div>
                        <div className='w-full text-center'>{hist.category}</div>
                        <div className='w-full text-center'>{dateNtime(hist.time)}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default History;