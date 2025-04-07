import axiosInstace from "@/service/api";
import { useQuery } from "@tanstack/react-query";

const useCategoryQuestionByName = (category) => {
  const {
    data: questionCategoryName,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["questionCategoryName", category],
    queryFn: async () => {
      try {
        const apiKey = import.meta.env.VITE_QUIZ_API_KEY;
        const endpoint = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}`;
        const response = await axiosInstace.get(endpoint);
        return response.data;
      } catch (error) {
        throw new Error(error.message || "Failed to fetch questions");
      }
    },
    retryDelay: 1000,
    enabled: !!category,
  });

  return { questionCategoryName, isLoading, isError };
};

export default useCategoryQuestionByName;
