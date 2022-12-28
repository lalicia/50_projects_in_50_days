import React from "react";
import {useState} from "react";

import "./GithubProfiles.css";
import HomeButton from "../../components/HomeButton.js";

function GithubProfiles() {
    const [search, setSearch] = useState("");
    const [error, setError]  = useState(false);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [followers, setFollowers] = useState("");
    const [following, setFollowing] = useState("");
    const [publicRepos, setPublicRepos] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    // const [APIURL, setAPIURL] = useState(`https://api.github.com/users/`)

    const APIURL = `https://api.github.com/users/`

    //GET user
    async function getUser(username) {
        try {
            const res = await axios.get(APIURL + username)
            //can destructure:
            //const {data} = await axios.get(APIURL + username)
            
            console.log(res.data)

            createUserCard(res.data)
            getRepos(username)
        } catch(error) {
            console.log(error)

            if(error.response.status == 404) {
                createErrorCard("No profile with this username")
            }
        }    

        //OTHER WAY OF WRITING
        // axios.get(APIURL + username)
            // .then(res => console.log(res.data))
            // .catch(err => console.log(err))
    }

    //GET repos
    async function getRepos(username) {
        try {
            const res = await axios.get(APIURL + username + '/repos?sort=created')
            
            console.log(res.data)

            addReposToCard(res.data)
        } catch(error) {
            console.log(error)

            createErrorCard("Problem fetching repos")
        } 
    }

    function handleSubmit(e) {
        e.preventDefault()
    
        setSearch(e.target.value)
        if(search !== "") {
            getUser(search)
            
            e.target.reset();
            setSearch("")
        }
    }

    return (
        <div className="gp-container">
            <form className="gp-user-form" id="form" onSubmit={handleSubmit}>
                <input type="text" id="search" className="gp-search" placeholder="Search a Github user" />
            </form>

            <main id="main" className="gp-main">
                <div className="gp-card">
                    <div className="gp-avatar-div">
                        <img src="${user.avatar_url}" alt="${user.name}" className="gp-avatar" />
                    </div>

                    <div className="gp-user-info">
                        <h2>${user.name}</h2>
                        <p>${user.bio}</p>

                        <ul>
                            <li>${user.followers} <strong>Followers</strong></li>
                            <li>${user.following} <strong>Following</strong></li>
                            <li>${user.public_repos} <strong>Repos</strong></li>
                        </ul>

                        <div id="repos" className="gp-repos">
                            
                        </div>
                    </div>
                </div>

                {/* ERROR */}    
                <div class="card">
                    <h1>${message}</h1>
                </div>
            </main>
        </div>
    )
}

export default GithubProfiles;