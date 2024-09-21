import { certificationLinks, languages, resumeCompanies, software } from "../../../assets/skillsResources.tsx";
import { DynamicRow } from "../../generic/DynamicRow";
import { PageSection } from "../../generic/PageSection"
import "./ResumeDetails.less";
import { ResumeCompany } from "./ResumeCompany.tsx";
import { Grid } from "../../generic/Grid.tsx";
import { DynamicRowList } from "../../generic/DynamicRowList.tsx";
import { Row } from "../../generic/Row.tsx";

export const ResumeDetails = () => {


    return (
        <div className="resume">
            <div className="resume-header">
                <PageSection>
                    <h1>Clayton Cunningham</h1>
                    <h2>Full Stack Developer</h2>
                </PageSection>
            </div>
            <PageSection>
                <h3>Looking for a software developer position in New Jersey</h3>
            </PageSection>
            <PageSection>
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
            </PageSection>
            <PageSection>
                <Row className="cert-row">
                    <a href={certificationLinks.ckad}><img className="cert-badge" src="./certifications/ckad_badge.png" /></a>
                    <a href={certificationLinks.ccp}><img className="cert-badge" src="./certifications/aws_ccp_badge.png" /></a>
                    <a href={certificationLinks.saa}><img className="cert-badge" src="./certifications/aws_saa_badge.png" /></a>
                </Row>
            </PageSection>
            <PageSection>
                <Grid
                    cells={[
                        // <h4>Certifications:</h4>,
                        // <DynamicRowList
                        //     childrenList={
                        //         [
                        //             {
                        //                 id: "cert-ckad",
                        //                 component: <img className="cert-badge" src="./certifications/ckad_badge.png"/>
                        //             },
                        //             {
                        //                 id: "cert-ccp",
                        //                 component: <img className="cert-badge" src="./certifications/aws_ccp_badge.png"/>
                        //             },
                        //             {
                        //                 id: "cert-saa",
                        //                 component: <img className="cert-badge" src="./certifications/aws_saa_badge.png"/>
                        //             },
                        //         ]
                        //     }
                        // />,
                        <h4>Langages:</h4>,
                        <DynamicRowList
                            childrenList={languages.map(l => {
                                    return {
                                        id: l,
                                        component: <p className="pill">{l}</p>,
                                    }
                                })}
                        />,
                        <h4>Software:</h4>,
                        <DynamicRowList
                            childrenList={software.map(s => {
                                    return {
                                        id: s,
                                        component: <p className="pill">{s}</p>,
                                    }
                                })}
                        />,
                    ]}
                />
            </PageSection>
        </div>
    )
}