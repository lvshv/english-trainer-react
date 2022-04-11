import React from 'react'
import { exerciseData } from 'data/exercises.js'
import { Routes, Route, Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const HomePage = () => {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <div className='page-body'>
      <div className='container'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Age'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
