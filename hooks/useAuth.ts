import { AuthenticationContext } from '@/app/context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const useAuth = () => {
    const { data, error, loading, setAuthState } = useContext(
        AuthenticationContext
    );

    const signin = async (
        {
            email,
            password,
        }: {
            email: string;
            password: string;
        },
        handleClose: () => void
    ) => {
        setAuthState({
            loading: true,
            data: null,
            error: null,
        });
        try {
            const response = await axios.post(
                'http://localhost:3000/api/auth/signin',
                {
                    email,
                    password,
                }
            );
            setAuthState({
                loading: false,
                data: response.data,
                error: null,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                loading: false,
                data: null,
                error: error.response.data.errorMessage,
            });
        }
    };
    const signup = async () => {};

    return {
        signin,
        signup,
    };
};

export default useAuth;