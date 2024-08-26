import "./generic.less";

export const Column = (props: any) => {

    const {children} = props;

    return (
        <div className="column">
            {children}
        </div>
    )
}