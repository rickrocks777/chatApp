import axios from "axios"

export const postRequest = async (url,data) => {
    try {
        const response = await axios.post(url,data,{withCredentials:true});
        return response;
    } catch(err) {
        console.log(err)
    }
}

export const getRequest = async(url,token) => {
    const response = await axios.get(url,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true
    },);
    return response;
}
