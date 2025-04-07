import { useNavigate } from "react-router-dom";
import Badge from "@/components/fragments/Badge";
import SectionTitle from "@/components/fragments/SectionTitle";
import useQueryCategory from "@/hooks/useQueryCategory";
import { Search, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/fragments/Footer";
import Card from "@/components/fragments/Cards";
import LoadingSkeletonElement from "@/components/fragments/LoadingSkeletonElement";

function Category() {
  const { categorys, isLoading, isError } = useQueryCategory();
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // const filteredCategory = (categorys || []).slice(0, 10);

  console.log("categorys:", categorys);

  if (isLoading) {
    return <LoadingSkeletonElement />;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

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
    Postgres: "/postgresql.svg",
    Laravel: "/laravel-2.svg",
    CMS: "/cms.svg",
    cPanel: "cpanel.svg",
    "Apache Kafka": "/kafka.svg",
  };

  return (
    <div className="w-full space-y-5">
      <SectionTitle>
        <div className="flex items-center justify-center text-center w-full flex-col gap-10 py-20 px-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              Category
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a variety of categories carefully curated to help you find
              the perfect match for your interests. Whether you're into
              technology, art, or history, we have something for everyone.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="#search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <Search className="w-4 h-4" />
              Search
            </Link>
          </div>
        </div>
      </SectionTitle>

      <section className="px-4 min-h-screen">
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

export default Category;
