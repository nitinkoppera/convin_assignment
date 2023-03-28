import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getVideos } from "./actions";
import BucketList from "./components/BucketList";
import Header from "./components/Header";
import History from "./components/History";
import Draggable from 'react-draggable';

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getVideos())
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    }, [dispatch]);
    const videosPromise = useSelector(state => state.videos);
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
        videosPromise.then((data) => {
            setVideos(data);
            console.log('data')
            console.log(data)
            setIsLoading(false);
        }).catch((err) => console.log(err));
    }, [videosPromise]);


    if (isLoading) {
        return <p>Loading...</p>;
      }
    return (
    <Router>
        <div className="px-10 block text-gray-700 font-bold">
            
            <Header />
            <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/" element={
                <div>
//                 <Draggable
//                 //   axis="x"
//                   handle=".handle"
//                   defaultPosition={{x: 0, y: 0}}
//                   position={null}
//                 //   grid={[25, 25]}
//                 //   scale={1}
//                   onStart={(e) => {
//                     console.log('start')
//                     console.log(e)}}
//                   onDrag={(e) => {
//                     console.log('drag')
//                     console.log(e)}}
//                   onStop={(e) => {
//                     console.log('stop')
//                     console.log(e)}}>
//                   <div>
//                     <div className="handle">Drag from here</div>
//                     <div>This readme is really dragging on...</div>
//                   </div>
//                 </Draggable>
                <BucketList videos={videos} />
                </div>
            }/>
//             <Route path="/test" element={
//                 <div>
//                 <Draggable
//                 //   axis="x"
//                   handle=".handle"
//                   defaultPosition={{x: 0, y: 0}}
//                   position={null}
//                 //   grid={[25, 25]}
//                 //   scale={1}
//                   onStart={(e) => {
//                     console.log('start')
//                     console.log(e)}}
//                   onDrag={(e) => {
//                     console.log('drag')
//                     console.log(e)}}
//                   onStop={(e) => {
//                     console.log('stop')
//                     console.log(e)}}>
//                   <div>
//                     <div className="handle">Drag from here</div>
//                     <div>This readme is really dragging on...</div>
//                   </div>
//                 </Draggable>
//                 </div>
//             }/>
            </Routes>
        </div>
    </Router>
    );
}

export default App;
