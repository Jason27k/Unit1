import React from 'react'
import {
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent
} from './ui/card'

import {
  Button
} from './ui/button'


function Item({ team, image, description, link }) {
  if (image)
    console.log(image);
  return (
    <>
        <div className='mt-10 h-4/5'>
          <img src={image} alt={team} className='h-96 w-96 object-cover mx-auto'/>
          <Card className="rounded-t-none rounded-b-2xl">
            <CardHeader>
              <CardTitle className="text-center font-bold">{team}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center center">
              <p className="text-center text-lg font-bold">{description}</p>
              <Button className='mx-auto mt-4'>
                <a href={link}>National Team Page</a>
              </Button>
            </CardContent>
          </Card>
        </div>
    </>
  )
}

export default Item