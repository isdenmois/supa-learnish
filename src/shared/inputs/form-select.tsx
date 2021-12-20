import { FC } from 'react'
import { useController } from 'react-hook-form'
import { Select } from 'shared/ui'

interface Props {
  name: string
  label: string
  defaultValue?: string
}

export const FormSelect: FC<Props> = ({ name, label, defaultValue, children }) => {
  const { field } = useController({ name, defaultValue })

  return (
    <Select label={label} value={field.value} onChange={field.onChange}>
      {children}
    </Select>
  )
}
