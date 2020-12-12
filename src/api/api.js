import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": 'b1ac1423-291e-4da2-97f0-35a254330dfa'
    }
});

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`)
    },
    followUser(id){
        return instance.post(`follow/${id}`)
    }
}
