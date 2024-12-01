
import { useNavigate } from "react-router-dom";


export default function Flashcard({article}){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(article.link);
    };

    return (
        <div className="articles--section--card" onClick={handleClick}>
            <div className="articles--section--img">
                <img src = {article.src} alt="Placeholder"/>
            </div> 
            <div className="articles--section--card--content">
                <div>
                    <h3 className="articles--section--title">
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
    