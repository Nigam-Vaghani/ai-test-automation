// import { UserButton } from '@clerk/nextjs'
// import Image from 'next/image'
// import React from 'react'

// function WorkspaceHeader() {
//   return (
//     <div className='flex w-full justify-between p-4'>
//       <Image src={'/logo.svg'} alt='logo' height={200} width={200} />
//       <ul className='flex gap-5 text-xl'>
//         <li className='hover:text-[#0e7fe3] cursor-pointer'>Workspace</li>
//         <li className='hover:text-[#0e7fe3] cursor-pointer'>pricing</li>
//         <li className='hover:text-[#0e7fe3] cursor-pointer'>support</li>
//       </ul>
//       <UserButton />
//     </div>
//   )
// }

// export default WorkspaceHeader


import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <header className='w-full border-b bg-white shadow-sm'>

      <div className='max-w-7xl mx-auto flex items-center justify-between px-8 py-4'>

        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src={'/logo.svg'}
            alt='logo'
            height={120}
            width={120}
            className='object-contain'
          />
        </div>

        {/* Navigation */}
        <ul className='flex items-center gap-10 text-[18px] font-medium text-gray-700'>

          <li className='cursor-pointer hover:text-[#c2f002] transition-all duration-300'>
            Workspace
          </li>

          <li className='cursor-pointer hover:text-[#c2f002] transition-all duration-300'>
            Pricing
          </li>

          <li className='cursor-pointer hover:text-[#c2f002] transition-all duration-300'>
            Support
          </li>
        </ul>

        {/* User */}
        <div className='scale-110'>
          <UserButton />
        </div>

      </div>

    </header>
  )
}

export default WorkspaceHeader