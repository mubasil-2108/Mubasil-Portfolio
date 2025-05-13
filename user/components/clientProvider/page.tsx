'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from '@/store/store';
import CheckAuthWrapper from '../common/check-auth-wrapper';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <CheckAuthWrapper>
                {children}
                <Toaster />
            </CheckAuthWrapper>
        </Provider>

    );
}
