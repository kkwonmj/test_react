import React from 'react';
import AuthFrom from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const RegisterPage = () => {
    return(
        <AuthTemplate>
            <AuthFrom type = "register" />
        </AuthTemplate>
    )
};

export default RegisterPage;