import { FC } from 'react'
import { useController } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

type Props = Omit<TextFieldProps, 'onChange' | 'value'> & {
  name: string
  label: string
  defaultValue?: string
}

export const TextInput: FC<Props> = ({ name, label, defaultValue }) => {
  const { field } = useController({ name, defaultValue: defaultValue || '' })

  return <TextField label={label} variant='standard' {...field} />
}
