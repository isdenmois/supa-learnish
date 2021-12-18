import { FC, useMemo } from 'react'
import { FormProvider, useController, useForm, useWatch } from 'react-hook-form'
import { Box, Button, MenuItem, Slider, Typography } from '@mui/material'

import { useLessonsQuery, WeekLessonInput } from 'shared/api'
import { FormSelect, TextInput } from 'shared/inputs'
import { Select } from 'shared/ui'

interface Props {
  initialValues: any
  onCancel(): void
  onSubmit(data: WeekLessonInput): void
}

export const WeekLessonForm: FC<Props> = ({ initialValues, onCancel, onSubmit }) => {
  const defaultValues: WeekLessonInput = useMemo(
    () => ({
      ...initialValues,
      lesson: initialValues.lesson?._id ? { connect: initialValues.lesson._id } : { create: {} },
    }),
    [],
  )
  const form = useForm<WeekLessonInput>({ defaultValues })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Typography gutterBottom>Duration</Typography>

        <Slider
          defaultValue={defaultValues.duration}
          {...form.register('duration', { valueAsNumber: true })}
          valueLabelDisplay='auto'
          step={5}
          marks
          min={0}
          max={60}
        />

        <LessonSelector />

        <Box display='flex'>
          <Button onClick={onCancel}>Cancel</Button>

          <Button type='submit' variant='contained'>
            Add
          </Button>
        </Box>
      </form>
    </FormProvider>
  )
}

const LessonSelector: FC = () => {
  const [{ data }] = useLessonsQuery()
  const { field } = useController({ name: 'lesson' })

  const selected = field.value?.connect || 'create'
  const onChange = (value: string) => {
    if (value === 'create') {
      field.onChange({ create: {} })
    } else {
      field.onChange({ connect: value })
    }
  }

  const lessons = data?.lessons.data || []

  return (
    <>
      <Select label='Lesson' value={selected} onChange={onChange}>
        <MenuItem value='create'>Create a new lesson</MenuItem>

        {lessons.map(lesson => (
          <MenuItem key={lesson._id} value={lesson._id}>
            {lesson.description}
          </MenuItem>
        ))}
      </Select>

      {selected === 'create' && <LessonCreateForm />}
    </>
  )
}

const LessonCreateForm = () => {
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
