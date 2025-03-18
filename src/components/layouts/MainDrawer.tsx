import React from 'react'
import { RiMenuFold3Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

import { MdGridView } from "react-icons/md";
import MainDrawerDropDownItem from './MainDrawerDropDownItem';
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin, LuCircleHelp, LuHeadset, LuFileSearch, LuMapPin, LuSettings, LuImage, LuChartPie, LuShoppingCart } from "react-icons/lu";
import MainDrawerItem from './MainDrawerItem';
import { useDrawerStore } from '../../stores/drawerStore';
import MainDrawerSection from './MainDrawerSection';

/**
 * The Main drawer
 */

const MainDrawer = () => {
    const drawerStore = useDrawerStore()
    const [activeDropDownItemTitle, setActiveDropDownItemTitle] = React.useState<string>()
    return (
        <>
            {
                // backdrop drawer for tablets and down
                drawerStore.isOpen && (
                    <div onClick={()=>drawerStore.close()} className='lg:hidden absolute inset-0 bg-black/50 z-50'></div>
                )
            }
            <div className={`h-screen flex flex-col flex-nowrap bg-white dark:bg-slate-800 dark:shadow shadow-black z-50 absolute  lg:static transition-all max-w-[19rem] ${drawerStore.isOpen ? 'w-full ' : '!px-0 !mx-0 !w-0 overflow-hidden'}`}>
                <div className="flex h-20 flex-nowrap gap-2 justify-between items-center py-3.5 px-5 dark:shadow shadow-gray-400/30">
                    <a className='flex items-center gap-2 font-bold text-xl' href="/">
                        <img id="logo_header" alt="" src="https://remosnextjs.vercel.app/images/logo/logo.png" className='inline dark:hidden' />
                        <img id="logo_header" alt="" src="https://remosnextjs.vercel.app/images/logo/logo-dark.png" className='hidden dark:inline' />
                    </a>
                    {/* Opening toggle */}
                    <RiMenuFold3Line onClick={() => drawerStore.close()} size={25} className='hover:text-blue-600 dark:hover:text-blue-400 text-slate-400 cursor-pointer' />
                </div>
                <div className=' flex-1 overflow-auto pb-5'>
                    {/* Drawer content */}
                    <MainDrawerSection title='Main Home'>
                        <MainDrawerDropDownItem
                            activeTitle={activeDropDownItemTitle}
                            setActiveTitle={setActiveDropDownItemTitle}
                            icon={<MdGridView size={22} />}
                            title='Dashboard'
                            items={[
                                {
                                    path: '',
                                    title: 'Hello 01',
                                },
                                {
                                    path: 'hello',
                                    title: 'Hello 02',
                                },
                                {
                                    path: 'hello',
                                    title: 'Hello 03',
                                },
                                {
                                    path: 'hello',
                                    title: 'Hello 04',
                                },
                                {
                                    path: 'hello',
                                    title: 'Hello Boxed',
                                },
                                {
                                    path: 'hello',
                                    title: 'Hello Menu Icon Hover',
                                },
                                {
                                    path: 'hello',
                                    title: 'Hello Menu Icon Default',
                                },
                            ]}
                        />
                    </MainDrawerSection>
                    <MainDrawerSection title='All page'>
                        <MainDrawerDropDownItem
                            activeTitle={activeDropDownItemTitle}
                            setActiveTitle={setActiveDropDownItemTitle}
                            icon={<LuShoppingCart size={22} />}
                            title='Ecommerce'
                            items={[
                                {
                                    path: 'add-product/',
                                    title: 'Add Product',
                                },
                                {
                                    path: 'product-list/',
                                    title: 'Product List',
                                },
                                {
                                    path: 'product-detail/',
                                    title: 'Product Detail 1',
                                },
                            ]}
                        />
                        <MainDrawerItem
                            icon={<LuImage size={22} />}
                            title='Gallery'
                            path='gallery/'
                        />
                        <MainDrawerItem
                            icon={<LuChartPie size={22} />}
                            title='Report'
                            path='report/'
                        />
                    </MainDrawerSection>
                    <MainDrawerSection title='Setting'>
                        <MainDrawerDropDownItem
                            activeTitle={activeDropDownItemTitle}
                            setActiveTitle={setActiveDropDownItemTitle}
                            icon={<LuMapPin size={22} />}
                            title='Location'
                            items={[
                                {
                                    path: 'countries',
                                    title: 'Countries',
                                },
                                {
                                    path: 'states',
                                    title: 'States',
                                },
                                {
                                    path: 'cities',
                                    title: 'Cities',
                                }
                            ]}
                        />
                        <MainDrawerItem
                            icon={<LuSettings size={22} />}
                            title='Setting'
                            path='setting/'
                        />
                        <MainDrawerDropDownItem
                            activeTitle={activeDropDownItemTitle}
                            setActiveTitle={setActiveDropDownItemTitle}
                            icon={<FiEdit size={22} />}
                            title='Pages'
                            items={[
                                {
                                    path: 'countries',
                                    title: 'Countries',
                                },
                                {
                                    path: 'states',
                                    title: 'States',
                                },
                                {
                                    path: 'cities',
                                    title: 'Cities',
                                }
                            ]}
                        />
                    </MainDrawerSection>
                    <MainDrawerSection title='Support'>
                        <MainDrawerItem
                            icon={<LuCircleHelp size={22} />}
                            title='Help Center'
                            path='help-center/'
                        />
                        <MainDrawerItem
                            icon={<LuHeadset size={22} />}
                            title='FAQs'
                            path='faqs/'
                        />
                        <MainDrawerItem
                            icon={<LuFileSearch size={22} />}
                            title='Privacy policy'
                            path='privacy-policy/'
                        />
                    </MainDrawerSection>
                    <MainDrawerSection title='Connect us'>
                        <div className='flex flex-wrap gap-2 pl-5'>
                            <a target='_blank' href={import.meta.env.VITE_FACEBOOK_URL || '#FACEBOOK'} className='border text-slate-400 dark:text-white border-slate-500/30 rounded-xl p-3 hover:text-blue-600'>
                                <LuFacebook size={22} />
                            </a>
                            <a target='_blank' href={import.meta.env.VITE_TWITTER_URL || '#TWITTER'} className='border text-slate-400 dark:text-white border-slate-500/30 rounded-xl p-3 hover:text-blue-600'>
                                <LuTwitter size={22} />
                            </a>
                            <a target='_blank' href={import.meta.env.VITE_LINKEDIN_URL || '#LINKEDIN'} className='border text-slate-400 dark:text-white border-slate-500/30 rounded-xl p-3 hover:text-blue-600'>
                                <LuLinkedin size={22} />
                            </a>
                            <a target='_blank' href={import.meta.env.VITE_INSTAGRAM_URL || '#INSTAGRAM'} className='border text-slate-400 dark:text-white border-slate-500/30 rounded-xl p-3 hover:text-blue-600'>
                                <LuInstagram size={22} />
                            </a>
                        </div>
                    </MainDrawerSection>
                </div>
            </div>
        </>
    )
}



export default MainDrawer