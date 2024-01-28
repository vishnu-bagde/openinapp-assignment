import React from 'react'
import Icon from '../../core/Icon'
import Image from 'next/image'

const HeaderSetting = () => {
    return (
        <div className="flex align-items-center">
            <button className="mr--25 flex flex--align-items-center">
                <Icon className="flex flex--align-items-center" icoName="bell" size={30} />
            </button>
            <Image src="/assets/images/profile.webp" width={30} height={30} alt="openinapp" />
        </div>
    )
}

export default HeaderSetting