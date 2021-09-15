import { useContext } from "react";
import {GitContext} from "../Gitprovider/index"

const useGitHub = () => {
   const {gitState, getUser, getRepos, getStarred} = useContext(
       GitContext
   )
   
    // const { gitState, getUser, getRepos, getStarred } = useContext(
    //     GitContext);

    return { gitState, getUser, getRepos, getStarred };

};

export default useGitHub;