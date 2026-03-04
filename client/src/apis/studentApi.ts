import { api } from "./api"


export class StudentApi{


    static async fetchProfile(id: string) {
    
        const response = await api.get(`/students/profile/${id}`);
        return response.data.data;
    }
    
    
}