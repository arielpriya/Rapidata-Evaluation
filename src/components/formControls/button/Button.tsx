import React from 'react'
import './button.css'

type Props = {
  label: string
  onClick?: () => void
  children?: React.ReactNode;
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button className='button' onClick={props.onClick} >
      <div className='row displayBox'>
        <div>{props.label}</div>
        {props.children}

      </div>
    </button>
  )
}

export default Button