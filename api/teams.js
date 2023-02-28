import axios from "axios";


const baseUrl = "https://next-hf6pd0vwz-jasur-code.vercel.app/api"


const getTeams = async () => {
    try {
        const res = await axios.get(`${baseUrl}/teams`)
        return res.data
    } catch (error) {
        return [];
    }
 
}

export {getTeams}