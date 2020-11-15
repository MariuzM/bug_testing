import { Checkbox, Button as CButton } from '@chakra-ui/react'
// import { Checkbox, Button as CButton } from '@chakra-ui/core'

export const Button = () => {
  return (
    <>
      <CButton>Button</CButton>
      <br />
      <br />
      <Checkbox defaultIsChecked>Checkbox</Checkbox>
    </>
  )
}
