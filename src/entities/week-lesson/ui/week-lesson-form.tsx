import { FC, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Box, Button, Slider, Typography } from '@mui/material'
import styled from '@emotion/styled'

import { LessonSelect } from 'entities/lesson'
import { WeekLessonInput } from 'shared/api'

//#region styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
//#endregion

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
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
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
        </div>

        <LessonSelect />

        <Box display='flex' gap='16px'>
          <Button onClick={onCancel}>Cancel</Button>

          <Button type='submit' variant='contained' fullWidth>
            {submitLabel}
          </Button>
        </Box>
      </Form>
    </FormProvider>
  )
}
