import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'

const Logo = ({ hideName, secondLogo, width, height }) => {
    const { isMobile, isIpad } = useCheckMobileScreen()
    return (
        <Link href="/" className='flex flex--align-items-center'>
            <Image src={`/assets/images/${secondLogo ? 'logo' : 'logo_primary'}.svg`} width={width ? width : isMobile || isIpad ? 35 : 45} height={height ? height : isMobile || isIpad ? 35 : 45} alt='logo' />
            {
                !hideName ?
                    <span className={`fs--24 font--semibold font--family color--${secondLogo ? 'white' : 'black-secondary'} display--block ml--15`}>Base</span>
                    : ''
            }
        </Link>
    )
}

export default Logo