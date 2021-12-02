export interface users {
  gender: string,
  name: {
    title: string,
    first: string,
    last: string
  },
  email: string,
  dob: {
    date: string,
    age: number
  },
  registered: {
    date: string,
    age: number
  },
  picture: {
    large: string
    medium: string
    thumbnail: string
  },
  nat: string
}
