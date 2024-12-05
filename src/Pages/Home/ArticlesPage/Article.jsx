import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import remarkGfm from "remark-gfm"; // For GitHub-flavored markdown
import data from "../../../data/index.json";
import MarkdownRenderer from "./MarkdownRenderer"
import NotFound from "../NotFound"

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

    if (!article) return <NotFound/>;

    return (
        <section className="article--content">
            <div>
                <MarkdownRenderer content={content} />
            </div>
        </section>
    );
}

export default Article;
