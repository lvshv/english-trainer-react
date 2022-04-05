import React, { useRef, useState } from 'react'
import { exerciseData } from 'data/exercises.js'
import { useParams } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'

interface ISentence {
  rus: string
  eng: string
  showEng?: boolean
}

export const ExercisePage = () => {
  let params = useParams()

  const [exercises, setExercises] = useState(exerciseData)

  const handlerShowRus = ({ exerciseIdx, idx }: { exerciseIdx: any; idx: any }) => {
    return () => {
      const newState = JSON.parse(JSON.stringify(exercises))
      let sentence = newState[exerciseIdx][idx]
      if (sentence.showEng) {
        sentence.showEng = false
      } else {
        sentence.showEng = true
      }
      setExercises(newState)
    }
  }
  if (!params.exerciseId) return <></>
  const exerciseId = params.exerciseId
  return (
    <main className='main'>
      <div className='page-body'>
        <div className='container'>
          {/* {exercises.map((exersice, exerciseIdx) => {
            return ( */}
          <div className='exercise-wrapper'>
            <Link to='/'>
              <div>Назад</div>
            </Link>
            <div className='exercise-title'>Exercise {+exerciseId + 1}.</div>
            <div>
              {exercises[+exerciseId].map((el: ISentence, idx) => {
                return (
                  <div key={`s-${idx}`} className='sentence-wrapper'>
                    <div onClick={handlerShowRus({ exerciseIdx: exerciseId, idx })} className='sentence-item'>
                      {idx + 1}. {el['rus']}
                    </div>

                    {el.showEng && (
                      <div className='sentence-item eng'>
                        {/* {idx + 1}.  */}
                        {el['eng']}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          {/* )
          })} */}
        </div>
      </div>
    </main>
  )
}
