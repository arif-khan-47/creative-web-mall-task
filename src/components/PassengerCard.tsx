import Image from 'next/image'
import React from 'react'

function PassengerCard({ data }: any) {
    console.log(data)
    return (
        <div className='bg-blue-300 my-2 mx-5 lg:mx-0 p-2 hover:bg-purple-800 cursor-pointer hover:border-white hover:text-white border-purple-800 border rounded-lg'>
            <div>
                <div className='font-bold'>
                    Name: {data.name}
                </div>
                <div className='font-bold'>
                    Trips: <span className='font-normal'>{data.trips}</span>
                </div>

                {data?.airline && data?.airline.length > 0 && data?.airline.map((item: any, index: number) => (
                    <div key={index}>
                        <div className='font-bold'>
                            Airline: <span className='font-normal'>{item.name}</span>
                        </div>
                        <div className='font-bold'>
                            Established: <span className='font-normal'>{item.established}</span>
                        </div>
                        <div className='font-bold'>
                            Head Quaters: <span className='font-normal'>{item.head_quaters}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PassengerCard
