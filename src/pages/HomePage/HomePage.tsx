import React from 'react'
import { exerciseData } from 'data/exercises.js'
import { Routes, Route, Link } from 'react-router-dom'
import { Welcome } from 'components/ClassComponent'

interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <div className='container mx-auto py-20'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2'>
        {exerciseData.map((exercise, idx) => {
          return (
            <Link
              to={`/exercise/${idx}`}
              className='card  bg-neutral text-neutral-content shadow-lg hover:-translate-y-1 transition-transform py-8'
              key={`exercise-${idx}`}
            >
              <div className='card-body items-center text-center text-lg'>Exercise {idx + 1}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
