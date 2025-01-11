import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../../data/index.json";
import MarkdownRenderer from "./MarkdownRenderer"
import {Navigate} from 'react-router-dom';

function Article() {
    const { link } = useParams();
    const article = data?.articles?.find((a) => a.link === `/${link}`);
    const [content, setContent] = useState("")

    useEffect(() => {
        if (article && article.contentFile) {
            fetch(article.contentFile)
                .then((response) => response.text())
                .then((content) => setContent(content))
                .catch((err) => console.error("Failed to load content:", err));
        }
    }, [article]);

    if (!article) return <Navigate to="/" replace />

    return (
        <section className="article--section" >
            <h1> {article.title} </h1>
            <img src={article.image} className="article--main-image"></img>
            <div className="article--content">
                <MarkdownRenderer content={content} />
            </div>
        </section>
    );
}

export default Article;
