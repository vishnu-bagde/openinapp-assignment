"use client"
import React, { useEffect, useRef, useState } from 'react'
import './header.scss'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'
import Logo from './Logo'
import Nav from './Nav'
import Icon from '../../core/Icon'
import HeaderSetting from './HeaderSetting'
import Drawer from '../Modal/Drawer'

const Header = () => {
  const { isMobile, isIpad } = useCheckMobileScreen()
  const [headerHeight, setHeaderHeight] = useState(0)
  const [showMenu, setShowMenu] = useState(false)
  const headerRef = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const height = headerRef.current.offsetHeight
      setHeaderHeight(height)
    }
  }, [headerRef?.current?.offsetHeight])

  return (
    <>
      {isMobile || isIpad ? <div style={{ height: headerHeight }}></div> : ''}
      <header ref={headerRef} className={`bg--white  ${isMobile || isIpad ? 'position--fixed width--column-one flex flex--align-items-center flex--justify-content-between pt--25 pb--25 pl--20 pr--20' : 'pt--50 pb--50 pr--60 pl--30'}`}>
        {isMobile || isIpad ?
          <div className='flex flex--align-items-center'>
            <button onClick={() => setShowMenu(true)}>
              <Icon icoName="hamburger" size="20" color="black" className="mr--15" />
            </button>
            <Logo />
          </div>
          : ''
        }
        {isMobile || isIpad ?
          <HeaderSetting />
          :
          <>
            <Logo />
            <Nav onClick={() => {}} />
          </>
        }
      </header>
      {
        isMobile || isIpad ?
          <Drawer className="header--modal pt--30 pb--30 pl--20 pr--20" close={() => setShowMenu(false)} show={showMenu}>
            <div className="flex flex--align-items-center flex--justify-content-between">
              <Logo />
              <button onClick={() => setShowMenu(false)}>
                <Icon icoName="close" size="15" color="black" className="ml--15" />
              </button>
            </div>
            <Nav onClick={() => setShowMenu(false)} />
          </Drawer>
          : ''
      }
    </>
  )
}

export default Header