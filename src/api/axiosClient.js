import axios from "axios"

const AxiosClient = {

    get: function (url, params) {
        try {
            return axios({
                method: "GET",
                baseURL: process.env.REACT_APP_API_URL,
                url,
                params,
            }).then(res => {
                return res.data.data.records;
            }
            ).catch(err => console.log(err))
        }
        catch (err) {
            console.log(err);
        }
    }
}
export default AxiosClient;
