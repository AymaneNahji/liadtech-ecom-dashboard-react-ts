
type Props = {
    title?: string;
    children?: React.ReactNode;
}

const MainDrawerSection = (props: Props) => {
    return (
        <div className="">
            <div className="font-bold uppercase text-[#bdcfd3] text-xs pl-8 pt-4 pb-2.5">
                {props.title}
            </div>
            <ul className="">
                {props.children}
            </ul>
        </div>
    )
}

export default MainDrawerSection