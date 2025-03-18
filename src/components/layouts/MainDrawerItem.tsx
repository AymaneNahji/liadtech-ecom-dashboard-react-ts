import React from 'react'
import { NavLink } from 'react-router';

type Props = {
    icon?: React.ReactNode;
    title: string;
    path:string;
}

const MainDrawerItem = (props: Props) => {
    return (
        <NavLink to={props.path} className={({isActive})=>`flex flex-1 flex-nowrap items-center gap-2 p-3.5 pl-8 rounded-xl ${isActive?'!text-blue-600 [&>span]:!text-blue-600':''} `}>
            <span className='dark:text-slate-400'>
                {props.icon} 
            </span>   
            <div className="font-bold text-sm">
                {props.title}
            </div>
        </NavLink>
    )
}

export default MainDrawerItem