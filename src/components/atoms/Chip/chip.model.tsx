export type ChipProps = {
  title: string
  size?: string
  status?:
    | string
    | 'default'
    | 'active'
    | 'inactive'
    | 'small'
    | 'advanced'
    | 'premium'
  fullWidth?: boolean
}
