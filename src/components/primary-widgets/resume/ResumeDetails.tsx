import { certificationLinks, languages, resumeCompanies, software } from "../../../assets/skillsResources.tsx";
import { PageSection } from "../../generic/PageSection"
import "./ResumeDetails.less";
import { Grid } from "../../generic/Grid.tsx";
import { DynamicRowList } from "../../generic/DynamicRowList.tsx";
import { Row } from "../../generic/Row.tsx";
import { Column } from "../../generic/Column.tsx";
import { ExperienceHeader } from "./ExperienceHeader.tsx";
import { ExperienceBody } from "./ExperienceBody.tsx";
import { LeftAlign } from "../../generic/LeftAlign.tsx";

export const ResumeDetails = () => {


    return (
        <div className="resume">
            <PageSection>
                <div className="resume-header">
                        <h1>Clayton Cunningham</h1>
                        <h2>Full Stack Developer</h2>
                </div>
                <div className="description">
                    <h3>
                        Full Stack Developer at CoStar with experience programming solutions for C#, Javascript, Java, C, Python, JavaScript, HTML and Typescript 
                        seeking a full time position where I can apply and expand my software development and problem solving skills.
                    </h3>
                </div>
            </PageSection>
            <PageSection>
                <Row className="cert-row">
                    <a href={certificationLinks.ckad}><img className="cert-badge" src="./certifications/ckad_badge.png" /></a>
                    <a href={certificationLinks.ccp}><img className="cert-badge" src="./certifications/aws_ccp_badge.png" /></a>
                    <a href={certificationLinks.saa}><img className="cert-badge" src="./certifications/aws_saa_badge.png" /></a>
                </Row>
            </PageSection>
            <PageSection className="section-align">
                <LeftAlign>
                    <h1>Skills</h1>
                </LeftAlign>
                <div className="section-align-body">
                    <Column className="skills-section">
                        <LeftAlign>
                            <h2>Langages:</h2>
                        </LeftAlign>
                        <DynamicRowList
                            childrenList={languages.map(l => {
                                    return {
                                        id: l,
                                        component: <p className="pill">{l}</p>,
                                    }
                                })}
                        />
                        <LeftAlign>
                            <h2>Software:</h2>
                        </LeftAlign>
                        <DynamicRowList
                            childrenList={software.map(s => {
                                    return {
                                        id: s,
                                        component: <p className="pill">{s}</p>,
                                    }
                                })}
                        />
                    </Column>
                </div>
            </PageSection>
            <PageSection className="section-align">
                <LeftAlign>
                    <h1>Experience</h1>
                </LeftAlign>
                <div className="section-align-body">
                    <Grid
                        className="grid-with-logos"
                        cells={[
                            ...resumeCompanies.map((c) => 
                                {
                                    return [
                                        <ExperienceHeader id={c.id} company={c} />,
                                        <ExperienceBody id={c.id} company={c} />
                                    ]
                                }
                            ).reduce((acc, curr) => acc.concat(curr)),
                            <Row>
                                <div className="logo">
                                        <img src="vt.png"/>
                                </div>
                            </Row>,
                            <div>
                                <p>B.S., Computer Science; May 2019 | Minor, Chinese</p>
                                <p>Virginia Polytechnic Institute and State University - Blacksburg, VA</p>
                                <p>Dean’s List 2016, 2017 & 2018 | GPA: 3.4</p>
                            </div>
                        ]}
                    />
                </div>
            </PageSection>
        </div>
    )
}