import { NavLink } from 'react-router'

const NotFoundPage = () => {
  return (
    <div className='h-screen flex justify-center gap-2 items-center flex-col flex-nowrap'>
        <h1 className='text-4xl'>
            404 | Not Found
        </h1>
        <NavLink to={'/'} className={"hover:underline underline-offset-4 text-blue-500 font-bold"}>
            Go To Home
        </NavLink>
    </div>
  )
}

export default NotFoundPage