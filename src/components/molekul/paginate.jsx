function Paginate({ handlePrev, handleNext, currentPage, hasNextPage}) {
    return (
        <div className='mt-10 flex justify-center'>
            <div className="flex items-center text-center text-white">
                <button type='button' className='bg-indigo-400 w-16 py-1' onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
                <div className='bg-indigo-400 w-16 py-1 border-2 border-white'>{currentPage}</div>
                <button type='button' className='bg-indigo-400 w-16 py-1' onClick={handleNext} disabled={!hasNextPage}>Next</button>
            </div>
        </div>
    );
}

export default Paginate;