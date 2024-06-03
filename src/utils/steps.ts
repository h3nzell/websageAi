import register from 'assets/images/registration.png'
import copy from 'assets/images/copy.png'
import code from 'assets/images/code.png'

type TData = {
  id: number
  img: string
  text: string
  title: string
}

const stepsData: TData[] = [
  {
    id: 1,
    img: register,
    title: 'Register',
    text: 'Add some details',
  },
  {
    id: 2,
    img: copy,
    title: 'Get your code',
    text: 'Copy this JS code and paste it into your HTML',
  },
  {
    id: 3,
    img: code,
    title: 'Put in your website html',
    text: 'Past this JS code  it into your HTML, if needs we will help do it easily and fast',
  },
]

export default stepsData
