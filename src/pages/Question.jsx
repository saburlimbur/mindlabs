import Button from "@/components/fragments/Button";
import Card from "@/components/fragments/Cards";
import Footer from "@/components/fragments/Footer";
import LoadingSkeletonElement from "@/components/fragments/LoadingSkeletonElement";
import SectionTitle from "@/components/fragments/SectionTitle";
import useQueryQuestion from "@/hooks/useQueryQuestion";
import { categoryImage } from "@/utils";
import { Croissant, Play, Search, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  const { questions, isLoading, isError } = useQueryQuestion();
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  console.log("questions", questions);

  if (isLoading) {
    return <LoadingSkeletonElement />;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  const filteredQuestions = questions.filter((quest) => {
    if (difficultyFilter === "All") return true;
    return quest.difficulty === difficultyFilter;
  });

  return (
    <div className="w-full space-y-5">
      <SectionTitle>
        <div className="flex items-center justify-center text-center w-full flex-col gap-10 py-20 px-4">
          <div className="flex flex-col gap-3">
            <h2 className="lg:text-5xl md:text-4xl text-xl font-bold text-gray-800 tracking-tight">
              Question
            </h2>
            <p className="text-sm lg:text-xl md:text-lg text-gray-600 max-w-3xl mx-auto">
              Challenge yourself with a wide array of questions that test your
              knowledge across multiple domains. From fun trivia to in-depth
              quizzes, find out how much you really know!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              <Search className="w-4 h-4" />
              Search
            </Link>
          </div>
        </div>
      </SectionTitle>

      <section className="px-4 space-y-6 min-h-screen">
        <div className="flex items-center justify-between w-full">
          <span className="flex items-center gap-2 select-none">
            <SlidersHorizontal size={20} />
            <h2 className="lg:text-lg md:text-sm text-sm font-semibold">
              Filter Difficulty
            </h2>
          </span>

          <div className="flex gap-4">
            {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
              <Button
                key={difficulty}
                onClick={() => setDifficultyFilter(difficulty)}
                className={`px-5 py-2 cursor-pointer ${difficulty === difficultyFilter ? "bg-gray-900 text-white lg:text-base md:text-sm text-sm" : "bg-transparent border-2 lg:text-base md:text-sm text-sm border-gray-200 "} rounded-full font-medium hover:bg-gray-950 hover:text-white transition-colors`}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filteredQuestions.map((quest) => {
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
                  <h2 className="lg:text-sm md:text-sm text-xs font-semibold">
                    {category} <span>{difficulty}</span> Question
                  </h2>
                </div>
                <Card.Header>
                  <p className="lg:text-sm md:text-xs text-xs text-gray-700">
                    {description || question}
                  </p>
                </Card.Header>
                <Card.Footer className="flex items-center justify-between">
                  <span className="flex items-center lg:gap-2 md:gap-1 gap-1">
                    <Croissant size={16} className="text-gray-600" />
                    <p className="lg:text-sm md:text-xs text-xs text-gray-600">
                      {difficulty}
                    </p>
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

      <Footer />
    </div>
  );
}

export default Questions;
