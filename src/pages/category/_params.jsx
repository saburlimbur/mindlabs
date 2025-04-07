import Badge from "@/components/fragments/Badge";
import Card from "@/components/fragments/Cards";
import Footer from "@/components/fragments/Footer";
import useCategoryQuestionByName from "@/hooks/useCategoryQuestionByName";
import { categoryImage } from "@/utils/timers";
import { Clock } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function CategoryQuestionByName() {
  const { category } = useParams();
  const { questionCategoryName, isLoading, isError } =
    useCategoryQuestionByName(category);
  const [selectQuestion, setSelectedQuestion] = useState(0);

  console.log("questionCategoryName", questionCategoryName);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;

  return (
    <section className="w-full flex flex-col min-h-screen">
      <div className="p-6 w-full">
        {questionCategoryName.slice(0, 1)?.map((qstn, index) => {
          const { id, question, description, answers } = qstn;
          const answerKeys = ["answer_a", "answer_b", "answer_c", "answer_d"];
          return (
            <section className="flex items-center justify-between gap-5 w-full space-y-10">
              <aside className="flex-1 w-1/2 space-y-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-semibold">{index + 1}.</p>
                    <h2 className="text-2xl font-semibold">{question}</h2>
                  </div>
                  <small className="px-7 text-gray-500">{description}</small>
                </div>

                <Card className="flex flex-col gap-5" key={id}>
                  {answerKeys.map((key, i) =>
                    answers[key] ? (
                      <Card.Header
                        key={key}
                        className="flex items-center gap-3 border p-3 rounded-md"
                      >
                        <p className="font-medium">
                          {String.fromCharCode(65 + i)}.
                        </p>
                        <span>{answers[key]}</span>
                      </Card.Header>
                    ) : null
                  )}
                </Card>
              </aside>

              <aside className="w-1/3">
                <div className="p-6 w-full rounded-lg border">
                  <Card className="space-y-5">
                    <Card.Header className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Question List</h2>
                      <div className="flex items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
                        <Clock size={16} className="text-gray-500" />
                        <h2 className="text-sm text-gray-500">30.00</h2>
                      </div>
                    </Card.Header>
                    <Card.Body className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
                      <Badge
                        title={index + 1}
                        className="rounded-sm text-lg font-semibold"
                      />
                      <img
                        src={categoryImage[category]}
                        alt={category}
                        className="w-5 h-5"
                      />
                      <h2>{category} Question</h2>
                    </Card.Body>
                  </Card>
                </div>
              </aside>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryQuestionByName;
