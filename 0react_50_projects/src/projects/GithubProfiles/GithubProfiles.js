import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

import "./GithubProfiles.css";
import HomeButton from "../../components/HomeButton.js";

function GithubProfiles() {
    const [input, setInput] = useState("");
    const [search, setSearch] = useState(null);
    const [errorUser, setErrorUser]  = useState(false);
    const [errorRepos, setErrorRepos]  = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [publicRepos, setPublicRepos] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [repo1, setRepo1] = useState({name: "", link: ""});
    const [repo2, setRepo2] = useState({name: "", link: ""});
    const [repo3, setRepo3] = useState({name: "", link: ""});
    const [repo4, setRepo4] = useState({name: "", link: ""});
    const [repo5, setRepo5] = useState({name: "", link: ""});

    const APIURL = `https://api.github.com/users/`

    useEffect(() => {
        console.log("search is: ", search)
        if(search !== null) {
            getUser(search)
        }
    }, [search])

    //GET user
    async function getUser(username) {
        try {
            const res = await axios.get(APIURL + username)
            const data = res.data;
            console.log(data)

            setName(data.name)
            setBio(data.bio)
            setFollowers(data.followers)
            setFollowing(data.following)
            setPublicRepos(data.public_repos)
            setAvatarUrl(data.avatar_url)

            getRepos(username)
        } catch(error) {
            console.log(error)

            if(error.response.status == 404) {
                setErrorUser(true);
                setErrMsg("No profile with that username")
            }
        }
        //console.log("get user ran, username was: ", username)
        //console.log(await axios.get(APIURL + username))    
    }

    //GET repos
    async function getRepos(username) {
        try {
            const res = await axios.get(APIURL + username + '/repos?sort=created')  
            console.log(res.data)
            const data = res.data

            setRepo1({name: data[0].name, link: data[0].html_url})
            setRepo2({name: data[1].name, link: data[1].html_url})
            setRepo3({name: data[2].name, link: data[2].html_url})
            setRepo4({name: data[3].name, link: data[3].html_url})
            setRepo5({name: data[4].name, link: data[4].html_url})
        } catch(error) {
            console.log(error)
            setErrorRepos(true);
            setErrMsg("Problem fetching repos")
        } 
    }

    function handleSubmit(e) {
        e.preventDefault()   
        setErrorUser(false)
        setErrorRepos(false)
        console.log("input is: ", input)
        setSearch(input)
        e.target.reset();
    }

    return (
        <div className="gp-container">
            <form className="gp-user-form" id="form" autoComplete="off" onSubmit={handleSubmit}>
                <input onChange={(e) => setInput(e.target.value)} type="text" id="search" className="gp-search" placeholder="Search a Github user" />
            </form>

            {
                name !== "" ?
                <main id="main" className="gp-main">
                    <div className="gp-card">
                        <div className="gp-avatar-div">
                            <img src={avatarUrl} alt={name} className="gp-avatar" />
                        </div>

                        <div className="gp-user-info">
                            <h2>{name}</h2>
                            <p>{bio}</p>

                            <ul>
                                <li>{followers} <strong>Followers</strong></li>
                                <li>{following} <strong>Following</strong></li>
                                <li>{publicRepos} <strong>Repos</strong></li>
                            </ul>


                            {
                                !errorRepos ? 
                                <div id="repos" className="gp-repos">
     
                                    <a href={repo1.link} target="_blank" rel="noreferrer" className="gp-repo">{repo1.name}</a>

                                    <a href={repo2.link} target="_blank" rel="noreferrer" className="gp-repo">{repo2.name}</a>

                                    <a href={repo3.link} target="_blank" rel="noreferrer" className="gp-repo">{repo3.name}</a>

                                    <a href={repo4.link} target="_blank" rel="noreferrer" className="gp-repo">{repo4.name}</a>

                                    <a href={repo5.link} target="_blank" rel="noreferrer" className="gp-repo">{repo5.name}</a>
                                </div>
                                :
                                <div className="gp-card">
                                    <h1>{errMsg}</h1>
                                </div>  
                            }
                            
                        </div>
                    </div>
                </main>
                : errorUser ?
                <div className="gp-card">
                    <h1>{errMsg}</h1>
                </div>
                :
                <></>
            }

            <HomeButton />          
        </div>
    )
}

export default GithubProfiles;