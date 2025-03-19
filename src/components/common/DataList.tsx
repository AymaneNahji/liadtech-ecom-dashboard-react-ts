import React from 'react'

export type DataListColumn<T> = {
    label?: React.ReactNode;
    key: string | keyof T;
    render?: (row: T) => React.ReactNode
}


type Props<T> = {
    title: string;
    columns: DataListColumn<T>[];
    rows: T[];
    selectOptions?: { label: string; value: unknown }[];
}


const DataList = <T=unknown,>(props: Props<T>) => {
    return (
        <div className='flex flex-col rounded-xl bg-white dark:bg-slate-800 gap-4 p-6'>
            <div className='flex items-center justify-between gap-1'>
                <span className='text-xl font-bold dark:text-slate-400'>
                    {props.title}
                </span>
                {
                    props.selectOptions && (
                        <span className='text-gray-400 text-sm'>
                            View all
                        </span>
                    )
                }

            </div>
            <div className='overflow-auto'>
                <table className='min-w-full border-spacing-y-3.5 border-spacing-x-0 border-separate dark:text-slate-400'>
                    {
                        // render header only when we have at least one filled column label
                        props.columns.filter(col => !!col.label).length > 0 && (
                            <thead>
                                <tr className=''>
                                    {props.columns.map((col,index) => <th key={index} className='text-left '>{col.label}</th>)}
                                </tr>
                            </thead>
                        )
                    }

                    <tbody>
                        {
                            // dynamic row rendering with column key
                            props.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className='group'>
                                    {
                                        props.columns.map((col, colIndex) => {
                                            const cellContent = row[col.key as keyof T]
                                            return (
                                                <td key={colIndex} className={`${colIndex === 0 ? 'rounded-l-lg' : ''} ${colIndex === props.columns.length - 1 ? 'rounded-r-lg' : ''} overflow-hidden whitespace-nowrap p-2 font-normal group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition`}>
                                                    {/* give the customization render the priority on row value */}
                                                    {col.render ? col.render(row) : cellContent as React.ReactNode}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataList