"use client";
import { CategoryContext } from "@/app/context/CategoryContext";
import styles from "./newsList.module.css";
import { RAPID_API_BASE_URL, RAPID_API_KEY } from "@/app/constants";
import { NewsItem } from "@/app/News.types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const NewsList = () => {
  const { newslist__container, img__container, news__item, news__info } =
    styles;
  const [newsList, setNewsList] = useState([]);
  const { selectedCategory } = useContext(CategoryContext);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const getNews = async () => {
      const url = `${RAPID_API_BASE_URL}?count=100&cc=us%2Cun%2Cja&setLang=EN&safeSearch=Off&textFormat=Raw`;
      const categoryUrl = `${RAPID_API_BASE_URL}?count=100&category=${selectedCategory}&cc=us%2Cun%2Cja&setLang=EN&safeSearch=Off&textFormat=Raw`;
      const options = {
        method: "GET",
        headers: {
          "Accept-Language": "en",
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "b76d9106d7msh5f92fbf4c5f3d4ap1d3bddjsnf9e362de983c",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      try {
        if (selectedCategory !== "") {
          const response = await fetch(categoryUrl, options);
          const data = await response.json();
          const value = data.value;
          console.log(value);
          setNewsList(value);
          return value;
        }
        const response = await fetch(url, options);
        const data = await response.json();
        const value = data.value;
        console.log(value);
        setNewsList(value);
        return value;
      } catch (error) {
        console.error(error);
      }
    };

    getNews();
  }, [selectedCategory]);

  return (
    <main>
      <div className={`container ${newslist__container}`}>
        {newsList &&
          newsList.map((news: NewsItem, index: number) => (
            <article className={news__item} key={index}>
              <div className={news__info}>
                <h1>{news.name}</h1>
                <p>{formatDate(news.datePublished)}</p>
                <a target="_blank" href={news.url} rel="noopener noreferrer">
                  Continue Reading
                </a>
              </div>
              <div className={img__container}>
                <Image
                  fill={true}
                  src={
                    news?.image?.thumbnail?.contentUrl &&
                    news?.image?.thumbnail?.contentUrl
                  }
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt=""
                  quality={100}
                />
              </div>
            </article>
          ))}
      </div>
    </main>
  );
};

export default NewsList;
