function TxtTopView({title}) {
    return (
        <div className="mt-10 mb-4 px-2 flex items-center justify-start font-bold lg:px-36 lg:my-6">
            <h3 className="text-white border-l-2 border-indigo-400 px-2 lg:text-2xl">{title}</h3>
        </div>
    );
}

export default TxtTopView;