
import { api } from "./api"

export class PlacementOfficerApi{

    static async createPlacement(data:any) {
        
        const res = await api.post("/placementOfficer", data);
        return res.data
    }

    static async getAllPostedInternshipByPO(id: any) {
    
        const res = await api.get(`/placementOfficer?id=${id}`)
     
        return res.data;
    }

    static async getDetailOfTheInternship(id: any, userId:any) {
        const response = await api.get(`/placementOfficer/internship?id=${id}&userId=${userId}`)
     
        return response.data;
    }

    static async updatePlacement(id:any, data:any,userId:any) {
        const response = await api.put(`/placementOfficer?id=${id}&userId=${userId}`, data);
        
        return response.data
    }

    static async deletePlacement(id: string, userId: string) {
        const response = await api.delete(`/placementOfficer?id=${id}&userId=${userId}`)
        return response.data
    }
}