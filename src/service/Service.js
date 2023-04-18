import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/';

class Service{
    async nonAuthorizedRequest(endpoint, data, header = false) {
        try {
            const headers = header ? { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` } : {};
            const response = await axios.post(API_BASE_URL + endpoint, data, { headers });
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async authorizedRequest(endpoint, method, data) {
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in session storage');
        }

        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        let response;
        switch (method.toLowerCase()) {
            case 'get':
                response = await axios.get(API_BASE_URL + endpoint, options);
                break;
            case 'post':
                response = await axios.post(API_BASE_URL + endpoint, data, options);
                break;
            case 'put':
                response = await axios.put(API_BASE_URL + endpoint, data, options);
                break;
            case 'delete':
                response = await axios.delete(API_BASE_URL + endpoint, options);
                break;
            default:
                throw new Error(`Invalid method: ${method}`);
        }

        return response;
    }
    // ----------------------------------------------------------------Base Method---------------------------------------------------------------------
    async getUser(){
        const token = sessionStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in session storage');
        }
        return (await axios.get(API_BASE_URL+"user/"+token))
    }
    async updateUser(data){
        return await axios.put(API_BASE_URL+"profile",data);
    }
    async uploadImage(data,type) {
        return await this.nonAuthorizedRequest("upload-image/"+type, data, true)
    }

    // ----------------------------------------------------------------Login And Register---------------------------------------------------------------------

    // Used in RegisterComp.js
    async register(data) {
        return this.nonAuthorizedRequest("registration", data);
    }
    // Used in NextRegMember.js
    async registerMember(data) {
        return await this.nonAuthorizedRequest("upload/MEMBER", data, true);
    }
    
    // Used in NextRegRider.js
    async registerRider(data) {
        return await this.nonAuthorizedRequest("upload/RIDER", data, true);
    }

    // Used in RegisterComp.js
    async registerPartner(data) {
        return await this.nonAuthorizedRequest("register-partner", data, false);
    }

    // Used in LoginComp.js
    async login(data) {
        return await this.nonAuthorizedRequest("login", data);
    }



    // ----------------------------------------------------------------Administrator Dasboard---------------------------------------------------------------------

    async getRiders(data) {
        return await this.authorizedRequest("api/v1/admin/riders/" + data, 'GET');
    }

    async getMembers(data) {
        return await this.authorizedRequest("api/v1/admin/members/" + data, 'GET');
    }

    async getPartners(data) {
        return await this.authorizedRequest("api/v1/admin/partners/" + data, 'GET');
    }

    async getFoods() {
        return await this.authorizedRequest("api/v1/admin/meals", 'GET');
    }

    async getPartnerByMealsId(id){
        return await this.authorizedRequest("api/v1/admin/partner/"+id,'GET')
    }
    async getDonators() {
        return await this.authorizedRequest("api/v1/admin/donators", 'GET');
    }

    async approveUser(data) {
        return await this.authorizedRequest("api/v1/admin/approve", 'PUT', data);
    }

    async deleteUser(id) {
        return await this.authorizedRequest("api/v1/admin/delete/" + id, 'DELETE');
    }
    async AdminUpdateFood(data){
        return await this.authorizedRequest("api/v1/admin/meals",'PUT',data)
    }
    async AdminDeleteFood(id){
        return await this.authorizedRequest("api/v1/admin/meals/"+id,'DELETE')
    }
    async AdminDeleteFood(id){
        return await this.authorizedRequest("api/v1/admin/meals/"+id,'DELETE')
    }

    // ----------------------------------------------------------------Partner Side---------------------------------------------------------------------

    async addFood(data) {
        return await this.authorizedRequest("api/v1/partner/meals", 'POST', data);
    }
    async updateFood(data){
        return await this.authorizedRequest("api/v1/partner/meals",'PUT',data)
    }
    async deleteFood(id){
        return await this.authorizedRequest("api/v1/partner/meals/"+id,'DELETE')
    }
    async getPartner(user) {
        return await this.authorizedRequest("api/v1/partner/" + user, 'GET')
    }


    // ----------------------------------------------------------------Rider Side---------------------------------------------------------------------

    async handleOrder(data) {
        return await this.authorizedRequest("api/v1/rider/handle-order", 'PUT', data);
    }
    // used in table food component
    async getOrders(status) {
        return await this.authorizedRequest("api/v1/admin/delete/" + status, 'GET');
    }

    // ----------------------------------------------------------------Member Side---------------------------------------------------------------------

    async orderMeals(data) {
        return await this.authorizedRequest("api/v1/member/order-meals", 'POST', data);
    }
    async getOrder(status){
        return await this.authorizedRequest("api/v1/member/order/"+status,'GET')
    }
    async deleteOrder(id){
        return await this.authorizedRequest("api/v1/member/history/"+id,'DELETE')
    }
    async giveRatings(data) {
        return await this.authorizedRequest("api/v1/member/rate-service", 'PUT', data);
    }
    // used in table member home page component
    async getMemberFoods(data) {
        return await this.authorizedRequest("api/v1/member/meals/" + data, 'GET');
    }

    // ----------------------------------------------------------------Donators Side---------------------------------------------------------------------
    async donate({ name, email, total, comment }) {
        return await axios.post(`${API_BASE_URL}api/v1/donator/donate`, { name, email, total, comment });
    }
}
export default new Service();