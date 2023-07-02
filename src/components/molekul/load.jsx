function Load() {
    return (
        <div className="flex justify-center items-center pt-[20%]">
            <div className="h-24 w-24 relative">
                <div className="animate-spin h-20 w-20 border-t-2 border-indigo-400 rounded-full"></div>
                <div className="animate-spin h-20 w-20 border-t-2 border-indigo-600 rounded-full absolute top-0 left-0"></div>
            </div>
        </div>
    );
}

export default Load;  