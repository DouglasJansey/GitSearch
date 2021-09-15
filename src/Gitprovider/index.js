import { createContext, useCallback, useState } from "react";
import gitApi from "../Services";

export const GitContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [gitState, setGitState] = useState({
        hasUser: false,
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],

    });
    const getUser = (username) => {
        setGitState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        gitApi
            .get(`users/${username}`)
            .then(({ data }) => {
                setGitState((prevState) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));

            })
            .finally(() => {
                setGitState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    };
    const getRepos = (username) => {
        gitApi.get(`users/${username}/repos`).then(({ data }) => {
            console.log("data:" + JSON.stringify(data));
            setGitState((prevState) => ({ ...prevState, repositories: data, }));
        })

    };
    const getStarred = (username) => {
        gitApi.get(`users/${username}/starred`)
            .then(({ data }) => {
                console.log("data" + JSON.stringify(data));
                setGitState((prevState) => ({
                    ...prevState,
                    starred: data,
                }));
            });

    }

    const contextValue = {
        gitState,
        getUser: useCallback((username) => getUser(username), []),
        getRepos: useCallback((username) => getRepos(username), []),
        getStarred: useCallback((username) => getStarred(username), []),

    }
    return (
        <GitContext.Provider value={contextValue}>
            {children}
        </GitContext.Provider>
    )

}
export default GithubProvider;