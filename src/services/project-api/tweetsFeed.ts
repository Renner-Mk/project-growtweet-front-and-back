import { AxiosError } from "axios";
import { projectsApi } from "./http-config";

interface ResponseTweetRequestApi{
    success: boolean;
    code: number;
    message: string;
    data?: ITweets[];
}

export interface IUser{
    id: string;
    name: string;
    username: string;
    urlImg: string;
}

export interface Like{
    tweetId: string;
    userId: string
}

export interface ITweets{
    id: string;
    content: string;
    type: string;
    userId: string;
    tweetOriginalId: string | null;
    like?: Like[];
    user: IUser;
}

export async function TweetsFeed(): Promise<ResponseTweetRequestApi>{
    const userLogged = localStorage.getItem('userLogged')

    if (!userLogged){
        return {
            success: false,
            code: 404,
            message: "O usuário deve fazer login primeiro"
        }
    }

    try{
        const user = JSON.parse(userLogged)

        const response = await projectsApi.get(`/user/${user.id}/feed`, {headers: {Authorization: user.token}})

        const { success, code, message, data } = response.data;

        return{
            success,
            code,
            message,
            data
        }
        
    }catch (error){
        if(error instanceof AxiosError){
        return {
            success: false,
            code: error.response?.status || 500,
            message: error.response?.data.message,
        };
    }
        return {
            success: false,
            code: 500, // Código de erro genérico
            message: "Ocorreu um erro inesperado. Entre en contato com o suporte."
        }
    }
}