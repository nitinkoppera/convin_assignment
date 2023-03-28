
const history = async (history = [], action) => {
    switch(action.type){
        case 'GET_HISTORY':{
            return action.payload
        }
        case 'CREATE_HISTORY':{
            await fetch('https://convin-server-dun.vercel.app/history',{
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
