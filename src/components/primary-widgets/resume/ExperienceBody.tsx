import { Company } from "../../../assets/skillsResources";
import { Column } from "../../generic/Column";
import { Row } from "../../generic/Row";
import "./ResumeDetails.less";

export const ExperienceBody = (props: {id: string, company: Company}) => {

    const {id, company} = props;

    return (
        <>
            <div key={id + "_experience-body"} className="experience">
                <Column>
                    <h3>{company.title}</h3>
                    <Row>
                        <p>{company.location}  |  {company.dates}</p>
                    </Row>
                    {company.text.map((s: string) => {
                        return <p key={id + s.split(" ")[0]}>{s}</p>
                    })}
                </Column>
            </div>
        </>
    )
}