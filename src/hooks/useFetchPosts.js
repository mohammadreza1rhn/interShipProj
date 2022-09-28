import React, { useState, useEffect } from "react";
import { getAllPosts } from "../services/getAllPostServices";
export default function useFetchPosts() {
  const [allDatas, setAllDatas] = useState(null); // state for posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await getAllPosts(); // get post and destructure in data
        setAllDatas(data); ///   set sate for rendering the posts given via api
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);
  return allDatas; // return result of cutom hook for use it where ever
}
