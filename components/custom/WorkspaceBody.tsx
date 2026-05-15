"use client"
import { UserDetailsContext } from '@/context/UserDetailsContext'
import Image from 'next/image'
import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import EmptyWorkSpace from './EmptyWorkSpace'

function WorkspaceBody() {
    const { userDetail } = useContext(UserDetailsContext)
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-medium'>Workspace</h2>
                <h2 className='text-blue-800 bg-blue-100 px-2 rounded-lg'>Remaining Creadits : {userDetail?.creadits}</h2>
            </div>
            <Card className='mt-5 justify-between flex items-center p-4 border rounded-lg'>
                <div className='flex items-center gap-5'>
                    <Image src={'/github.png'} alt='github' height={40} width={40} />
                    <h2 className='text-lg'>Connect Github & add repository</h2>
                </div>
                <div>
                    <Button className='cursor-pointer'>+ Add</Button>
                </div>
            </Card>

            <Card className='mt-10'>
                <CardContent>
                    <EmptyWorkSpace />
                </CardContent>
            </Card>
        </div>
    )
}

export default WorkspaceBody