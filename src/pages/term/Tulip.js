import React, {Component} from "react";
import './Tulip.css';
import tulipLogo from './images/tulip-retail-logo.png';
import video from './images/tulip_clienteling.mp4';
import dgLogo from './images/dg.png';
import versaceLogo from './images/versace.png';
import teamPhoto from './images/product_team.png';


class Tulip extends Component {


    render(){
    return (
        <div>
            <header className="headline">
                <div className="container">
                    <h1>Tulip Retail 🌷</h1>
                </div>

                <div className="date">
                    <p>📅 September - December 2022</p>
                </div>

            </header>

            <div className="display-term-list container">

                <p className="paragraph-term">
                In this report, I will discuss about the company, Product Delivery team, the goals I have set for myself and the plan I have created to achieve them. Additionally, I will discuss my role as a Software Developer on the <span>Product Delivery</span> team at Tulip Retail and the skills I gained during my time there in <span>Fall 2022</span>.
                </p>

                <div className="image-term">
                    <img  src={tulipLogo} alt="tulip-logo"/>
                </div>

                <div className="section-term">
                    <p>Overview of the Company</p>
                </div>

                <p className="paragraph-term">
                Tulip is a leading software as a service (SaaS) company that specializes in mobile platforms for the retail industry. Since its founding in 2013, Tulip has seen rapid growth and now serves globally recognized retailers such as Dolce & Gabbana, Saks Fifth Avenue, Coach, Kate Spade, and Chanel. Tulip's core offerings include clienteling, appointment management, live connect, point of sale, and other features. As a forward-thinking company, Tulip is committed to shaping the future of retail through innovative technology solutions
                </p>

                <p className="paragraph-term">
                The Product Delivery team’s essential role is to deliver Tulip products to the client (Clienteling). This starts off with setting up base Tulip material for the client. The client soon would want customary material as time went on.</p>

                <div className="image-term">
                    <video src={video} width="100%" preload="auto" muted={true} playsInline controls/>
                </div>

                <p className="under-media-caption">
                    For an in-depth demo, <a href = "https://www.youtube.com/watch?v=tWnJoUxODeY" target="_blank" rel="noopener noreferrer">click here</a>
                </p>

                <div className="section-term">
                    <p>My Role</p>
                </div>

                <p className="paragraph-term">
                During my Fall work term, I was a full-stack developer where I had the privilege of working with front-end components of iOS and web applications where clients can input information and back-end communicating between Tulip’s API and client’s databases and infrastructure. As well as, developing documentation based on the work to better assist production transition stages.
                </p>

                <div className="section-term">
                    <p>Goals</p>
                </div>

                <ul className="list-term">
                    <li>
                    Learn and work with JavaScript to better understand its impact on current and incoming future clients.
                    </li>

                    <li>
                    To understand how to implement full-stack development functionality, components, and features such as hooks, APIs, etc. 
                    </li>

                    <li>
                    To understand and observe the business perspective process between customer communication and development integration.
                    </li>

                    <li>
                    Explore interesting areas outside of the full-stack development realm.
                    </li>
                </ul>

                <div className="img2">
                    <img  src={dgLogo} alt="dg-logo"/>
                </div>

                <div className="section-term">
                    <p></p>
                </div>

                <p className="paragraph-term2">
                While there was no direct communication between me and the client, navigating and understanding the client’s needs from setting them up to developing their newly requested features enabled me to maneuver towards an agile workflow within the industry. My first client work was with <span>Dolce & Gabbana (D&G)</span>. The Italian luxury brand serves retail worldwide, however, there are customers that still would want to communicate with Tulip products in their native language. Therefore, I assisted in providing simple localizations for the requested languages (French, Japanese, Korean, Portuguese, and Chinese) in a short period of time.
                </p>

                <div className="image-term">
                    <img  src={versaceLogo} alt="versace-logo"/>
                </div>

                <p className="paragraph-term">
                An opportunity arose when I was assigned to onboard the new and prestigious Italian luxury client such as <span>Versace</span> onto Tulip’s iOS clienteling application services. A vital aspect of integrating a fresh client is understanding what their needs and requirements were, how they can be met, and what questions should be asked prior to development.During this stage, I became comfortable with estimating the amount of time a project should take by dividing and organizing main tasks into smaller subtasks.. Although a relatively new client, being associated with D&G’s system (working with a program manager, developer, solution engineer, and quality assurance), helped me to facilitate a smooth transition to onboarding Versace with Tulip services and moving forward with their requests after establishing them.
                </p>

                <p className="paragraph-term">
                The beautiful thing about learning throughout the process of this work term is improving on tasks that were unrelated to my objectives mentioned above. Those include merge requests, code reviews, sprint planning, test-driven development, and writing clean, understandable, and refactorable code. A team internal task where I learned the most about <span>CI/CD pipelines</span> was setting up the deployment extensions for new and existing clients. The beauty of this is you can trigger deployment through Gitlab pipelines. I was given the opportunity to refactor the legacy TypeScript extensions for a retailer/client. Each attribute, field, and identifier is directly connected to a centralized Tulip type, rather than regenerating the same types for each incoming client. This streamlining process has greatly improved efficiency and productivity, where test times have decreased from 15 to 5 seconds. Not to mention, the process of ticketing, managing, and organizing software development tasks using <span>Jira</span> and <span>Visual Studio Team Services (VSTS)</span> as ticketing systems and Visual Studio Code as an IDE.
                </p>

                <div className="section-term">
                    <p>Conclusion</p>
                </div>

                <p className="paragraph-term">
                I had a great experience working as a software developer at Tulip. I had the opportunity to work on meaningful projects and contribute to the development of impactful features and bug fixes. Through this experience, I was able to gain valuable skills and knowledge. I am excited to see what the future holds and to continue growing as a developer.
                </p>

                <div className="img3">
                    <img  src={teamPhoto} alt="team"/>
                    
                </div>

                <div className="section-term">
                    <p>Acknowledgements</p>
                </div>

                <p className="paragraph-term">
                At every morning SCRUM meeting, we always end by expressing gratitude. I would like to start by thanking <span>Jastine Goyena</span> for being an excellent mentor during my onboarding process. She provided me with continuous feedback and opportunities to enhance my technical skills and learning experience. I also want to thank <span>Linda Ngo</span>, my codeveloper, for going above and beyond on projects and motivating me to assist her whenever she needed help. I am grateful to my team leads, <span>Corey Alexander</span> and <span>Abhishek</span>, for providing insight into their work and guiding me with their wisdom and thoughtfulness conversations. Finally, I want to thank the rest of the Product team - <span>Ross, Neil, Rachel, Dalton</span>, and <span>Thomas</span> - for their contributions to my growth, both directly and indirectly.
                </p>

            </div>

        </div>

    )
}
}

export default Tulip;