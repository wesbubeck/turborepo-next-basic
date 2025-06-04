"use client";
import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const usePosts = () =>
  useQuery({
    queryKey: ["Posties"],
    queryFn: async () => (await api.get<any[]>(`/api/post`)).data,
  });