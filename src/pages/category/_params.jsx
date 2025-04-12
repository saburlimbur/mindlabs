import Badge from "@/components/fragments/Badge";
import Button from "@/components/fragments/Button";
import Card from "@/components/fragments/Cards";
import CountdownTimer from "@/components/fragments/CountdownTimer";
import LoadingSkeletonAnswer from "@/components/fragments/LoadingSkeletonAnswer";
import useCategoryQuestionByName from "@/hooks/useCategoryQuestionByName";
import { categoryImage } from "@/utils";
import { Clock } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function CategoryQuestionByName() {
  const { category } = useParams();
  const { questionCategoryName, isLoading, isError } =
    useCategoryQuestionByName(category);
  const [selectQuestion, setSelectedQuestion] = useState(0);

  if (isLoading) return <LoadingSkeletonAnswer />;
  if (isError)
    return (
      <h2 className="text-center py-10 text-red-500">
        Error loading questions.
      </h2>
    );

  const currentQuestion = questionCategoryName[selectQuestion];
  const answerKeys = ["answer_a", "answer_b", "answer_c", "answer_d"];

  return (
    <section className="w-full min-h-screen flex flex-col py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* === question === */}
        <aside className="col-span-8">
          <Card className="bg-white h-full p-6 rounded-xl shadow-md space-y-6">
            <Card.Header className="mb-4">
              <h2 className="text-lg font-semibold text-indigo-600 mb-1">
                Question {selectQuestion + 1}
              </h2>
              <h1 className="text-xl font-bold text-gray-800">
                {currentQuestion.question}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {currentQuestion.description}
              </p>
            </Card.Header>

            <Card.Body className="space-y-4 mt-6">
              {answerKeys.map((key, i) => {
                const value = currentQuestion.answers[key];
                if (!value) return null;

                return (
                  <Card.Header
                    key={key}
                    className="flex items-center gap-4 p-4 border border-gray-200 hover:border-gray-800 transition-all rounded-lg shadow-sm bg-white cursor-pointer"
                  >
                    <span className="w-8 h-8 flex items-center justify-center text-white bg-gray-800 font-bold rounded-full">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <p className="text-gray-700">{value}</p>
                  </Card.Header>
                );
              })}
            </Card.Body>
            <Card.Footer>
              <Button className="w-[150px] text-white bg-gray-900 rounded-lg hover:bg-gray-800 py-4 cursor-pointer transition-all ease-in">
                Submit
              </Button>
            </Card.Footer>
          </Card>
        </aside>

        {/* === question list === */}
        <aside className="col-span-4">
          <Card className="bg-white rounded-xl p-6 shadow-md">
            <Card.Header className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-700">Question List</h2>
              <div className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 border border-gray-200 rounded-md">
                <Clock size={16} />
                <CountdownTimer />
              </div>
            </Card.Header>

            <Card.Body className="space-y-2 max-h-[70vh] overflow-y-auto custom-scroll">
              {questionCategoryName.map((qstn, index) => (
                <Card.Header
                  key={qstn.id}
                  onClick={() => setSelectedQuestion(index)}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer hover:shadow-sm transition-all ${
                    index === selectQuestion
                      ? "bg-indigo-50 border-gray-900"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Badge
                    title={index + 1}
                    className={`rounded-md text-sm font-bold px-2 py-1 ${
                      index === selectQuestion
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  />
                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm text-gray-800 font-medium line-clamp-2">
                      {qstn.question}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Card.Image
                        src={categoryImage[category]}
                        alt={category}
                        className="w-4 h-4"
                      />
                      {qstn.category}
                    </div>
                  </div>
                </Card.Header>
              ))}
            </Card.Body>
          </Card>
        </aside>
      </div>
    </section>
  );
}

export default CategoryQuestionByName;
