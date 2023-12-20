'use client'

import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { ReactElement } from 'react'

import { SafeUser } from '@/app/types'

//  npx prisma db push synchronize the prisma schema with de database schema (migrate schema to db)

interface NavBarProps {
  currentUser?: SafeUser | null, // User defined in prisma schema (after run the migration -> npx prisma db push)
}

function Navbar({ currentUser }: NavBarProps): ReactElement {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='
      py-4
      border-b-[1px]
      '>
        <Container>
          <div
            className='
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0'
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>

      </div>
    </div>
  )
}

export default Navbar