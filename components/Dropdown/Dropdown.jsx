export default function Dropdown(props){
    return(
        <div className="bg-white absolute z-20 -left-5 m-3 py-3 px-4 shadow-md w-[170px] rounded-md ">
            <div className="flex flex-col gap-2 text-sm">
                <p className=" cursor-pointer">{props.First}</p>
                <hr />
                <p className=" cursor-pointer">{props.Second}</p>
            </div>
        </div>
    )
}