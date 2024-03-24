import { Roboto } from 'next/font/google'

const rubik = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '100'
})

export const fonts = {
  rubik,
}