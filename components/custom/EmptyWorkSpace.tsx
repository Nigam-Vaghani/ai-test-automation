import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'

function EmptyWorkSpace() {
    return (
        <div className='flex mt-10 flex-col items-center justify-center'>
            <Image src={'/repository.png'} alt='repo' height={100} width={100} />
            <h2 className='text-2xl font-medium mt-5 mb-4'>No Repository Connected!</h2>
            <p className='mx-10 text-center text-gray-500'>Connect your github account and Add repository to generate and run test cases</p>
            <Button className='mt-5 cursor-pointer'> <Link className='h-4 w-4 mr-2' /> Connect Repo</Button>
        </div>
    )
}

export default EmptyWorkSpace