import React, { useState } from 'react';
import Bucket from './Bucket';

function BucketList({videos}) {
    const categories = Array.from(new Set(videos.map(item => item.category)));

    const [dragId,setDragId] = useState(null)

    return (
        <div className='px-10 py-8 bordesr border-black'>
            {categories.map(category => (
                <Bucket key={category} setDragId={setDragId} bucketName={category} videos={videos.filter(item => item.category === category)} />
            ))}
            {/* <Bucket bucketName={'Entertainment Videos'} />
            <Bucket bucketName={'Educational Videos'} /> */}
        </div>
    );
}

export default BucketList;