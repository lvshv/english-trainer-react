import React, { useRef, useEffect, useState } from 'react'
import { exerciseData } from 'data/exercises.js'
import { useParams } from 'react-router-dom'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Button from 'components/Button'
interface ISentence {
  rus: string
  eng: string
  showEng?: boolean
}

export const ExercisePage = () => {
  let params = useParams()
  const navigate = useNavigate()

  const [exercises, setExercises] = useState(exerciseData)
  const [translateMode, setTranslateMode] = useState(false)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (!params.exerciseId) {
      navigate('/')
    }
  }, [params])

  if (!params.exerciseId) {
    return <></>
  }

  const exerciseId = params.exerciseId

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

  const startTranslate = () => {
    setTranslateMode(true)
  }
  const checkTranslation = () => {
    const original = exercises[+exerciseId][0].eng.split(' ')
    console.log('🚀 ~ checkTranslation ~ original', original)
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }
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
            {!translateMode && (
              <Button className='button' onClick={startTranslate}>
                начать перевод
              </Button>
            )}
          </div>
          {translateMode && (
            <div>
              <span></span>
              <div>{exercises[+exerciseId][0].rus}</div>
              <textarea className='textarea' value={inputValue} onChange={onChange}></textarea>
              <Button className='button' onClick={checkTranslation}>
                отправить овтет
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
