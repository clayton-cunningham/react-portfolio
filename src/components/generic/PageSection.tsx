import { Column } from "./Column";
import "./generic.less";

export const PageSection = (props: any) => {

    const {children} = props;

    return (
        <div className="section">
            <Column>
                {children}
            </Column>
        </div>
    )
}