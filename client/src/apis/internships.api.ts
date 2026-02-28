import { api } from "./api"


export class InternshipApi{

    static async fetchAllInternships() {
        const response = await api.get("/internships");
        return response.data;
    }
}