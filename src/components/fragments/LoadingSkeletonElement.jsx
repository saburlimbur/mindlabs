import React from "react";
import { Skeleton } from "../ui/skeleton";

function LoadingSkeletonElement() {
  return (
    <div className="flex items-center text-center w-full flex-col gap-10 py-20 px-4">
      <Skeleton className="h-auto w-w-full rounded-xl" />
      <div className="space-y-2 flex flex-col justify-center items-center py-20 w-full">
        <Skeleton className="h-6 w-[300px]" />
        <Skeleton className="h-5 w-[500px]" />
        <Skeleton className="h-5 w-[200px]" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="space-y-2 flex flex-col justify-center items-center border rounded-lg p-10">
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-5 w-[150px]" />
        </div>

        <div className="space-y-2 flex flex-col justify-center items-center border rounded-lg p-10">
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-5 w-[150px]" />
        </div>

        <div className="space-y-2 flex flex-col justify-center items-center border rounded-lg p-10">
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-5 w-[150px]" />
        </div>

        <div className="space-y-2 flex flex-col justify-center items-center border rounded-lg p-10">
          <Skeleton className="h-6 w-[150px]" />
          <Skeleton className="h-5 w-[150px]" />
        </div>
      </div>
    </div>
  );
}

export default LoadingSkeletonElement;
