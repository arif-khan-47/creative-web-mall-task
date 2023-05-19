import DataGrid from '@/components/DataGrid'


export default function Home() {
  return (
    <>
    <div className='bg-blue-400 min-h-screen'>
      <div className='bg-purple-800 text-center py-4 lg:py-8 lg:text-4xl text-white font-bold italic rounded-b-3xl'>
        List of Passengers with Airline Detail
      </div>
      <DataGrid/>
    </div>
    </>
  )
}
