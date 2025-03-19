import ChartCard from "../components/common/ChartCard"
import { LuDollarSign, LuShoppingBag, LuFile, LuUsers } from "react-icons/lu";
import DataList from "../components/common/DataList";

const HomePage = () => {
    return (
        <div className='p-[30px] flex flex-col gap-[30px]'>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-y-[30px] gap-x-5">
                <ChartCard
                    title="Total Sales"
                    total="34,945"
                    advancementPercentage={1.56}
                    color="#22C55E"
                    icon={<LuShoppingBag size={25} />}
                />
                <ChartCard
                    title="Total Income"
                    total="$34,945"
                    advancementPercentage={-1.56}
                    color="#FF5200"
                    icon={<LuDollarSign size={25} />}
                />
                <ChartCard
                    title="Orders Paid"
                    total="34,945"
                    advancementPercentage={0}
                    color="#CBD5E1"
                    icon={<LuFile size={25} />}
                />
                <ChartCard
                    title="Total Visitor"
                    total="34,945"
                    advancementPercentage={1.56}
                    color="#2377FC"
                    icon={<LuUsers size={25} />}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-5">
                <div className="max-h-40">
                    <DataList<API.Product>
                        title="Top Products"
                        columns={[
                            {
                                label: '',
                                key: '',
                                render(row) {
                                    return (
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <img src={row.image} alt="" className="size-10" />
                                                <div className="flex flex-col ">
                                                    <span className="text-xl truncate">
                                                        {row.name}
                                                    </span>
                                                    <span>
                                                        {row.count} items
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                },
                            },
                            {
                                label: '',
                                key: 'couponCode',
                                render(row) {
                                    return (
                                        <div>
                                            <div className="flex flex-col ">
                                                <span className="text-xs ">
                                                    Coupon Code
                                                </span>
                                                <span>
                                                    {row.couponCode}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                },
                            },
                            {
                                label: '',
                                key: 'country',
                                render(row) {
                                    return (
                                        <img src={row.country} className="size-5" alt="" />
                                    )
                                },
                            },
                            {
                                label: '',
                                key: 'advencement',
                                render(row) {
                                    return (
                                        <div>
                                            <div className="flex flex-col ">
                                                <span >
                                                    {row.advencement}%
                                                </span>
                                                <span className="text-xs ">
                                                    ${row.totalRevenue.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                },
                            },
                        ]}
                        rows={Array.from({ length: 10 }).map(() => ({
                            name: 'Patimax Fragrance Long hair',
                            image: 'https://remosnextjs.vercel.app/images/products/1.png',
                            couponCode: 'Sflat',
                            country: 'https://remosnextjs.vercel.app/images/country/2.png',
                            advencement: -15,
                            totalRevenue: 27,
                            count: 100
                        }))}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage