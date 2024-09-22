import { ProjectDescription } from "../../../assets/skillsResources.tsx";
import "./ProjectsSection.less"

export const ProjectCard = (props: {project: ProjectDescription}) => {

    const { project } = props;

    return (
        <div className="project-image-container">
            <a id={"project-micro-component-" + project.id} href={project.link}>
                <img src={project.imageSrc}/>
                <div className="see-more-label">
                    <p>See more</p>
                </div>
            </a>
        </div>
    )
}
