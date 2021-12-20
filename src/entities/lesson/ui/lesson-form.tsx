import { useWatch } from 'react-hook-form'
import { MenuItem } from '@mui/material'
import { FormSelect, TextInput } from 'shared/inputs'

export const LessonForm = () => {
  const type = useWatch({ name: 'lesson.create.type', defaultValue: 'Plain' })

  return (
    <>
      <FormSelect label='Type' name='lesson.create.type' defaultValue='Plain'>
        <MenuItem value='Link'>Link</MenuItem>
        <MenuItem value='YouTube'>YouTube</MenuItem>
        <MenuItem value='PDF'>PDF</MenuItem>
        <MenuItem value='Plain'>Plain</MenuItem>
      </FormSelect>

      <TextInput name='lesson.create.description' label='Description' />
      {type !== 'Plain' && <TextInput name='lesson.create.link' label='Link' />}
      <TextInput name='lesson.create.note' label='Note' />
    </>
  )
}
