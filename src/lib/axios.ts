import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosClient.interceptors.response.use(
    (res) => res,
    (error: AxiosError<{ message?: string }>) => {
        const msg = error.response?.data?.message || error.message;
        throw new Error(msg);
    },
);
export { axiosClient };
