
const videos = async (videos = [], action) => {
    switch(action.type){
        case 'GET_VIDEOS':{
            // console.log('data in reducers');
            // console.log(action.payload);
            return action.payload
        }
        case 'CREATE_VIDEO':{
            await fetch('https://convin-server-dun.vercel.app/videos',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(action.payload)
            }).then(() => {
                console.log();
            })
        }
        case 'DELETE_VIDEO':{
            fetch(`https://convin-server-dun.vercel.app/videos/${action.payload}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    console.log('Data deleted successfully');
                } else {
                    console.error('Error deleting data');
                }
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
        }
        case 'UPDATE_VIDEO':{
            fetch(`https://convin-server-dun.vercel.app/videos/${action.payload.id}`, {
                method: 'PUT', // or 'PATCH' for partial update
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload.data)
            })
            .then(response => {
                if (response.ok) {
                    console.log('Data updated successfully');
                } else {
                    console.error('Error updating data');
                }
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
        }
        default:
            return videos
    }
}

export default videos
