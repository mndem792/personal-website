import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../../data/index.json";

function ArticleDetails() {
    const { id } = useParams(); // Retrieve dynamic route parameter
    const article = articles.find((a) => a.id === parseInt(id));

    if (!article) return <p>Article not found.</p>;

    return (
        <div className="article-details">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            {/* Add more detailed content here */}
        </div>
    );
}

export default ArticleDetails;
