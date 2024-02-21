import React from 'react'
import {Card, CardHeader, CardBody, Input, Textarea, Button, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { addExercise } from '@/lib/action';


const NewExercise = () => {
  return (
    <div>
        <Card className="max-w-screen-md mx-auto">
        <CardHeader className="flex gap-3">
            FitLog
        </CardHeader>
        <Divider/>
        <CardBody>
            <form
            action={addExercise}
             className='flex flex-col items-center p-4 gap-6'
            >
                <div className='flex gap-4'>
                <Input
                className='w-full'
                    placeholder='Name...'
                    name='name'
                />
                <Input
                type='date'
                    name='date'
                />
                </div>
                <div className='flex gap-4'>
                <Input
                    placeholder='Duration...'
                    name='duration'
                />
                <Input
                type='distance'
                    name='distance'
                    placeholder='Distance...'
                />
                </div>
                <Textarea
                    placeholder='Notes...'
                    name='notes'
                />
                <Button 
                type='submit'
                className='bg-primary'
                >Post Exercise</Button>
          </form>
        </CardBody>
        </Card>
    </div>
  )
}

export default NewExercise