import React from 'react'

function Grid() {
    return (
        <div className='container mx-auto bg-gray-200 grid grid-cols-3 gap-2 max-w-sm mt-10 p-2 rounded'>
            <div className='bg-blue-800 rounded-sm text-center text-gray-50 h-10 col-start-2'>1</div>
            <div className='bg-blue-800 rounded-sm text-center text-gray-50 h-10'>2</div>
            <div className='bg-blue-800 rounded-sm text-center text-gray-50 h-10'>3</div>
            <div className='bg-blue-800 rounded-sm text-center text-gray-50 h-10 col-span-2'>4</div>
            <div className='bg-blue-800 rounded-sm text-center text-gray-50 h-10 col-start-2'>5</div>
            <div className='bg-blue-800 rounded-sm text-center text-gray-50 h-10 col-span-3'>6</div>
        </div>
    )
}





export default Grid
