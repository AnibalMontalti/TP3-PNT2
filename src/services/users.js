const URL ="https://6660e37e63e6a0189fe7d3f2.mockapi.io/api/usuarios"
import axios from 'axios'

export const getUsers = async () => {
    try{
        const { data: usuarios } = await axios.get(URL)
        return usuarios
    }
    catch(error) {
        console.error("Ocurrió un error obteniendo los usuarios", error)
        return []
    }
};