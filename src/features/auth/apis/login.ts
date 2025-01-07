import { axiosClient } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { LoginValues } from "../schemas/login";

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: async (values: LoginValues) => {
            const result = await axiosClient.post("/sign-in", values);
            return result.data;
        },
    });

    return mutation;
};
