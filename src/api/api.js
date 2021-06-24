import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8081'
});

export const busca = async(url, setDado) => {
    const respostas = await api.get(url);
    setDado(respostas.data.content);
}