import './Home.css';
import resume from "./resume/Hasen_Resume_SE_2023.pdf";

function Home() {
    return (

        <div className="Home">

            <div className='intro1'>
                <h1>Hi, I am Hasen.</h1>
                <h2>I design, build, and test software.</h2>
                <a download href={resume}>
                    <h3>resumé</h3>
                </a>
            </div>

            <div className='social'>

            </div>

        </div>
    );
}

export default Home;