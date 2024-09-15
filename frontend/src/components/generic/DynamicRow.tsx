import "./generic.less";
import { Row } from "./Row";

export const DynamicRow = (props: any) => {

    const {childrenList} = props;
    const classNameSuffix = props.className ? " " + props.className : "";

    return (
        <div className={"dynamic-row" + classNameSuffix}>
            <Row>
                {childrenList.map((c: any) => 
                    <div key={c.id} className="dynamic-row-cell">
                        {c.component}
                    </div>
                )}
            </Row>
        </div>
    )
}