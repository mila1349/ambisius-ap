import Empty from "./icons/empty"

const NoData = () => {
    return (
     <div className=" flex justify-center items-center flex-col">
        <Empty/>
        <p className="text-gray-500 mt-4">No Data</p>
     </div>
    )
}

export default NoData
