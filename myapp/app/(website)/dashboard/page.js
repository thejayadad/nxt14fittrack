import { getExercises } from '@/lib/data'
import Link from 'next/link'
import React, { Suspense } from 'react'


const DashboardPage = async () => {
return (
    <>
    <Suspense fallback={<div>Loading Exercises...</div>}>
        <ExerciseList />
    </Suspense>
    </>
)
  
}

async function ExerciseList(){
    const exercises = await getExercises()

    return (
      <div>
       {exercises.length === 0 ? (
        <p>No exercises posted.</p>
      ) : (
        <div>
          {exercises.map(exercise => (
            <div key={exercise.id}>
              {/* Render ExerciseAccordion component for each exercise */}
              <div className='mb-4 p-8 border hover:bg-gray-100'>
                <div className='flex justify-between'>
                    <p>
                        <Link href={`/dashboard/exercise/${exercise.id}`}>
                            {exercise.name}
                        </Link>
                    </p>

                </div>
            </div>
            </div>
          ))}
        </div>
      )}
      </div>

    )
}

export default DashboardPage