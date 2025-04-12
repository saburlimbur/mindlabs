import React from "react";
import { Skeleton } from "../ui/skeleton";

function LoadingSkeletonAnswer() {
  return (
    <section className="w-full flex flex-col min-h-screen">
      <div className="p-6 w-full">
        <section className="flex items-start justify-between gap-5 w-full">
          <aside className="flex-1 w-1/2 space-y-6">
            <div className="space-y-3">
              <Skeleton className="w-3/4 h-6 rounded-md" />
              <Skeleton className="w-1/2 h-4 rounded-md ml-7" />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-12 rounded-md" />
              ))}
            </div>
          </aside>

          <aside className="w-1/3 space-y-4">
            <Skeleton className="w-full h-12 rounded-md" />
            <Skeleton className="w-full h-20 rounded-md" />
          </aside>
        </section>
      </div>
    </section>
  );
}

export default LoadingSkeletonAnswer;
