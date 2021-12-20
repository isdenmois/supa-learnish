import { FC } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import { useForm } from 'react-hook-form'

import { Lesson, LessonInput } from 'shared/api'

interface Props {
  defaultValues: Partial<Lesson>
  onSubmit(data: LessonInput): Promise<void>
}

export const LessonFormCard: FC<Props> = ({ defaultValues, onSubmit }) => {
  const form = useForm<LessonInput>({ defaultValues })
  const submit = form.handleSubmit(onSubmit)

  return (
    <form onSubmit={submit}>
      <Card>
        <CardHeader
          action={
            form.formState.isSubmitting ? (
              <CircularProgress />
            ) : (
              <IconButton aria-label='settings' onClick={submit}>
                <DoneIcon />
              </IconButton>
            )
          }
          title={<TextField label='Description' variant='standard' {...form.register('description')} />}
        />
        <CardContent>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel>Type</InputLabel>
            <Select defaultValue={defaultValues.type} {...form.register('type')} label='Type'>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Link'>Link</MenuItem>
              <MenuItem value='YouTube'>YouTube</MenuItem>
              <MenuItem value='PDF'>PDF</MenuItem>
              <MenuItem value='Plain'>Plain</MenuItem>
            </Select>
          </FormControl>

          <TextField label='Link' variant='standard' {...form.register('link')} />
          <TextField label='Note' variant='standard' {...form.register('note')} />
        </CardContent>
      </Card>
    </form>
  )
}
