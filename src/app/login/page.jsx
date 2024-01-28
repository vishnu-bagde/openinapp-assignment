"use client"

import React from 'react'
import Link from 'next/link'
import LoginForm from '../../../component/layout/Login/LoginForm'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'
import Icon from '../../../component/core/Icon'
import loginData from '../../../data/login/login.json'

const Login = () => {
  const { isMobile, isIpad } = useCheckMobileScreen()
  return (
    <>
      <section className={`position--relative container--fluid flex flex--direction-column ${isMobile || isIpad ? 'pt--25 pb--25' : 'height--one login--container pt--50 pb--50'}`}>
        <div className={`flex flex--align-items-center ${isMobile || isIpad ? '' : 'margin--auto-vertical'}`}>
          {
            isMobile || isIpad ?
              '' :
              <h1 className="font--center fs--70 font--family font--bold color--white width--column-two-0">
                {loginData?.heading}
              </h1>
          }
          <LoginForm className={isMobile || isIpad ? '' : `login--container-wrap width--column-four-0 margin--auto`} />
        </div>
        <ul className={`flex flex--align-items-center flex--justify-content-center ${isMobile || isIpad ? ' mt--50' : 'width--column-two-0'}`}>
          {
            loginData?.social_list?.map((social, index) => (
              <li key={`login--social-${index}`} className={loginData?.social_list?.length !== index + 1 ? 'mr--40' : ''}>
                <Link href={social?.link} target={social?.newTab ? "_blank" : "_self"}>
                  <Icon
                    size="45"
                    color={isMobile || isIpad ? "grey" : "white"}
                    icoName={social?.icoName}
                  />
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  )
}

export default Login
