import React from 'react';
import {useAuthUser, useTenantsState, useAuthActions} from '@frontegg/react'
import { useHistory } from "react-router-dom";

function App() {
    const user = useAuthUser();
    const tenantsState = useTenantsState();
    const { requestAuthorize } = useAuthActions();
    const history = useHistory();
    // const { user, isAuthenticated } = useAuth(); // Use this to avoid redirect to /account/login

    return (
        <div className='App'>
            <div>
                <img src={user?.profilePictureUrl} alt={user?.name}/>
            </div>
            <div>
                <span>Logged in as: {user?.name}</span>
            </div>
            <div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
            </div>
            <div>
                <button onClick={() => alert(JSON.stringify(tenantsState.tenants))}>Show my tenants</button>
            </div>
            <div>
                <button onClick={() => requestAuthorize()}>Refresh my authentication</button>
            </div>
            <div>
                <button onClick={() => history.push('/account/logout')}>Click me to logout</button>
            </div>
        </div>
    );
}

export default App;
