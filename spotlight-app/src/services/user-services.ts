import User from "../models/User";
import { save, add } from "./api-services";


const UserAPI = 'register';
const AuthAPI = 'login';

export const RegisterUser = async (userData: any): Promise<User[]> => {
    return await save<User>(UserAPI, userData);
}

export const loginUser = async (username: string, password: string): Promise<any> => {
    return await add(AuthAPI, { username, password });
}