"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="dark">
        {children}
      </MantineProvider>
    </QueryClientProvider>
  );
}
