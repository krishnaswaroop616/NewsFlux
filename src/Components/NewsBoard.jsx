import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard=({category})=>{

    const [articles,setArticles]=useState([]);

    useEffect(()=>{
        let URL=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(URL)
        .then(res=>res.json()).then(data=>setArticles(data.articles));
    },[category]);
    
    return (
        <div className="mx-4">
            <h2 className="text-center mt-3">Latest <span className="badge bg-danger ">News</span></h2>
            {articles.map((news,index)=>{
                return <NewsItem  title={news.title}  description={news.description}  image={news.urlToImage} url={news.url} key={index}/>
            })}
        </div>
    );
}


export default NewsBoard;
