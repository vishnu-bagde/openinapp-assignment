import React from 'react'
import "./input.scss"

const TextInput = ({ label, className, value, error, onChange, type, id }) => {
  return (
    <div className={`form--group position--relative ${className || ""}`}>
      
      <label
        htmlFor={id} className='mb--10 fs--16 font--family-lato display--block'>
          {label}
      </label>
      
      <input 
        id={id} 
        value={value || ""} 
        type={type || "text"}
        onChange={onChange}
        className='font--family-lato fs--16 font--normal width--column-one width--column-one bg--grey-light pt--15 pb--15 pr--20 pl--20 bg--radius-10' 
      />

      {
        error ?
          <span className="position--absolute error fs--12 color--error font--family font--normal">{error}</span>
          : ''
      }

    </div>
  )
}

export default TextInput