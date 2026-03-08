import { api } from "./api";

export class StudentApi {
  static async fetchProfile(id: string) {
    const response = await api.get(`/students/profile/${id}`);
    // console.log(response.data.data)
    return response.data.data;
  }

    static async updateProfile(data: FormData) {
      
       console.log("FormData to send:");
       for (let [key, value] of data.entries()) {
         console.log(`${key}:`, value);
       }

    const response = await api.put("/students/profile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    return response.data;
  }

  static async fetchRecommendation(id: string) {
    const response = await api.get(`/students/recommendations/${id}`);
    return response.data.data;
  }

  static async applyInternship(studentId: string, internshipId: string) {
    const data = {
      studentId,
      internshipId,
    };
    const response = await api.post("/students/internship-apply", data);

    return response.data.data;
  }


  static async fetchAllApplication(studentId:string) {
    const response = await api.get(`/students/applications/${studentId}`)
    return response.data.data
  }


  static async uploadCertificate(formData: FormData) {
    const response = await api.put(`/students/certificates`, formData);
    return response.data.data;
  }
}
