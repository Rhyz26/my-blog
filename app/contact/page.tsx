"use client"
import React from 'react'
import { Image } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import {isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import {NumberInput} from '@mantine/core';
import { BackgroundImage, Center, Text } from '@mantine/core';





export default function Contact() {

  


  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      subject: isNotEmpty('Enter your subject'),
      email: isEmail('Invalid email'),
      message: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid message'),
      
    },
  });

    return (
      
   <MantineProvider>

<div>




<Box maw={900} mx="auto">
      <BackgroundImage
        src="
https://ichef.bbci.co.uk/news/640/cpsprodpb/1320E/production/_101105387_f2405343-5a61-4fbf-8d68-e6c95a0d219c.jpg"
        radius="sm"
      >
        <Center p="md">
          <Text c="white">
           
          
          
          <h1 className='text-center font-bold pb-4 text-lg'>GET IN TOUCH</h1>
  <p className='text-center pb-4'>Lets Work together</p>

<Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      
      <TextInput
        label="Subject"
        placeholder="Your Subject"
        withAsterisk
        mt="md"
        {...form.getInputProps('subject')}
      />
       <TextInput
        size="xl"
        label="Message"
        placeholder=""
        withAsterisk
        mt="md"
        {...form.getInputProps('message')}
      />
      
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box>

          
          
          
          
          </Text>
        </Center>
      </BackgroundImage>
    </Box>




  {/* <h1 className='text-center font-bold pb-4 text-lg'>GET IN TOUCH</h1>
  <p className='text-center pb-4'>Lets Work together</p>

<Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <TextInput label="Name" placeholder="Name" withAsterisk {...form.getInputProps('name')} />
      
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      
      <TextInput
        label="Subject"
        placeholder="Your Subject"
        withAsterisk
        mt="md"
        {...form.getInputProps('subject')}
      />
       <TextInput
        size="xl"
        label="Message"
        placeholder=""
        withAsterisk
        mt="md"
        {...form.getInputProps('message')}
      />
      
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </Box> */}

</div>



    

          </MantineProvider>   

      

    
    )
}



