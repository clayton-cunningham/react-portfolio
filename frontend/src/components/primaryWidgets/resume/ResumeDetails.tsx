import { PageSection } from "../../generic/PageSection"
import "./ResumeDetails.less";
import { SkillComponent } from "./SkillComponent";

export const ResumeDetails = () => {


    return (
        <div className="resume">
            <div className="resumeHeader">
                <PageSection>
                    <h1>Clayton Cunningham</h1>
                    <h2>Full Stack Developer</h2>
                </PageSection>
            </div>
            <div className="resumeSkills">
                <PageSection>
                    <h3>Looking for a software developer position in New Jersey</h3>
                </PageSection>
            </div>
            <div>
                <SkillComponent />
            </div>
        </div>
    )
}