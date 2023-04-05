const dom = 'http://172.28.0.202:7000'
const create = '/users'

const users = async() =>{
    const req = await fetch(dom+'/users?skip=0&limit=100',{
        headers:{
            'accept': 'application/json',
        },
    });
    try{
        const resp = await req.json()
        console.log(resp);
    } catch(e){
        console.log(e);
    }
}

const createUser = async() => {
    const data = await fetch(dom+create,{
        method: 'POST',
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            'email': 121232133,
            'password': 122132133,
        })
    })
    try{
        const req = await data.json();
        console.log(req);
        return req;
    }catch(error){
        console.error(error);
    }
}

createUser();
users()

