function TxtTopView({title}) {
    return (
        <div className="mt-10 mb-4 px-2 flex items-center justify-start font-bold lg:justify-center lg:my-6">
            <h3 className="text-white border-l-2 border-indigo-400 px-2 lg:text-2xl lg:border-b-2 lg:border-l-0 lg:pb-1">{title}</h3>
        </div>
    );
}

export default TxtTopView;