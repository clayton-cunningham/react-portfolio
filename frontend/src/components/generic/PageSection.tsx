import "./generic.less";

export const PageSection = (props: any) => {

    const {children} = props;

    return (
        <div className="section">
            {children}
        </div>
    )
}