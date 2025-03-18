import React from 'react'

const HomePage = () => {
    return (
        <>
            {
                Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className='bg-red-500'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quidem similique illo, in a ad quos debitis ipsa est mollitia hic consectetur natus, provident beatae? Perspiciatis aut repudiandae odio tempore.
                    </div>
                ))
            }
        </>
    )
}

export default HomePage