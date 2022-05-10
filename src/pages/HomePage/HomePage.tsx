import React from 'react'
import { exerciseData } from 'data/exercises.js'
import { Routes, Route, Link } from 'react-router-dom'
import { Welcome } from 'components/ClassComponent'

interface Props {}

export const HomePage: React.FC<Props> = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid-cols-2'>
        {exerciseData.map((exercise, idx) => {
          return (
            <Link to={`/exercise/${idx}`} className='exerecise-card' key={`exercise-${idx}`}>
              <div className=''>Exercise {idx + 1}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
