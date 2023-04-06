const URL = 'http://172.28.0.202:7000'
const endCreateChat = '/create_chat'
const endLogin = '/users/login'
const endSendMess = '/send_message'
const endGetData = '/get_data'

const loginUser = async()=>{
    const data = await fetch(URL + endLogin, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // 'email': login,
            // 'password': password,
            email: 'string',
            password: 'string'
        })
    })
    try{
        const resp = await data.json();
        console.log(resp);
        return resp.access_token;
    }catch(err){
        console.log(err);
    }
}
const token = await loginUser();
console.log(token);
const createChat = async (id) => {
    const data = await fetch(URL + endCreateChat + `/${id}`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body : '',
    })
    try{
        const resp = await data.json();
        console.log(resp);
        return resp.id;
    }catch(err){
        console.log(err);
    }
}
let chatId;



// chat - блок с юзером
const chat = document.querySelector('div');
chat.addEventListener('click',async(e)=>{
    chatId = await createChat(chat.id);
    sendMessage(chatId);
})


const sendMessage = async(chatId) => {
    const data = await fetch(URL + endSendMess + `/${chatId}`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body : JSON.stringify({
            'content': 'сообщение',
            // 'content': message,
            'date': new Date(),
        }),
    })
    try{
        const resp = await data.json();
        console.log(resp);
        return resp;
    }catch(err){
        console.log(err);
    }
}

const getMessages = async(chatId) =>{
    const data = await fetch(URL + endGetData + `/${chatId}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    try{
        const resp = await data.json();
        console.log(resp);
        return resp;
    }catch(err){
        console.log(err);
    }
}

getMessages(8)




// curl -X 'POST' \
//   'http://172.28.0.202:7000/send_message/123' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "content": "string",
//   "date": "2023-04-05T14:28:37.049Z"
// }'