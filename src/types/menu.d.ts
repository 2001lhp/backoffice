export type MenuResponseType = {
  name: string
  path: string
  icon: string
  requiresAuth: boolean
  createData: string
  description: string
  id: number
  permissions: string[]
  children?: MenuResponseType[]
}
