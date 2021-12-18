import { FC, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Box, Button, Slider, Typography } from '@mui/material'

import { LessonSelect } from 'entities/lesson'
import { WeekLessonInput } from 'shared/api'

interface Props {
  defaultValues: any
  submitLabel: string
  onCancel(): void
  onSubmit(data: WeekLessonInput): void
}

export const WeekLessonForm: FC<Props> = ({ defaultValues, submitLabel, onCancel, onSubmit }) => {
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

        <LessonSelect />

        <Box display='flex'>
          <Button onClick={onCancel}>Cancel</Button>

          <Button type='submit' variant='contained'>
            {submitLabel}
          </Button>
        </Box>
      </form>
    </FormProvider>
  )
}
