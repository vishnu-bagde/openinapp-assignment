import React, { useState, useRef, memo, useCallback } from "react";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import './select.scss'
import { isEmpty } from "../../../service/commonServices";

const Select = ({ options, selectedOptions, changeHandler, value, className }) => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setOpen(false)
  });
  const toggleDropdown = () => {
    setOpen(!isOpen);
  };
  const handleItemClick = useCallback((id) => {
    setOpen(!isOpen);
    changeHandler(id);
  })
  return (
    <div ref={wrapperRef}  onClick={toggleDropdown} className={`${className || ""} flex flex--align-items-center select--container position--relative white--space-nowrap cursor--pointer bg--radius-10 ${isOpen ? 'open' : ''}`}>
      <span className={`width--column-one display--block font--normal color--black fs--16 font--family-figtree`}>
        {value}
      </span>
      {
        isOpen ?
          <ul className="select--list position--absolute white--space--nowrap width--column-one pd--10 bg--radius-10 bg--white">
            {options.map((list, i) =>
              <React.Fragment key={`${list}-${i}`}>
                <li className={`pd--10 bg--radius-10 ${options.length !== i+1 ? 'mb--5' : ''} ${!isEmpty(selectedOptions) ? selectedOptions.includes(list) ? "selected" : '' : ''}`} onClick={(e) => handleItemClick(list)} >
                  <span className={`font--normal color--black fs--16 font--family-figtree`}>{list}</span>
                </li>
              </React.Fragment>
            )}
          </ul>
          : ''
      }
    </div >
  )
}

export default Select;