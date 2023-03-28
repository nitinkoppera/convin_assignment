
const history = async (history = [], action) => {
    switch(action.type){
        case 'GET_HISTORY':{
            return action.payload
        }
        case 'CREATE_HISTORY':{
            await fetch('http://localhost:8000/history',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(action.payload)
            }).then(() => {
                console.log();
            })
        }
        default:
            return history
    }
}

export default history