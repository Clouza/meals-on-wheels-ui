import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class Service{
    // ----------------------------------------------------------------Login And Register---------------------------------------------------------------------

    // Used in RegisterComp.js
    async register(data){
        try {
            return await axios.post(API_BASE_URL+"registration",data)
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    } 
    // Used in NextRegMember.js
    async registerMember(data) {       
        try {
            return await axios.post(API_BASE_URL + "upload-evidence", data,{
                headers: { 
                    "Content-Type": "multipart/form-data" 
                }
            });
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Used in NextRegRider.js
    async registerRider(data) {       
        try {
            return await axios.post(API_BASE_URL + "upload-data", data,{
                headers: { 
                    "Content-Type": "multipart/form-data" 
                }
            });
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Used in RegisterComp.js
    async registerPartner(data){
        try {
            return await axios.post(API_BASE_URL + "register-partner", data);
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // Used in LoginComp.js
    async login(data) {
        try {
            return await axios.post(API_BASE_URL + "login", data);
            
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    // ----------------------------------------------------------------Administrator Dasboard---------------------------------------------------------------------
    
    async authorizedRequest(endpoint, data) {
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in session storage');
        }
        
        const response = await axios.post(endpoint, data, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });
    
        return response;
    }
    
    async getRiders(data) {
        return await this.authorizedRequest(API_BASE_URL + "api/v1/admin/get-riders", data);
    }
    
    async getMembers(data) {
        return await this.authorizedRequest(API_BASE_URL + "api/v1/admin/get-members", data);
    }
    
    async getPartners(data) {
        return await this.authorizedRequest(API_BASE_URL + "api/v1/admin/get-partners", data);
    }
    
    async getFoods(data) {
        return await this.authorizedRequest(API_BASE_URL + "api/v1/admin/get-meals", data);
    }
    
    async getDonators() {
        return await this.authorizedRequest(API_BASE_URL + "api/v1/admin/get-donators");
    }

    async approveUser(data){
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in session storage');
        }
        return await axios.put(API_BASE_URL+"api/v1/admin/approve",data,{
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
    }

    async deleteUser(id){
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in session storage');
        }
        return await axios.delete(API_BASE_URL+"api/v1/admin/delete/"+id,{
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
    }
    
      
    
}
  
export default new Service();