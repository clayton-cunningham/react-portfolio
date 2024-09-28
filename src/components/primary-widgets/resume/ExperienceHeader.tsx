import { Company } from "../../../assets/skillsResources";
import { Row } from "../../generic/Row";
import "./ResumeDetails.less";

export const ExperienceHeader = (props: {id: string, company: Company}) => {

    const {id, company} = props;

    return (
        <>
            <div key={id + "_experience-header"}>
                <Row>
                    <div className="logo">
                        <img className="logo" src={company.logoSrc}/>
                    </div>
                </Row>
            </div>
        </>
    )
}