import { resumeCompanies } from "../../../assets/skillsLists.tsx";
import { DynamicRow } from "../../generic/DynamicRow";
import { PageSection } from "../../generic/PageSection"
import "./ResumeDetails.less";
import { ResumeCompany } from "./ResumeCompany.tsx";

export const ResumeDetails = () => {


    return (
        <div className="resume">
            <div className="resumeHeader">
                <PageSection>
                    <h1>Clayton Cunningham</h1>
                    <h2>Full Stack Developer</h2>
                </PageSection>
            </div>
            <div className="placeHolderName">
                <PageSection>
                    <h3>Looking for a software developer position in New Jersey</h3>
                </PageSection>
            </div>
            <DynamicRow
                childrenList={resumeCompanies.map((c) => 
                    {
                        return {
                            id: c.id,
                            component: <ResumeCompany id={c.id} company={c} />
                        }
                    }
                )}
            />
        </div>
    )
}