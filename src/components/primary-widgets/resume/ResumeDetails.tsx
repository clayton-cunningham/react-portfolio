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
        <>
            <div className="resume">
                <PageSection className="page-header">
                    <div className="section-align">
                        <LeftAlign>
                            <div className="resume-header">
                                <LeftAlign>
                                    <h1>Hello, I'm</h1><h1 className="highlight">Clay</h1>
                                </LeftAlign>
                                <LeftAlign className="header-intro">
                                    <h2>I'm a</h2><h2 className="highlight">full stack</h2><h2 className="highlight">software developer</h2>
                                </LeftAlign>
                            </div>
                        </LeftAlign>
                        <LeftAlign>
                            <h3 className="description">
                                I enjoy programming at either end of the tech stack whether it's creating data models and optimizing database queries, 
                                or creating fluid digital experiences.
                                I've spent the past 5 years building my full stack experience, and am now
                                seeking a full time position where I can apply and expand my software development and problem solving skills.
                            </h3>
                        </LeftAlign>
                    </div>
                    <Row className="cert-row">
                        <a href={certificationLinks.ckad}><img className="cert-badge" src="./certifications/ckad_badge.png" /></a>
                        <a href={certificationLinks.ccp}><img className="cert-badge" src="./certifications/aws_ccp_badge.png" /></a>
                        <a href={certificationLinks.saa}><img className="cert-badge" src="./certifications/aws_saa_badge.png" /></a>
                    </Row>
                </PageSection>
            </div>
            <div className="resume">
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
                            {/* <LeftAlign>
                                <h2>Business:</h2>
                            </LeftAlign>
                            <DynamicRowList
                                childrenList={business.map(s => {
                                        return {
                                            id: s,
                                            component: <p className="pill">{s}</p>,
                                        }
                                    })}
                            /> */}
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
        </>
    )
}