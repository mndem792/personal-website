import data from "../../data/index.json"

export default function Articles() 
{
    return (
        <section className="articles--section" id="Articles">
            <div className="articles--container-box">
                <div className="articles--container">
                    <p className="sub--title">
                        Recent Articles
                    </p>
                    <h2 className="section--heading">
                        My Articles
                    </h2>
                </div>
            </div>
            <div className="articles--section--container">
                {data?.articles?.map((item, index) => (
                    <div key={index} className="articles--section--card">
                       <div className="articles--section--img">
                            <img src = {item.src} alt="Placeholder"/>
                        </div> 
                        <div className="articles--section--card--content">
                            <div>
                                <h3 className="articles--section--title">
                                    {item.title}
                                </h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <p className="text-sm articles--link">

                            </p>
                        </div>

                     </div>
                ))}
            </div>
        </section>
    )
}