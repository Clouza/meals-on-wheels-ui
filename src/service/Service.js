import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class Service{

    // Used in RegisterComp.js
    register(data){
        return axios.post(API_BASE_URL+"registration",data)
    } 
    // Used in NextRegMember.js
    uploadMemberEvidence(data) {       
        return axios.post(API_BASE_URL + "upload-evidence", data,{
            
            headers: { 
                "Content-Type": "multipart/form-data" 
            }
    });
    }

    // Used in NextRegRider.js
    uploadRiderData(data) {       
        return axios.post(API_BASE_URL + "upload-data", data,{
            
            headers: { 
                "Content-Type": "multipart/form-data" 
            }
    });
    }

    // Used in RegisterComp.js
    registerPartner(data,loginCredentials){
        return axios.post(API_BASE_URL + "register-partner", data);
    }

    getUser(data){
        return axios.get(API_BASE_URL+"users?role="+data)
    }

    
    
}
  
export default new Service();