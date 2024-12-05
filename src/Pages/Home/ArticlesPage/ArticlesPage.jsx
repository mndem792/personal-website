import data from "../../../data/index.json"
import Flashcard from "./Flashcard"

export default function ArticlesPage() 
{
    return (
        <section className="articles--section" id="Articles">
            <div className="articles--section--container">
                {data?.articles?.map((article) => (
                    <Flashcard key={article.id} article={article}/>
                ))}
            </div>
        </section>
    )
}