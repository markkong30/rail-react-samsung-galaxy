import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ notificationProps, username }) => {
    const { status, component } = notificationProps;

    useEffect(() => {
        notify(status, component);
    }, [])

    const notify = (status, component) => {
        let promise;
        let errorMessage;
        let pendingMessage;
        let successMessage;

        if (component == 'signup') {
            pendingMessage = 'Creating account...'
            errorMessage = 'Username or email already exists.'
            successMessage = `Welcome ${username}. \n Redirecting...`
        } else if (component == 'login') {
            pendingMessage = 'Logging in...'
            errorMessage = 'Invalid email or password.'
            successMessage = `Welcome back ${username}. \n Redirecting...`
        } else if (component == 'checkout') {
            pendingMessage = 'Pending...'
            errorMessage = 'Username or email already exists.'
            successMessage = `Order created. \n Redirecting to payment...`
        }

        if (status == 'success') {
            promise = new Promise(resolve => setTimeout(resolve, 3000));
        } else if (status == 'fail') {
            promise = new Promise((resolve, reject) => setTimeout(reject, 3000));
        }


        toast.promise(
            promise,
            {
                pending: pendingMessage,
                success: successMessage,
                error: errorMessage,

            },
        )
    }

    return (
        <StyledNotification>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </StyledNotification>
    );
};

const StyledNotification = styled.div`
    .Toastify__toast-body {
        white-space: pre-line;
    }
`

export default Notification;


