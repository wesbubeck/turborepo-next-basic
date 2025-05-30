"use client";

import { ReactNode } from "react";
import { usePosts } from "../hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

export const Button = ({ children, className, appName }: ButtonProps) => {
  const { data } = usePosts();
  console.log({ data });
  return (
    <QueryClientProvider client={queryClient}>
      <button className={className} onClick={() => {}}>
        {children}
      </button>
    </QueryClientProvider>
  );
};
