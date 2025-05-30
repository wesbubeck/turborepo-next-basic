"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseURL = "http://localhost:3000";
//NEXT_PUBLIC_API_URL="http://localhost:3000"

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const usePosts = () =>
  useQuery({
    queryKey: ["Posties"],
    queryFn: async () => (await api.get<any[]>(`/api/post`)).data,
  });
