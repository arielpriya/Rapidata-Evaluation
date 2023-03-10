import React from 'react'
import { ButtonWrapper } from './buttonStyle'

type Props = {
  label: string
  onClick?: () => void
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <ButtonWrapper onClick={props.onClick} >
      <div className='row displayBox'>
        <div>{props.label}</div>
        {props.children}

      </div>
    </ButtonWrapper>
  )
}

export default Button