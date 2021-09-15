import React from 'react';
import Layout from './Components/Layout/index';
import NoSearch from './Components/NoSearch/index';
import Profile from './Components/Profile/index';
import Repositories from './Components/Repositories/index';
import useGitHub from './Hooks/index';



const App = () => {
  const {gitState} = useGitHub();  
  return (
    <Layout>
      {gitState.hasUser ? (
        <>
        {gitState.loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
        </>
      ): (<NoSearch />)}
    </Layout>
       
  );
};

export default App;
