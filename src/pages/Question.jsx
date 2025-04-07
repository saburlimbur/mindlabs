import Button from "@/components/fragments/Button";
import Card from "@/components/fragments/Cards";
import Footer from "@/components/fragments/Footer";
import LoadingSkeletonElement from "@/components/fragments/LoadingSkeletonElement";
import SectionTitle from "@/components/fragments/SectionTitle";
import useQueryQuestion from "@/hooks/useQueryQuestion";
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

  const categoryImage = {
    NodeJs: "/icons8-nodejs.svg",
    Code: "/icons8-code.svg",
    bash: "/icons8-bash.svg",
    Docker: "/icons8-docker.svg",
    Django: "/icons8-django.svg",
    "Next.js": "/icons8-nextjs.svg",
    HTML: "/icons8-html.svg",
    VueJS: "/icons8-vue-js.svg",
    SQL: "/sql-database-generic-svgrepo-com.svg",
    React: "/react-js-icon.svg",
    WordPress: "/wordpress-icon.svg",
    DevOps: "/devops-2.svg",
    Linux: "/linux-tux.svg",
    uncategorized: "/uncategorized-svgrepo-com.svg",
  };

  return (
    <div className="w-full space-y-5">
      <SectionTitle>
        <div className="flex items-center justify-center text-center w-full flex-col gap-10 py-20 px-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              Question
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Challenge yourself with a wide array of questions that test your
              knowledge across multiple domains. From fun trivia to in-depth
              quizzes, find out how much you really know!
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
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
            <h2 className="text-lg font-semibold">Filter Difficulty</h2>
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

      <Footer />
    </div>
  );
}

export default Questions;
