"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'
import Logo from '../Header/Logo'

const LoginHeader = () => {
    const { isMobile, isIpad } = useCheckMobileScreen()
    const [headerHeight, setHeaderHeight] = useState(0)
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
            <header ref={headerRef} className={`position--fixed width--column-one container--fluid ${isMobile || isIpad ? 'bg--blue pt--25 pb--25' : 'pt--50 pb--50'}`}>
                <Logo width={isMobile || isIpad ? 35 : 80} height={isMobile || isIpad ? 35 : 80} hideName={!isMobile && !isIpad} secondLogo={true} />
            </header>

        </>
    )
}

export default LoginHeader