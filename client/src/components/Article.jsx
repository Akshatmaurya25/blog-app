import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";

var data;
export default function Article() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2525/articles")
      .then((response) => {
        setArticles(response.data);
        data = response.data;
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div className="dark:bg-gray-800 w-full h-fit min-h-screen flex flex-col justify-start items-center">
      {articles.map((Data, key) => {
        return <Card data={Data} key={key + 1} />;
      })}
    </div>
  );
}
