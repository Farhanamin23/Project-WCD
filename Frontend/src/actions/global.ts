import axios from "axios";

export const baseUrl = process.env.REACT_APP_BASE_URL;

const apiClient = axios.create({
   baseURL: baseUrl + '/api',
   headers: {
      "Content-type": "application/json",
   },
})

const apiClientFormData = axios.create({
   baseURL: baseUrl + '/api',
   headers: {
      "Content-type": "multipart/form-data",
   },
})


export const adapter = {
   get: async (path: string) => {
      return await apiClient.get(path);
   },
   post: async (path: string, data: any) => {
      return await apiClient.post(path, data)
   },
   postFormData: async (path: string, data: any) => {
      return await apiClientFormData.post(path, data)
   },
}

export interface GetInputData {
   getInputData(): any;
   resetInputData(): void;
 }

 export interface StringValue {
   name: string,
   value: any
 }
