import React from 'react'
import headerData from '../../../data/header.json'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Icon from '../../core/Icon'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'

const Nav = ({onClick}) => {
    const pathName = usePathname()
    const { isMobile, isIpad } = useCheckMobileScreen()

    return (
        <nav className='mt--50'>
            <ul>
                {
                    headerData.nav.map((link, index) => (
                        <li key={`header--nav-${index}`} className={headerData?.nav?.length == index + 1 ? '' : 'mb--40'}>
                            <Link href={link.link} className={`color--${pathName == link.link ? 'blue' : 'grey'} flex flex--align-items-center`} onClick={() => onClick()}>
                                <Icon icoName={link.icoName} size={20} className="mr--15" />
                                <span className={`fs--${isMobile || isIpad ? 18 : 16} font--family-nunito font--semibold`}>{link.label}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav