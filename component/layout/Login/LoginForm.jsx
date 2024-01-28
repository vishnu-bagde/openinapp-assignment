import React, { useContext, useState } from 'react'
import Button from '../../core/Button'
import Icon from '../../core/Icon'
import TextInput from '../../core/Input/Input'
import './login.scss'
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen'
import { LoginContext } from '../../../context/Login'
import loginData from '../../../data/login/login.json'

const LoginForm = ({ className }) => {
    const { loginHandler } = useContext(LoginContext)
    const { isMobile, isIpad } = useCheckMobileScreen()
    const [formState, setFormState] = useState({})
    const [errors, setErrors] = useState({})
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const onChange = (e) => {
        const { value, id } = e.target

        setFormState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const validate = () => {
        const err = {}
        let isValid = true

        if (!formState["formEmail"]) {
            err["formEmail"] = "Please enter an email address."
            isValid = false
        } else if (!emailRegex.test(formState["formEmail"])) {
            err["formEmail"] = "Please enter a valid email address."
            isValid = false
        } else {
            isValid = true
        }

        if (!formState["formPassword"]) {
            err["formPassword"] = "Please enter your password."
            isValid = false
        } else {
            isValid = true
        }

        setErrors(err)
        return isValid
    }

    const onLoginSubmit = (e) => {
        e.preventDefault()

        if (validate()) {
            loginHandler(true)
        }

    }

    return (
        <div className={className || ""}>
            <h2 className="fs--34 font--family font--bold color--black">
                {loginData?.formHeading}
            </h2>
            <span className="fs--16 font--family-lato font--normal color--black mt--5 display--block">{loginData?.formSubHeading}</span>
            <ul className="flex flex--align-items-center mt--30 mb--30">
                {
                    loginData?.socialBtn?.map((btn, index) => (
                        <li key={`login--form-${index}`} className={loginData?.socialBtn?.length !== index + 1 ? 'mr--25' : ''}>
                            <Button className="bg--white ">
                                <Icon icoName={btn?.icoName} paths={5} size={20} className="mr--15" />
                                <span className='font--normal color--grey'>
                                    {btn?.label}
                                </span>
                            </Button>
                        </li>
                    ))
                }
            </ul>

            <form onSubmit={(e) => onLoginSubmit(e)} className="pd--30 bg--radius-20 bg--white">
                <TextInput value={formState.formEmail} label={loginData?.formData?.emailHeading} type="email" id="formEmail" error={errors.formEmail} onChange={(e) => onChange(e)} className="pb--25" />
                <TextInput value={formState.formPassword} label={loginData?.formData?.passwordHeading} type="password" id="formPassword" error={errors.formPassword} onChange={(e) => onChange(e)} className="pb--25" />
                <button type="button" className="fs--16 font--family-lato color--blue-secondary mb--20">
                    {loginData?.formData?.forgotText}
                </button>
                <Button className="color--white bg--blue width--column-one" type="submit">
                    {loginData?.formData?.submitText}
                </Button>
            </form>

            <span className={`fs--18 font--family-lato font--normal color--grey font--center display--block mt--20`}>
                {loginData?.formData?.signupData?.label}
                <button className={`color--blue-secondary ${isMobile || isIpad ? 'display--block margin--auto mt--15' : ''}`}>&nbsp;{loginData?.formData?.signupData?.btnText}</button>
            </span>
        </div >
    )
}

export default LoginForm