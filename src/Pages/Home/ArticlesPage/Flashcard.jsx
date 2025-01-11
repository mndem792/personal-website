
import { useNavigate } from "react-router-dom";


export default function Flashcard({article}){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(article.link);
    };

    return (
        <div className="articles--section--flashcard" onClick={handleClick}>
            <div className="articles--section--flashcard--img">
                <img src = {article.image} alt="Placeholder"/>
            </div> 
            <div className="articles--section--flashcard--content">
                <div>
                    <h3 className="articles--section--flashcard--title">
                        {article.title}
                    </h3>
                    <p className="text-md">{article.description}</p>
                </div>
                <p className="text-sm articles--link">

                </p>
            </div>

        </div>
    )
}
    