import getServerUser from '@/lib/getServerUser'
import React, { Suspense } from 'react'
import {Skeleton} from "@nextui-org/react";
import Category from '@/models/Category';
import connectDB from '@/lib/db';


const DashboardPage = async () => {
  return (
    <>
    <Suspense fallback={<WelcomeMsgFallback />}>
        <WelcomeMsg />
    </Suspense>
    <Suspense>
        <CollectionList />
    </Suspense>
    </>
  )
}

async function WelcomeMsg(){
    const user = await getServerUser()
    if(!user){
        return <div>Error</div>
    }
    return (
        <div>
            Welcome, <br />
            {user.email}
        </div>
    )
}
function WelcomeMsgFallback(){
    return(
        <div className='flex w-full'>
            <div className='text-3xl font-bold'>
            <Skeleton className="h-3 w-4/5 rounded-lg"/>
            </div>
        </div>
    )
}

async function CollectionList(){
    const user = await getServerUser()
    const userEmail = user.email
    console.log("User " + userEmail) 
    await connectDB()
    const categories = await Category.find({ creator: userEmail })
    if(categories.length === 0){
        return (
            <div>
                no categories yet
            </div>
        )
    }
}
export default DashboardPage