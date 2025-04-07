import axiosInstace from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const useQueryQuestion = () => {
  const {
    data: questions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      try {
        const response = await axiosInstace.get("/questions");
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retryDelay: 1000,
  });

  return { questions, isLoading, isError };
};

export default useQueryQuestion;
