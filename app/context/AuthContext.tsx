'use client';
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useState, createContext, SetStateAction, useEffect } from 'react';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    phone: string;
    email: string;
}

interface State {
    loading: boolean;
    data: User | null;
    error: string | null;
}

interface AuthState extends State {
    setAuthState: React.Dispatch<SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
    loading: false,
    data: null,
    error: null,
    setAuthState: () => {},
});

export default function AuthContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const [authState, setAuthState] = useState<State>({
        loading: true,
        data: null,
        error: null,
    });

    const fetchUser = async () => {
        setAuthState({
            loading: true,
            data: null,
            error: null,
        });
        try {
            const jwt = getCookie('jwt');
            if (!jwt) {
                return setAuthState({
                    loading: true,
                    data: null,
                    error: null,
                });
            }
            const response = await axios.get(
                'http://localhost:3000/api/auth/me',
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );

            axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

            setAuthState({
                loading: false,
                data: response.data,
                error: null,
            });
        } catch (error: any) {
            setAuthState({
                loading: false,
                data: null,
                error: error.response.data.errorMessage,
            });
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
            {children}
        </AuthenticationContext.Provider>
    );
}
