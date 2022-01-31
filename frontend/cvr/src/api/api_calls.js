import axios from "axios";

export const signup = (body) =>{
    return  axios.post('http://localhost:8080/api/users', body);
}

export const signupAdmin = (body) =>{
    return  axios.post('http://localhost:8080/api/admin', body);
}


export const login = creds =>{
    return axios.post('http://localhost:8080/api/auth/user', {},{auth: creds});  
}

export const loginAdmin = creds =>{
    return axios.post('http://localhost:8080/api/auth/admin', {},{auth: creds});  
}

export function getAllCv()  {
    return axios.get('http://localhost:8080/api/cv');
}

export function getOneCv(id)  {
    const link = 'http://localhost:8080/api/cv/' + id;
    return axios.get(link);
}

export function postCV(body) {
    return axios.post('http://localhost:8080/api/cv',body);
    
}