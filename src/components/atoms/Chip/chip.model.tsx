export type ChipProps = {
  title?: string;
  size?: string
  status?:
    | string
    | 'default'
    | 'active'
    | 'inactive'
    | 'small'
    | 'advanced'
    | 'premium'
    | "pending_payment"
    | "suspended"
    | "big"
  fullWidth?: boolean
}
