const APIURL = `https://api.github.com/users/`

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

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


function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div class="avatar-div">
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos" class="repos">
                    
                </div>
            </div>
        </div>
    `

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos")

    repos
    .slice(0, 5)
    .forEach(repo => {
        const repoEl = document.createElement("a")
        repoEl.classList.add("repo")
        repoEl.href = repo.html_url
        repoEl.target = "_blank"
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)

        search.value = ""
    }
})