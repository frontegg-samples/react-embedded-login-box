import React from 'react';
import {useAuthUser, useTenantsState, useAuthActions} from '@frontegg/react'
import {Route, Switch, useHistory} from "react-router-dom";

function UserInfo() {
    const user = useAuthUser();
    const tenantsState = useTenantsState();
    const { requestAuthorize } = useAuthActions();
    const history = useHistory();

    return (
        <div>
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
    </div>)
}

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path="/match" render={() => (<div>Match</div>)} />
                <Route component={UserInfo} />
            </Switch>
        </div>
    );
}

export default App;
