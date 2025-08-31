import { v4 } from "uuid"
export const generateUserID = () => {
  return v4()
}

export const generateSixDigits = () => {
  const sixDigits = Math.floor(Math.random() * 100000000)
  const turnToString = String(sixDigits)
  const slicedString = turnToString.slice(0,6)
  return Number(slicedString)
}