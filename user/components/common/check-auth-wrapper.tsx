'use client';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CheckAuth from './check-auth';
import { checkAuth } from '@/store/auth-slice';
import { useAppSelector } from '@/store/hooks';

export default function CheckAuthWrapper({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useAppSelector((state) => state.auth);

    console.log("isAuthenticated", isAuthenticated);
    console.log("user", user);

   useEffect(() => {
        const fetchAuth = async () => {
            await dispatch(checkAuth() as any);
        };
        fetchAuth();
    }, [dispatch]);

    return (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            {children}
        </CheckAuth>
    );
}
