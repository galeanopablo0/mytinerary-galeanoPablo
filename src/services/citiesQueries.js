import axios from "axios";

export const getCities = async () => {
    try{
        const resultadosExtraccion = await axios('http://localhost:4000/api/cities');
        return resultadosExtraccion.data.data;
    } catch(err) {
        return []
    }
}

export const getCityById = async ( id ) => {
    try {
        const resultadoById = await axios("http://localhost:4000/api/cities/" + id);
        return resultadoById.data.data;
    } catch (error) {
        return {}
    }
}