import React from 'react'
import Icon from '../../core/Icon'

const Tag = ({ className, tagName, onClick }) => {
  return (
    <li className={`${className || ''} tag bg--radius-5 flex flex--align-items-center pt--10 pb--10 pr--15 pl--15 bg--blue`}>
        <span className="fs--12 font--family-figtree font--semibold color--white">
            {tagName}
        </span>
        <button className='ml--10' onClick={() => onClick(tagName)}>
            <Icon icoName="close" color="white" size={12} className="font--light" />
        </button>
    </li>
  )
}

export default Tag