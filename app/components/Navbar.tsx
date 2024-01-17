import React from 'react'
import Link from 'next/link'
import {MantineProvider } from '@mantine/core';
import { Card, Menu, Button, Text, rem } from '@mantine/core';
import {  Image, Badge, Group } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

export default function Navbar () {
  return (
    

    // <h1 className='font-bold'>RN</h1>
    
    <div className='flex space-x-12 font-bold bg-black text-white pt-4 pb-4  mx-auto justify-end '>
    
      {/* <h1 className='font-bold'>RN</h1> */}
      
    <Link href="/" className='hover:text-blue-500 hover:translate-y-1 transition-transform duration-300'>Home</Link>
     <Link href="/about" className='hover:text-blue-500 hover:translate-y-1 transition-transform duration-300'>About</Link>
     <Link href="/news" className='hover:text-blue-500 hover:translate-y-1 transition-transform duration-300'>News</Link>
     <Link href="/watch" className='hover:text-blue-500 hover:translate-y-1 transition-transform duration-300'>Watch</Link>
     
     <Link href="/contact" className='hover:text-blue-500 hover:translate-y-1 transition-transform duration-300'>Contact</Link>
     
     <div className='flex space-x-12 justify-center'>

     </div>

        
        <MantineProvider>
      
      
      
     <Link href="/account">
      <Button variant="filled" color="rgba(18, 184, 43, 1)" radius="xl" className='mr-4 hover:text-blue-500 hover:translate-y-1 transition-transform duration-300' >Account
      </Button>
     </Link>
     
     

          </MantineProvider>

          </div>
  )
}

