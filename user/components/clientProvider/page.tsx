'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from '@/store/store';
import { BrowserRouter } from 'react-router-dom';
import CheckAuthWrapper from '../common/check-auth-wrapper';
import { useEffect, useState } from 'react';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {/* <BrowserRouter> */}
                <CheckAuthWrapper>
                    {children}
                    <Toaster />
                </CheckAuthWrapper>
            {/* </BrowserRouter> */}
        </Provider>

    );
}
