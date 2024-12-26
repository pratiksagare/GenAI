export default function Container({ children }) {
    return (
        <div className="flex justify-center w-full">
            <div className=" w-full max-w-[768px] px-4 border-black ">
                {children}
            </div>
        </div>
    )
}
