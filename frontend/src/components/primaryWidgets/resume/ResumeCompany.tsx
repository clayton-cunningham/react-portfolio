import { Company } from "../../../assets/skillsLists";
import { Column } from "../../generic/Column";
import "./ResumeDetails.less";

export const ResumeCompany = (props: {id: string, company: Company}) => {

    const {id, company} = props;

    return (
        <>
            <Column key={id + "_resume-company"} className="resume-company">
                <img className="logo" src={company.logoSrc}/>
                <h3>{company.title}</h3>
                <p>{company.location}</p>
                <p>{company.dates}</p>
                {company.text.map((s: string) => {
                    return <p key={id + s.split(" ")[0]}>{s}</p>
                })}
            </Column>
        </>
    )
}