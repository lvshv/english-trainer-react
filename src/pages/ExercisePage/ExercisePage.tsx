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

  const exerciseId: string = params.exerciseId

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
    const original = exercises[+exerciseId][0].eng.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').split(' ')
    const input = inputValue.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').split(' ')
    for (var i = 0; i < original.length; i++) {
      const word = original[i]
      if (input.indexOf(word) >= 0) {
        // console.log(word + ' is a bad')
      } else {
        console.log(word + ' is good!!!')
      }
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <main className='container mx-auto py-10'>
      <Link to='/' className='btn btn-link mb-10'>
        <div>Назад</div>
      </Link>
      <div className=''>
        <div className='text-xl mb-4'>Exercise {+exerciseId + 1}.</div>
        <div>
          {exercises[+exerciseId].map((el: ISentence, idx) => {
            return (
              <div key={`s-${idx}`} className=''>
                <div onClick={handlerShowRus({ exerciseIdx: exerciseId, idx })} className='text-lg mb-2 cursor-pointer'>
                  {idx + 1}. {el['rus']}
                </div>

                {el.showEng && (
                  <div className='text-lg mb-2'>
                    {/* {idx + 1}.  */}
                    {el['eng']}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {!translateMode && (
          <Button className='btn my-8' onClick={startTranslate}>
            начать перевод
          </Button>
        )}
      </div>
      {translateMode && (
        <div>
          <span></span>
          <div>{exercises[+exerciseId][0].rus}</div>
          <textarea
            className='textarea'
            placeholder='Your translation'
            value={inputValue}
            onChange={onChange}
          ></textarea>
          <Button className='button' onClick={checkTranslation}>
            отправить овтет
          </Button>
        </div>
      )}

      {exercises[+exerciseId + 1] && (
        <Link to={`/exercise/${+exerciseId + 1}`} className='btn btn-link'>
          <div>Следующее</div>
        </Link>
      )}
    </main>
  )
}
