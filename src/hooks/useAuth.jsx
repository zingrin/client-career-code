import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContexts/AuthContexts';

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo
};

export default useAuth;