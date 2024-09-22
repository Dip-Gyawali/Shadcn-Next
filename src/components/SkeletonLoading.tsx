import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoading() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <Skeleton className="w-full h-[300px] object-cover rounded-md mb-4" />
        <Skeleton className="h-10 w-1/2 rounded-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 flex-grow mt-4" />
        <Skeleton className="h-4 flex-grow mt-4" />
        <Skeleton className="h-4 flex-grow mt-4" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-20" />
      </CardFooter>
    </Card>
  );
}
