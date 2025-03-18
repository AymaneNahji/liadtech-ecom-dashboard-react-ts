import { RiMenuFold4Line } from 'react-icons/ri'
import { LuSearch, LuSettings, LuMessageSquare, LuBell, LuScan } from "react-icons/lu";
import { MdGridView } from "react-icons/md";
import { useDrawerStore } from '../../stores/drawerStore';
import ThemeToggle from '../common/ThemeToggle';


const MainHeader = () => {
    const drawerStore = useDrawerStore()
  return (
    <div className='w-full h-20 flex gap-5 items-center px-5 bg-white dark:bg-slate-800 sticky top-0 dark:shadow shadow-gray-400/50'>
                    {
                        !drawerStore.isOpen && (
                            <>
                                <a className='flex items-center gap-2 font-bold text-xl' href="/">
                                    <img id="logo_header" alt="" src="https://remosnextjs.vercel.app/images/logo/logo.png" className='inline dark:hidden' />
                                    <img id="logo_header" alt="" src="https://remosnextjs.vercel.app/images/logo/logo-dark.png" className='hidden dark:inline' />
                                </a>
                                <RiMenuFold4Line size={25} onClick={() => drawerStore.open()} className='text-blue-600 cursor-pointer' />
                            </>
                        )
                    }

                    <div className='hidden lg:flex items-center gap-5 flex-1'>
                        {/* Seach input */}
                        <fieldset className="border border-gray-600/50 rounded-xl px-5.5 py-3.5 flex-1 flex items-center gap-1" >
                            <input placeholder="Search here..." className="outline-0 text-sm flex-1" aria-required="true" required type="text" name="name" />
                            <LuSearch />
                        </fieldset>
                        
                        <ThemeToggle />

                        {/* Notifications popup btn */}
                        <div className='rounded-full relative bg-slate-200 dark:bg-slate-600/50 p-2 cursor-pointer hover:bg-slate-400/50 dark:hover:bg-slate-900/50'>
                            <span className='absolute flex -top-1 -right-1'>
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative text-white inline-flex items-center justify-center text-xs size-4 rounded-full bg-orange-500">
                                    1
                                </span>
                            </span>
                            <LuBell size={20} />
                        </div>
                        {/* Messages popup btn */}
                        <div className='rounded-full relative bg-slate-200 dark:bg-slate-600/50 p-2 cursor-pointer hover:bg-slate-400/50 dark:hover:bg-slate-900/50'>
                            <span className='absolute flex -top-1 -right-1'>
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative text-white inline-flex items-center justify-center text-xs size-4 rounded-full bg-blue-500">
                                    1
                                </span>
                            </span>
                            <LuMessageSquare size={20} />
                        </div>
                        {/* Scan btn */}
                        <div className='rounded-full bg-slate-200 dark:bg-slate-600/50 p-2 cursor-pointer hover:bg-slate-400/50 dark:hover:bg-slate-900/50'>
                            <LuScan size={20} />
                        </div>
                        {/* Related apps popup btn */}
                        <div className='rounded-full bg-slate-200 dark:bg-slate-600/50 p-2 cursor-pointer hover:bg-slate-400/50 dark:hover:bg-slate-900/50'>
                            <MdGridView size={20} />
                        </div>
                    </div>

                    <div className='flex-1 lg:hidden'></div>

                    <LuSettings size={25} className='animate-spin-slow' />
                </div>
  )
}

export default MainHeader