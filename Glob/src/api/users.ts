import { CancelToken } from "axios";
import { IUser } from "../Models/IUser";
import { instance } from ".";

const getUsers = (term: string, sourceToken?: CancelToken) => {
    return instance.get<IUser[]>(`?term=${term}`, { cancelToken: sourceToken })
}



const endpoints = {
    getUsers
};


export default endpoints;
