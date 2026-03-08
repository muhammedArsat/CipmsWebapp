import { api } from "./api"

export type updateStatusType = "APPROVED" | "REJECTED"

interface UpdateApplicationProps{
    id: string,
    mentorId: string,
    updateStatus:updateStatusType
}
export class MentorApi{


    static async fetchAllApplications(id:string) {
        const response = await api.get(`/mentors/${id}`)
        return response.data.data
    }

    static async updateApplication( { id, mentorId, updateStatus }: UpdateApplicationProps) {
        const response = await api.put(`/mentors/${id}/${mentorId}?updateStatus=${updateStatus}`
            
        )
        return response.data.data
    }
}