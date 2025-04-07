import axiosInstace from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const useQueryCategory = () => {
  const {
    data: categorys,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      try {
        const response = await axiosInstace.get("/categories ");
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retryDelay: 1000,
  });

  return { categorys, isLoading, isError };
};

export default useQueryCategory;
