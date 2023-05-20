import axios from "axios";

export class ServerCall{
    static fnGetReq(url){
        return axios.get(url)
    }
}