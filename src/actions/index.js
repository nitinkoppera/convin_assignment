export const getVideos = () => async (dispatch) => {
    try{
        var data
        // console.log('hellooooo');
        await fetch('https://convin-server-dun.vercel.app/videos')
            .then(res => {
                if(res.ok){
                    // console.log('response');
                    return res.json()
                    // console.log(data);
                }
            }).then(dd => {
                data = dd
                // console.log('dd')
                // console.log(data)
                return dd
            })
            .catch(err => {
                console.log(err.message)
            })
        // console.log('data in actions');
        // console.log(data);
        await dispatch({
            type: 'GET_VIDEOS',
            payload: data
        })
    } catch(err) {
        console.log(err);
    }
}
export const createVideo = (data) => async (dispatch) => {
    console.log('entered action');
    try{
        await dispatch({
            type: 'CREATE_VIDEO',
            payload: data
        })
    } catch(err) {

    }
}
export const deleteVideo = (id) => async (dispatch) => {
    console.log('entered delete action');
    try{
        dispatch({
            type: 'DELETE_VIDEO',
            payload: id
        })
    } catch(err) {

    }
}
export const updateVideo = (id,data) => async (dispatch) => {
    try{
        dispatch({
            type: 'UPDATE_VIDEO',
            payload: {id,data}
        })
    } catch(err) {

    }
}

export const getHistory = () => async (dispatch) => {
    try{
        var data
        await fetch('https://convin-server-dun.vercel.app/history')
            .then(res => {
                if(res.ok){
                    // console.log('response');
                    return res.json()
                    // console.log(data);
                }
            }).then(dd => {
                data = dd
                // console.log('dd')
                // console.log(data)
                return dd
            })
            .catch(err => {
                console.log(err.message)
            })
        // console.log('data in actions');
        // console.log(data);
        await dispatch({
            type: 'GET_HISTORY',
            payload: data
        })
    } catch(err) {
        console.log(err);
    }
}
export const createHistory = (data) => async (dispatch) => {
    try{
        await dispatch({
            type: 'CREATE_HISTORY',
            payload: data
        })
    } catch(err) {

    }
}
