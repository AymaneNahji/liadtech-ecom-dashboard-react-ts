import ChartCard from "../components/common/ChartCard"
import { LuDollarSign, LuShoppingBag,LuFile,LuUsers } from "react-icons/lu";

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

        </div>
    )
}

export default HomePage