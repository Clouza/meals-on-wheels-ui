import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class Service{
    // ----------------------------------------------------------------Login And Register---------------------------------------------------------------------

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
    registerPartner(data){
        return axios.post(API_BASE_URL + "register-partner", data);
    }

    // Used in LoginComp.js
    login(data){
        return axios.post(API_BASE_URL+"login",data);
    }

    // ----------------------------------------------------------------Administrator Dasboard---------------------------------------------------------------------
    
    getNotApprovedRider(){
    // Get the token from the session storage
    const token = sessionStorage.getItem('token');

    // Use the token in an API request
    return axios.get(API_BASE_URL + "api/v1/admin/not-approved-riders", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    }
    getApprovedRider(){
    // Get the token from the session storage
    const token = sessionStorage.getItem('token');

    // Use the token in an API request
    return axios.get(API_BASE_URL + "api/v1/admin/approved-riders", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    }
}
  
export default new Service();