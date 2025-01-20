import { AxiosError } from "axios";
import { projectsApi } from "./http-config";

interface ResponseUserRequestApi {
    success: boolean;
    code: number;
    message: string;
    user?: User;
}

interface User {
    id: string,
    name: string,
    email: string,
    username: string,
    token: string
}

export async function SignIn(email: string, password: string): Promise<ResponseUserRequestApi> {
    try{
        console.log('entrei credenciais sendo validadas: ', {email, password})

        const response = await projectsApi.post('/login', {email: email, password: password})

        const { success, code, message, data } = response.data;

        return {
            message,
            success,
            code,
            user: data
        }

    } catch (error){
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

interface UserRegisterRequest {
    name: string,
    email: string,
    username: string,
    password: string
}

interface UserRegisterResponse {
    success: boolean;
    code: number;
    message: string;
    user?: UserRegisterRequest;
}

export async function SignUp(name: string, email: string, username: string, password: string): Promise<UserRegisterResponse> {
    try {
        const response = await projectsApi.post('/register', {name, email,username, password});

        const { success, code, message, data } = response.data

        return {
            success,
            code,
            message,
            user: data
        }
    } catch (error) {
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

