import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASE_URL;

const apiClient = axios.create({
   baseURL: baseUrl + '/api',
   headers: {
      "Content-type": "application/json",
   },
})



export const adapter = {
   get: async (path: string) => {
      return await apiClient.get(path);
   },
   post: async (path: string, data: any) => {
      return await apiClient.post(path, data)
   }
}

export interface GetInputData {
   getInputData(): string;
   resetInputData(): void;
 }

