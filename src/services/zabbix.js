import axios from "axios"

const BASE_URL = 'https://197.13.0.211:10445/api_jsonrpc.php'

const get_user_token =()=>{
    const user = {
        "jsonrpc": "2.0",
       "method": "user.login",
       "params": {
           "user": process.env.REACT_APP_USER,
           "password": process.env.REACT_APP_PASSWORD,
       },
       "id": 1
      };
    return axios.post(BASE_URL,user).then(response=>response.data.result)
}

const get_problems = (token) =>{
    const request = 
        {
            "jsonrpc": "2.0",
            "method": "trigger.get",
            "params": {
                "output": [
                    "triggerid",
                    "description",
                    "priority"
                    
                ],
                "filter": {
                    "value": 1
                },"selectGroups": ["groupid","name"]
                
            },
            "id":1,
            "auth": token
        }
        return axios.post(BASE_URL,request).then(response=>response.data.result)
    }

 
export default  {get_user_token,get_problems}