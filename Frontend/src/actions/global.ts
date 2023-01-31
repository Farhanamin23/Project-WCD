import axios from "axios";

const apiClient = axios.create({
   baseURL: "http://localhost:1337/api",
   headers: {
      "Content-type": "application/json",
   },
})

interface ApiResponse<T>{
	errorMessage?: string;
	responseCode?: string;
	data?: T;
}

interface BannerData {
	name: string;
	email: string;
} 
export const findAll = async (path: string) => {
   const response = await apiClient.get(path);
   console.log(response)
   return response.data;
 }