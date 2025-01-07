import { axiosClient } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { LoginValues } from "../schemas/login";

export const useRegister = () => {
    const mutation = useMutation({
        mutationFn: async (values: LoginValues) => {
            const result = await axiosClient.post("/sign-up", values);
            return result.data;
        },
    });

    return mutation;
};
