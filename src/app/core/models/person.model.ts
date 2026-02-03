export interface Person {
  documentType: string | null,
  documentNumber: string | null,
  firstName: string | null,
  lastname: string | null,
  gender: string | null,
  expeditionDate: string | null,
  email: string | null,
  phoneNumber: string | null,
  secondName?: string | null,
  secondLastname?: string | null,
  birthDate?: string | null,
  stature?: string | null,
  weight?: string | null,
  id?: number | null
}
