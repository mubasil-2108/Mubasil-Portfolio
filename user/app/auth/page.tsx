"use client";
import React, { useEffect, useState } from 'react';
import { TbLockPassword } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import OtpInput from 'react-otp-input';
import styled from 'styled-components';
import { IoArrowBackOutline } from 'react-icons/io5';
import { forgetPassword, loginUser, registerUser, sendOtp, verifyOtp } from '@/store/auth-slice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';

const initialState = {
    email: '',
    password: '',
}

const Auth = () => {
    const [form, setForm] = useState('login');
    const [otp, setOtp] = useState('');
    const [verification, setVerification] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isMounted) return;

        if (form === 'login') {
            await dispatch(loginUser(formData)).then((data) => {
                if (data?.payload?.success) {
                    toast.success(data?.payload?.message)
                    setFormData(initialState)
                    router.push('/admin');
                } else {
                    toast.error(data?.payload?.message)
                }
            })
        }

        if (form === 'signup') {
            if (formData.password !== confirmPassword) {
                toast.error('Password and Confirm Password do not match')
                return;
            }
            await dispatch(registerUser(formData)).then((data) => {
                if (data?.payload?.success) {
                    toast.success(data?.payload?.message)
                    setFormData(initialState)
                    setForm('login')
                    setConfirmPassword('')
                } else {
                    toast.error(data?.payload?.message)
                }
            })
        }

        if (form === 'forgotPassword') {
            if (formData.password !== confirmPassword) {
                toast.error('Password and Confirm Password do not match')
                return;
            }

            if (!verification) {
                await dispatch(sendOtp(formData.email)).then((data) => {
                    if (data?.payload?.success) {
                        toast.success("OTP sent successfully");
                        setForm('otp');
                        window.history.pushState(null, '', '#otp');
                    } else {
                        toast.error(data?.payload?.error);
                    }
                })
            } else {
                await dispatch(forgetPassword(formData)).then((data) => {
                    if (data?.payload?.success) {
                        toast.success(data?.payload?.message)
                        setFormData(initialState)
                        setForm('login')
                        setConfirmPassword('')
                        window.history.pushState(null, '', '');
                    } else {
                        toast.error(data?.payload?.message)
                    }
                })
            }
        }

        if (form === 'otp') {
            await dispatch(verifyOtp({ email: formData.email, otp })).then((data) => {
                if (data?.payload?.success) {
                    toast.success(data?.payload?.message);
                    setForm('forgotPassword');
                    setVerification(true);
                    window.history.pushState(null, '', '#forgetPassword');
                } else {
                    toast.error(data?.payload?.message);
                }
            })
        }
    }

    const renderForm = () => {
        switch (form) {
            case 'login':
                return (
                    <form id='login' className="form">
                        <p id="heading">Login</p>
                        <div className="field">
                            <HiOutlineMail color='rgb(0, 255, 200)' size={24} />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}
                                className="input-field"
                                placeholder="Email" />
                        </div>
                        <div className="field">
                            <TbLockPassword color='rgb(0, 255, 200)' size={24} />
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                                className="input-field"
                                placeholder="Password" />
                        </div>
                        <div className="btn">
                            <button onClick={onSubmit} type="submit" className="button1">Login</button>
                            <button type="button" className="button2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.history.pushState(null, '', '#signup');
                                    setForm('signup')
                                }}>Sign Up</button>
                        </div>
                        <button type="button" className="button3 w-[100%]"
                            onClick={(e) => {
                                e.preventDefault();
                                window.history.pushState(null, '', '#forget');
                                setForm('forgotPassword')
                            }}>Forgot Password</button>
                    </form>
                );
            case 'signup':
                return (
                    <form id='signup' className="form">
                        <div className='w-full flex items-center'>
                            <IoArrowBackOutline
                                onClick={(e) => {
                                    e.preventDefault();
                                    setForm('login')
                                    window.history.pushState(null, '', '#login');
                                }}
                                className='cursor-pointer'
                                color='rgb(0, 255, 200)' size={24} />
                            <p id="heading" className='flex-1'>Sign Up</p>
                        </div>
                        <div className="field">
                            <HiOutlineMail color='rgb(0, 255, 200)' size={24} />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}
                                className="input-field"
                                placeholder="Email" />
                        </div>
                        <div className="field">
                            <TbLockPassword color='rgb(0, 255, 200)' size={24} />
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    password: e.target.value
                                })}
                                className="input-field"
                                placeholder="Password" />
                        </div>
                        <div className="field">
                            <TbLockPassword color='rgb(0, 255, 200)' size={24} />
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="input-field"
                                placeholder=" Confirm Password" />
                        </div>
                        <div className=" py-10">
                            <button onClick={onSubmit} type="submit" className="button1 w-full">Register</button>
                        </div>
                    </form>
                );
            case 'forgotPassword':
                return (
                    <form id='forgot' className="form">
                        <div className='w-full flex items-center'>
                            <IoArrowBackOutline
                                onClick={(e) => {
                                    e.preventDefault();
                                    setForm('login')
                                    window.history.pushState(null, '', '#login');
                                }}
                                className='cursor-pointer'
                                color='rgb(0, 255, 200)' size={24} />
                            <p id="heading" className='flex-1'>Reset Password</p>
                        </div>
                        <div className="field">
                            <HiOutlineMail color='rgb(0, 255, 200)' size={24} />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    email: e.target.value
                                })}
                                className="input-field"
                                placeholder="Email" />
                        </div>
                        {
                            verification && (
                                <>
                                    <div className="field">
                                        <TbLockPassword color='rgb(0, 255, 200)' size={24} />
                                        <input
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => setFormData({
                                                ...formData,
                                                password: e.target.value
                                            })}
                                            className="input-field"
                                            placeholder="Password" />
                                    </div>
                                    <div className="field">
                                        <TbLockPassword color='rgb(0, 255, 200)' size={24} />
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="input-field"
                                            placeholder=" Confirm Password" />
                                    </div>
                                </>
                            )
                        }
                        <div className="py-10">
                            <button onClick={onSubmit} type="submit" className="button1 w-full">Send OTP</button>
                        </div>
                    </form>
                );
            case 'otp':
                return (
                    <form className="form">
                        <div className='w-full flex items-center'>
                            <IoArrowBackOutline
                                onClick={(e) => {
                                    e.preventDefault();
                                    setForm('login')
                                    window.history.pushState(null, '', '#login');
                                }}
                                className='cursor-pointer'
                                color='rgb(0, 255, 200)' size={24} />
                            <p id="heading" className='flex-1'>Enter OTP</p>
                        </div>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span className='text-white'>-</span>}
                            inputStyle={{
                                width: '2rem',
                                height: '2rem',
                                margin: '0 0.5rem',
                                fontSize: '1rem',
                                borderRadius: 4,
                                border: '1px solid rgb(0, 255, 200)',
                                color: 'rgb(0, 255, 200)',
                            }}
                            inputType='text'
                            renderInput={(props) => <input {...props} />}
                        />
                        <div className="py-10">
                            <button onClick={onSubmit} type="submit" className="button1 w-full">Verify OTP</button>
                        </div>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-center '>
            <div className='w-[25%] z-[100]'>
                <StyledWrapper>
                    <div className="card">
                        <div className="card2">
                            {renderForm()}
                        </div>
                    </div>
                </StyledWrapper>
            </div>
        </div>
    );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 20px;
  }

  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(0, 255, 200);
    font-size: 1.2em;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: rgb(0, 255, 200);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: rgb(0, 255, 200);
  }

  .form .btn {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 2.5em;
  }

  .button1 {
    padding: 0.5em;
    padding-left: 1.1em;
    padding-right: 1.1em;
    border-radius: 5px;
    margin-right: 0.5em;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
  }

  .button1:hover {
    background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
    color: rgb(0, 255, 200);
  }

  .button2 {
    padding: 0.5em;
    padding-left: 1.3em;
    padding-right: 1.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
  }

  .button2:hover {
    background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
    color: rgb(0, 255, 200);
  }

  .button3 {
    margin-bottom: 3em;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    color: rgb(0, 0, 0);
  }

  .button3:hover {
    background-image: linear-gradient(163deg, #a00000fa 0%, #d10050 100%);
    color: rgb(255, 255, 255);
  }

  .card {
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 22px;
    transition: all .3s;
  }

  .card2 {
    border-radius: 0;
    transition: all .2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }`;


export default Auth;
