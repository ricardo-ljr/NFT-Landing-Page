import Image from 'next/image';
import data from '../data/surveySection.json';

const Management = () => {
    return (
        <section className="management">
            <div className="container-management">
                <div className="content-management">
                    {data.blocks.map(survey =>
                        <div className="item" key={survey.id}>
                            <div className="left-side">
                                <Image src={survey.image} alt="Mockup" width={550} height={350} />
                            </div>
                            <div className="right-side">
                                <h3>{survey.title}</h3>
                                <p>{survey.description}</p>
                                <button><a href={survey.link}>{survey.button}</a></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Management;