import { api } from "./api"


export class DashboardApi {
  static async getDashboardStats(userId: string) {
    const response = await api.get(`/dashboard?userId=${userId}`);

    return response.data;
  }
  static async getChartData(userId: string) {
    const response = await api.get(`/dashboard/chart?userId=${userId}`);

    return response.data;
  }
}