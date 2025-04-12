import Button from "@/components/fragments/Button";
import Card from "@/components/fragments/Cards";
import Footer from "@/components/fragments/Footer";
import LoadingSkeletonElement from "@/components/fragments/LoadingSkeletonElement";
import SectionTitle from "@/components/fragments/SectionTitle";
import useQueryCategory from "@/hooks/useQueryCategory";
import useQueryQuestion from "@/hooks/useQueryQuestion";
import { categoryImage } from "@/utils";
import { Croissant, Play, Search, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const {
    questions,
    isLoading: isLoadingQuestion,
    isError: isErrorQuestion,
  } = useQueryQuestion();
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const {
    categorys,
    isLoading: isLoadingCategory,
    isError: isErrorCategory,
  } = useQueryCategory();
  const navigate = useNavigate();

  if (isLoadingQuestion) {
    return <LoadingSkeletonElement />;
  }

  if (isErrorQuestion) {
    return <h2>Error...</h2>;
  }

  const filteredQuestions = questions.filter((quest) => {
    if (difficultyFilter === "All") return true;
    return quest.difficulty === difficultyFilter;
  });

  return (
    <div className="w-full space-y-5 min-h-screen">
      <SectionTitle>
        <div className="flex items-center justify-center text-center w-full flex-col gap-10 py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Hello Welcome
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a variety of quizzes across different categories. Whether
            you’re into science, history, or pop culture, we have a quiz for
            you! Challenge your knowledge, track your progress, and discover new
            areas to improve.
          </p>
        </div>
      </SectionTitle>

      {/* question */}
      <section className="px-4 space-y-6">
        <div className="flex items-center justify-between w-full">
          <span className="flex items-center gap-2 select-none">
            <SlidersHorizontal size={20} />
            <h2 className="text-lg font-semibold">Filter by Difficulty</h2>
          </span>

          <div className="flex gap-4">
            {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
              <Button
                key={difficulty}
                onClick={() => setDifficultyFilter(difficulty)}
                className={`px-5 py-2 cursor-pointer ${difficulty === difficultyFilter ? "bg-gray-900 text-white" : "bg-transparent border-2 text-sm border-gray-200 "} rounded-full font-medium hover:bg-gray-950 hover:text-white transition-colors`}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {filteredQuestions.slice(0, 9)?.map((quest) => {
            const { id, category, question, difficulty, description } = quest;
            const categoryImages =
              categoryImage[category] || categoryImage["uncategorized"];
            return (
              <Card
                key={id}
                className="border p-4 rounded-md space-y-5 flex flex-col h-auto justify-between shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <Card.Image
                    src={categoryImages}
                    alt={category}
                    className="w-8 h-8"
                  />
                  <h2 className="text-sm font-semibold">
                    {category} <span>{difficulty}</span> Question
                  </h2>
                </div>
                <Card.Header>
                  <p className="text-sm text-gray-700">
                    {description || question}
                  </p>
                </Card.Header>
                <Card.Footer className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Croissant size={16} className="text-gray-600" />
                    <p className="text-sm text-gray-600">{difficulty}</p>
                  </span>

                  <Button className="rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all flex items-center gap-2 py-2 px-4 cursor-pointer text-xs">
                    <Play size={16} />
                    Play
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </section>

      {/* category */}
      <section className="px-4 py-6 space-y-6">
        <div>
          <span className="flex items-center gap-2 select-none">
            <SlidersHorizontal size={20} />
            <h2 className="text-lg font-semibold">Filter by Category</h2>
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categorys?.map((category) => {
            const { id, name } = category;
            const image = categoryImage[name] || categoryImage.uncategorized;
            return (
              <Card
                key={id}
                className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform duration-300"
                onClick={() => navigate(`/questions/${name}`)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white opacity-20"></div>
                <div className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <Card.Image
                      src={image}
                      alt={name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <Card.Header className="text-lg font-semibold text-gray-800">
                    {name}
                  </Card.Header>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
