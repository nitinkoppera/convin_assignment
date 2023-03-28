import React from 'react';

function Header(props) {
    return (
        <div className='px-6 pt-5 pb-2 border-b border-black flex justify-between'>
            <span className='text-3xl'>Convin Frontend Assignment</span>

            <div className='flex'>
                <div className='px-3 underline'><a href='/'>Home</a></div>
                <div className='px-3 underline'><a href='/history'>History</a></div>
            </div>
        </div>
    );
}

export default Header;