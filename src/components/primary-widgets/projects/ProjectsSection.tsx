import { projectDescriptions } from "../../../assets/skillsResources.tsx";
import "./ProjectsSection.less"
import { PageSection } from "../../generic/PageSection.tsx";
import { Row } from "../../generic/Row.tsx";
import { ProjectCard } from "./ProjectCard.tsx";

export const ProjectsSection = () => {

    return (
        <div className="projects">
            <PageSection>
                <h1>Projects</h1>
                <PageSection>
                    <Row>
                        {projectDescriptions.map(p => 
                            <ProjectCard 
                                key={"project-micro-component-" + p.id}
                                project={p}
                            />
                        )}
                    </Row>
                </PageSection>
            </PageSection>
        </div>
    )
}
