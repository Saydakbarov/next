import axios from "axios"

const baseUrl = "https://next-hf6pd0vwz-jasur-code.vercel.app/api"

const getAllTeams = async (team) => {
    try {
        const res = await axios.get(`${baseUrl}/teams/${team}`)
        return res.data
    } catch (error) {
        return []
    }
}   

export {getAllTeams}