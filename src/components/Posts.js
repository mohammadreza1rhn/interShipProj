import React, { useEffect, useState } from "react";
import { getAllPosts } from "../services/getAllPostServices";
import useFetchPosts from "../hooks/useFetchPosts";
export default function Posts() {
  const postDatas = useFetchPosts(); // use a custom hook to inital and fetch datas

  return (
    <>
      {postDatas ? (
        <div>
          {postDatas?.map((post) => (
            <div key={post.id}>
              <h1>{post.id}</h1>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "64px" }}>
          LOADING.............................
        </div>
      )}
    </>
  );
}
