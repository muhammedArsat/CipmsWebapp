
import { api } from "./api"

export class PlacementOfficerApi{

    static async createPlacement(data:any) {
        
        const res = await api.post("/placementOfficer", data);
        return res.data
    }
}