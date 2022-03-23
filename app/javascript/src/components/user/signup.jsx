import React, { useEffect, useRef, useState } from 'react';
import { safeCredentials, handleErrors } from '@src/reusable/fetchHelper';
import styled from 'styled-components';
import { gsap } from "gsap";
import { motion } from 'framer-motion/dist/framer-motion';
import { validateEmail, validateUsername, validateMobile, validatePassword, validateAddress } from '@src/reusable/validation'
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../redux/actions/authenticate';

const SignUp = () => {
    const fields = ['Username', 'Email', 'Password', 'Address', 'Mobile Number'];
    const form = useRef(null);
    const history = useHistory();
    const q = gsap.utils.selector(form);
    const dispatch = useDispatch();

    const [isValid, setIsValid] = useState(false);
    const [inputValues, setInputValues] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        phone_number: '',
    })

    const inputFocus = (e) => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power2.out' } });
        const start = "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
        const end = "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";
        const line = e.target.nextSibling.querySelector('.elastic-line');
        const name = e.target.name;
        if (!e.target.value) {
            tl.fromTo(line, { attr: { d: start } }, { attr: { d: end }, ease: "power2.out", duration: 0.75 });
            tl.to(line, { attr: { d: start }, ease: "elastic.out(3, 0.5)" }, "<50%");
            tl.to(q(`.placeholder.${name}`), { y: -25, scale: 0.7, duration: 0.5, transformOrigin: "top left", ease: "power2.out" }, "<15%");
        }

    }

    const inputBlur = (e) => {
        const name = e.target.name;

        if (!e.target.value) {
            gsap.to(q(`.placeholder.${name}`), { y: 0, scale: 1, duration: 1, ease: "power2.out" });
        }
    }

    const inputValidate = e => {
        const { value, name } = e.target;

        if (name == 'Mobile') {
            setInputValues({ ...inputValues, phone_number: value });
        } else {
            setInputValues({ ...inputValues, [name.toLowerCase()]: value });
        }

        const line = e.target.nextSibling.querySelector('.elastic-line');
        const placeholder = q(`.placeholder.${name}`);
        const pass = () => colorize("#6391e8", line, placeholder);
        const fail = () => colorize("#FE8C99", line, placeholder);
        const original = () => colorize("#D1D4DA", line, placeholder);

        if (value) {
            let valid;

            switch (name) {
                case "Username":
                    valid = validateUsername(value);
                    if (valid) {
                        pass();
                    } else {
                        fail();
                    }
                    return submitValidate();
                case "Email":
                    valid = validateEmail(value);
                    if (valid) {
                        pass();
                    } else {
                        fail();
                    }
                    return submitValidate();
                case "Password":
                    valid = validatePassword(value);
                    if (valid) {
                        pass();
                    } else {
                        fail();
                    }
                    return submitValidate();
                case "Address":
                    valid = validateAddress(value);
                    if (valid) {
                        pass();
                    } else {
                        fail();
                    }
                    return submitValidate();
                case "Mobile":
                    valid = validateMobile(value);
                    if (valid) {
                        pass();
                    } else {
                        fail();
                    }
                    return submitValidate();
                default:
                    return;
            }
        }

        return original();
    }

    const submitValidate = () => {
        setTimeout(() => {
            const placeholders = form.current.querySelectorAll('label');
            for (const ele of placeholders) {
                if (ele.style.color !== 'rgb(99, 145, 232)') {
                    return setIsValid(false)
                }
            }
            return setIsValid(true);
        }, 750)

    }

    const createUser = () => {
        fetch('/api/users', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: inputValues,
            })
        }))
            .then(handleErrors)
            .then(data => {
                console.log(data.user)
                logIn();
            })
    }

    const logIn = () => {
        console.log('here')
        fetch('/api/sessions', safeCredentials({
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: inputValues.email,
                    password: inputValues.password,
                },
            })
        }))
            .then(handleErrors)
            .then(data => {
                dispatch(authenticate());
                history.push('/');
            })
    }

    const colorize = (color, line, placeholder) => {
        gsap.to(line, { stroke: color, duration: 0.75 });
        gsap.to(placeholder, { color: color, duration: 0.75 });
    }


    return (
        <StyledSignUp>
            <div className="details">
                <div className="header">
                    <h2 className="detail-title">Create your Samsung account</h2>
                    <p>Used for sign up and delivery notifications.</p>
                </div>


                <form className="form" ref={form}>
                    {fields.map((ele, i) => (
                        <div className="input-container" key={i}>
                            <label className={`placeholder ${ele.split(' ')[0]}`}>{ele}</label>
                            <input type="text" name={ele.split(' ')[0]} autoComplete="off" className="input"
                                onFocus={inputFocus}
                                onBlur={inputBlur}
                                onChange={inputValidate} />
                            <svg className="line-svg" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" strokeWidth="2" />
                            </svg>
                        </div>
                    ))}
                </form>
                <div className="submit">
                    {isValid ?
                        <motion.button className="btn-submit" whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}
                            onClick={createUser}>Sign Up</motion.button>
                        :
                        <button className="btn-disable">Sign Up</button>
                    }
                    <h4 className="switch">Already had an account?
                        <Link to="/user/login">
                            <span className='login'> Log in here!</span>
                        </Link>
                    </h4>
                </div>
            </div>


        </StyledSignUp>
    );
};

const StyledSignUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 150px);

    background: #F2F2F2;

    .checkout {
        align-self: flex-end;
    }


    .details {
        background: white;
        margin: 3rem 0;
        padding: 5rem 10% ;
        border-radius: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .header {
            text-align: center;
            color: #0074D4;
            margin-bottom: 2rem;

            h2 {
                font-size: 2rem;
            }

            p {
                margin-top: 0.3rem;
                font-size: 1.1rem;
                font-weight: lighter;
            }
        }
        

        .form {
            display: grid;
            /* flex-direction: column; */
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
            column-gap: 8rem;
            /* width: 50%; */
            margin-top: 1rem;

            .input-container {
                display: flex;
                flex-direction: column;
                position: relative;
                margin: 2rem 0;

                .placeholder {
                    font-size: 1.2rem;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    color: #757575;
                    pointer-events: none;
                    opacity: 0.7;
                }

                input {
                    width: 100%;
                    height: 2rem;
                    border: none;
                    outline: none;
                    color: grey;
                    font-size: 1.2rem;
                }

                svg {
                    transform: scale(0.8);
                    transform-origin: left;
                    position: absolute;
                    z-index: 1;
                    bottom: 0;
                    overflow: visible;
                }
            }
        }

        .submit {
            .btn-submit {
                margin-top: 2rem;
                padding: 1rem 0;
                width: 25rem;
                color: white;
                background: #0069E9;
                border-radius: 1rem;
            }   

            .btn-disable {
                margin-top: 2rem;
                padding: 1rem 0;
                width: 25rem;
                border-radius: 1rem;
                background: #BDBDBD;
                color: white;
                cursor: not-allowed;
            }

            .switch {
                margin: 2rem 0;
                font-weight: normal;

                h4 {
                    color: grey;
                }

                span {
                    color: #0074D4;
                    cursor: pointer;
                    margin-left: 0.5rem;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
        
    }


`

export default SignUp;