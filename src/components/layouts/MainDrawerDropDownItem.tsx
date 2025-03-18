import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router';

type Props = {
    icon?:React.ReactNode;
    title:string;
    items?:{
        title:string;
        path:string;
    }[];
    activeTitle?:string;
    setActiveTitle?:(val?:string)=>void;
}

const MainDrawerDropDownItem = (props :Props) => {

    // Determine if this item is open based on parent's activeId.
  const isOpen = props.activeTitle === props.title;

  const toggleOpening = async () => {
    if (!isOpen) {
      // Set this item as active (opens this dropdown and closes others)
      props.setActiveTitle?.(props.title);
    } else {
      // Close the item if it's already open
      props.setActiveTitle?.(undefined);
    }
  };


  return (
    <li className=" ">
        
        <span className="flex flex-nowrap gap-3.5 items-center pr-5 ">
            <div className={`w-1 h-8 rounded-r-lg transition-all ${isOpen?'bg-blue-600':''}`}></div>
            <div onClick={toggleOpening} className={`flex flex-1 flex-nowrap items-center gap-2 p-3.5 rounded-xl cursor-pointer ${isOpen?'bg-blue-900/25 !text-blue-600 [&>span]:!text-blue-600 ':''}`}>
                <span className='dark:text-slate-400'>
                    {props.icon} 
                </span> 
                <div className="font-bold text-sm">
                    {props.title}
                </div>
                <div className="flex-1"></div>
                <IoIosArrowDown className={`transition ${isOpen?'rotate-180':''}`} />
            </div>
        </span>
        <ul className={`list-[revert] pl-16 py-4 flex flex-col flex-nowrap gap-4 font-bold text-sm text-slate-600 dark:text-slate-400 transition-all ${isOpen?'':'max-h-0 !py-0 !my-0 opacity-0 overflow-hidden'}`}>
            {props.items?.map((item,index)=>(
                <NavLink key={index} to={item.path} className={({isActive})=>isActive?'text-blue-600':''}>
                    <li>
                        <div className="text">
                            {item.title}
                        </div>
                    </li>
                </NavLink>
            ))}
        </ul>
    </li>
  )
}

export default MainDrawerDropDownItem