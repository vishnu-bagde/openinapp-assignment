import React, { memo } from 'react'

const Icon = memo(({ paths, icoName, size, color, className, onClick }) =>{
  return (
    <>
     <i className={`oia-${icoName} fs--${size} ${color ? `color--${color}` : ''} ${className ? className : ''}`} onClick={onClick}>
        {Array.apply(null, { length: parseInt(paths) }).map((e, i) =>
          <span className={'path' + (i + 1)} key={i}></span>
        )}
      </i>
    </>
  )
})

export default Icon;
