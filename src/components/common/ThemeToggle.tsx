import { LuSun ,LuMoon} from "react-icons/lu";
import { useThemeStore } from '../../stores/themeStore';

/**
 * The Main Dark/Light mode toggle
 */

const ThemeToggle = () => {

    const themeStore = useThemeStore()

  return (
    <div onClick={()=>themeStore.toggleTheme()} className='rounded-full bg-slate-200 dark:bg-slate-600/50 p-2 cursor-pointer hover:bg-slate-400/50 dark:hover:bg-slate-900/50'>
        {
            themeStore.isDark?(
                <LuSun size={20} />
            ):(
                <LuMoon size={20} />
            )
        }
    </div>
  )
}

export default ThemeToggle