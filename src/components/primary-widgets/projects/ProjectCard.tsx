import { ProjectDescription } from "../../../assets/skillsResources.tsx";
import "./ProjectsSection.less"

export const ProjectCard = (props: {project: ProjectDescription}) => {

    const { project } = props;

    return (
        <div className="project-image-container">
                <img src={project.imageSrc}/>
                {project.link &&
                    <a href={project.link}>
                        <div className="see-more-label offset30">
                            <p>Live app</p>
                        </div>
                    </a>
                }
                {project.githubLink &&
                    <a href={project.githubLink}>
                        <div className="see-more-label offset70">
                            <p>Github</p>
                        </div>
                    </a>
                }
        </div>
    )
}
