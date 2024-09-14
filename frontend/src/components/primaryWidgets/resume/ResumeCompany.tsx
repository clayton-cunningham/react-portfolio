import { Company } from "../../../assets/skillsLists";
import "./ResumeDetails.less";

export const ResumeCompany = (props: {id: string, company: Company}) => {

    const {id, company} = props;

    return (
        <>
            <div key={id + "_resumeCompany"}>
                <h3>{company.title}</h3>
                <p>{company.location}</p>
                <p>{company.dates}</p>
                {company.text.map((s: string) => {
                    return <p key={id + s.split(" ")[0]}>{s}</p>
                })}
            </div>
        </>
    )
}