import "./generic.less";

export const Row = (props: any) => {

    const {children} = props;

    return (
        <div className="row">
            {children}
        </div>
    )
}