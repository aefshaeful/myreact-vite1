import Axios from "axios";

export const getProducts = Axios.create({
    baseURL: "https://fakestoreapi.com",
    method: "GET",
});