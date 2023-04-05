import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class Service{

    register(data){
        return axios.post(API_BASE_URL+"registration",data)
    } 
    uploadEvidence(data, loginCredentials) {       
        return axios.post(API_BASE_URL + "api/v1/member/upload-evidence", data,{
            auth:{
                username:loginCredentials.username,
                password:loginCredentials.password
            },
            headers: { 
                "Content-Type": "multipart/form-data" 
            }
    });
    }

    
    
}
  
export default new Service();