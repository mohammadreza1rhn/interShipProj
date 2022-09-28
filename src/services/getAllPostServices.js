import { useEffect } from "react";
import http from "./httpService";

// create a function to get data from api and use it where ever you need the posts

export function getAllPosts() {
  return http.get("/posts");
}
