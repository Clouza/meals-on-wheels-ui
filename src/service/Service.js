import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class Service{

    register(data){
        return axios.post(API_BASE_URL+"registration",data)
    } 
    uploadMemberEvidence(data, loginCredentials) {       
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
    uploadRiderData(data, loginCredentials) {       
        return axios.post(API_BASE_URL + "api/v1/rider/upload-data", data,{
            auth:{
                username:loginCredentials.username,
                password:loginCredentials.password
            },
            headers: { 
                "Content-Type": "multipart/form-data" 
            }
    });
    }
    registerPartner(data,loginCredentials){
        return axios.post(API_BASE_URL + "api/v1/partner/register", data,{
            auth:{
                username:loginCredentials.username,
                password:loginCredentials.password
            }
    });
    }

    
    
}
  
export default new Service();