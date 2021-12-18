import { FC } from 'react'
import { FormControl, InputLabel, Select as MSelect } from '@mui/material'

interface Props {
  label: string
  value: string | number
  onChange(newValue: string | number): void
  defaultValue?: string
}

export const Select: FC<Props> = ({ label, value, onChange, children }) => {
  const onSelect = ({ target }: any) => {
    onChange(target.value)
  }
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MSelect value={value} label={label} onChange={onSelect}>
        {children}
      </MSelect>
    </FormControl>
  )
}
