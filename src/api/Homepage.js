import AxiosClient from "./axiosClient";

const Homepage = {
    getHighlight: (params) => {
        const url = "highlight/list";
        return AxiosClient.get(url, params);
    },
    getNewarrival: (params) => {
        const url = "";
        return AxiosClient.get(url, params);
    }
}

export default Homepage;

