import { api } from "./api"


export class StudentApi{


    static async fetchProfile(id: string) {
    
        const response = await api.get(`/students/profile/${id}`);
        return response.data.data;
    }
    
    static async updateProfile(data: any) {
        const response = await api.put('/students/profile', data)
        return response.data
    }

    static async fetchRecommendation(id: string)
    {
        const response = await api.get(`/students/recommendations/${id}`)
        return response.data.data;
    }
    
}