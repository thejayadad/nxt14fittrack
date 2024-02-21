import { getSingleExercise } from '@/lib/data';
import React from 'react'
import {Card, CardHeader, CardBody, Input, Textarea, Button, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { updateExercise } from '@/lib/action';


const ExercisePage = async ({params}) => {
  const { id } = params;
  const exercise = await getSingleExercise(id)
  console.log("Exercise " + exercise)
  return (
    <div>
       <Card className="max-w-screen-md mx-auto">
        <CardHeader className="flex gap-3">
            FitLog
        </CardHeader>
        <Divider/>
        <CardBody>
            <form
            action={updateExercise}
             className='flex flex-col items-center p-4 gap-6'
            >
                <div className='flex gap-4'>
                <Input
                    name='name'
                    defaultValue={exercise.name}
                />
                <Input
                type='date'
                    name='date'
                    defaultValue={exercise.date}
                />
                </div>
                <div className='flex gap-4'>
                <Input
                    name='duration'
                    defaultValue={exercise.duration}
                />
                <Input
                    name='distance'
                    defaultValue={exercise.distance}
                />
                </div>
                <Textarea
                    name='notes'
                    defaultValue={exercise.notes}
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

export default ExercisePage