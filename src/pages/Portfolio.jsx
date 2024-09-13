import './portfolio.css'

export default function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <div className="portfolio__container">
                {projects.map((element, index) => {
                    return (
                        <div className="project" key={index}>
                            <div className="project__image-container">
                                <img src={element.image} alt="project image" />
                            </div>
                            <h3>{element.name}</h3>
                            <a target="_blank" className="yellow" href={element.deployed}>Deployed app</a>
                            <br />
                            <a target="_blank" className="yellow" href={element.github}>Github repo</a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const projects = [
    {
        name: "Weather App",
        github: "https://github.com/marioxabel/WeatherApp",
        deployed: "https://weatherapp-2dkx.onrender.com/",
        image: "https://github.com/marioxabel/Running-tasks/raw/main/assets/app-screenshot.png"
    },
    {
        name: "Running Tasks",
        github: "https://github.com/marioxabel/Running-tasks",
        deployed: "https://marioxabel.github.io/Running-tasks",
        image: "https://github.com/marioxabel/WeatherApp/raw/main/client/public/weatherApp.png"
    },
    {
        name: "Weather App",
        github: "https://github.com/marioxabel/WeatherApp",
        deployed: "https://weatherapp-2dkx.onrender.com/",
        image: "https://github.com/marioxabel/Running-tasks/raw/main/assets/app-screenshot.png"
    },
    {
        name: "Running Tasks",
        github: "https://github.com/marioxabel/Running-tasks",
        deployed: "https://marioxabel.github.io/Running-tasks",
        image: "https://github.com/marioxabel/WeatherApp/raw/main/client/public/weatherApp.png"
    },
    {
        name: "Weather App",
        github: "https://github.com/marioxabel/WeatherApp",
        deployed: "https://weatherapp-2dkx.onrender.com/",
        image: "https://github.com/marioxabel/Running-tasks/raw/main/assets/app-screenshot.png"
    },
    {
        name: "Running Tasks",
        github: "https://github.com/marioxabel/Running-tasks",
        deployed: "https://marioxabel.github.io/Running-tasks",
        image: "https://github.com/marioxabel/WeatherApp/raw/main/client/public/weatherApp.png"
    },


]