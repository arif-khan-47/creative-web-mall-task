import { useState, useEffect } from 'react';
import PassengerCard from './PassengerCard';

const DataGrid = () => {
    const [records, setRecords] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [passengers, setPassengers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${pageSize}`);
            const data = await response.json();
            setRecords(data);
            setPassengers(data?.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNextPage = () => {
        setLoading(true)
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setLoading(true)
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
            {loading ?
                <div className='flex min-h-screen -mt-20'>
                    <div className='m-auto text-purple-800 animate-pulse font-bold italic text-2xl'>Loading...</div>
                </div>
                :

                <div className=''>
                    <div className='flex m-auto container justify-evenly lg:justify-around my-3'>
                        {currentPage === 1 ?
                            <div className='opacity-40 border-2 rounded-full w-20 lg:w-48 lg:text-xl text-center py-1 cursor-default font-semibold text-purple-800 bg-white border-purple-800'>
                                Previous
                            </div> :
                            <div onClick={handlePreviousPage} className='border-2 rounded-full w-20 lg:w-48 lg:text-xl text-center py-1 cursor-pointer font-semibold text-purple-800 bg-white border-purple-800 hover:bg-purple-800 hover:text-white duration-500 hover:scale-105'>
                                Previous
                            </div>
                        }

                        <div className='font-semibold my-auto'>{currentPage} / {records?.totalPages}</div>

                        {currentPage === records?.totalPassengers ?
                            <div className='opacity-40 border-2 rounded-full w-20 lg:w-48 lg:text-xl text-center py-1 cursor-default font-semibold text-purple-800 bg-white border-purple-800'>
                                Next
                            </div> :
                            <div onClick={handleNextPage} className='border-2 rounded-full w-20 lg:w-48 lg:text-xl text-center py-1 cursor-pointer font-semibold text-purple-800 bg-white border-purple-800 hover:bg-purple-800 hover:text-white duration-500 hover:scale-105'>Next</div>
                        }
                    </div>
                    <div className='m-auto container'>
                        {passengers && passengers.length > 0 && passengers.map((data, index) => (
                            <div key={index}>
                                <PassengerCard data={data}/>
                            </div>
                        ))}

                    </div>

                    <div className='bg-red-500 text-center italic'>
                        Total Passengers : {records?.totalPassengers}
                    </div>
                </div>
            }
        </>
    );
};

export default DataGrid;
