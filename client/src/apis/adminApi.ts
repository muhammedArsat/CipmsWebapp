import type { UserDataType } from "../components/UserEditModal";
import { api } from "./api";

export const fetchUserByUserType = async (userType: string) => {
  console.log(userType);
  const res = await api.get(`/admin/${userType}`);
  console.log(res.data.data);
  return res.data;
};

export const updatePlacementOfficer = async (data: UserDataType) => {
  const res = await api.put(`/admin/placementOfficer/${data.id}`, data);
  return res.data;
};

interface UploadResponse {
  success: boolean;
  message: string;
  files?: any[];
  fileCount?: number;
}

// Generic file upload function
export const uploadFiles = async (
  files: FileList,
  endpoint: string = "/admin/upload",
): Promise<UploadResponse> => {
  try {
    const formData = new FormData();

    // Add single file to FormData (use 'file' instead of 'files' for single file)
    if (files.length > 0) {
      formData.append("file", files[0]);
    }

    console.log("Uploading to:", `/admin/${endpoint}`);
    console.log("FormData contents:", files[0]);

    const response = await api.post(`/admin/${endpoint}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};
