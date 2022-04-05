import React from 'react'
import { exerciseData } from 'data/exercises.js'
import { Routes, Route, Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='page-body'>
      <div className='container'>
        <div className='exerecises-wrapper'>
          {exerciseData.map((exercise, idx) => {
            return (
              <Link to={`/exercise/${idx}`} className='exerecise-card' key={`exercise-${idx}`}>
                <div className=''>Exercise {idx + 1}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
