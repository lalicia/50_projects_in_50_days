import React from "react";



function RotatingNavigation() {


    return (
        <>
            <div class="rn-container">
                <div class="rn-content">
                    <h1>Amazing Article</h1>
                    <small>@lalicia</small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h3>My Dog</h3>
                    <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="doggy" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div class="rn-circle-container">
                <div class="rn-circle">
                    <button id="close">
                        {/*<i> with fas class is from font-awesome and gives us the icons*/}
                        <i class="fas fa-times"></i>
                    </button>
                    <button id="open">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            <nav>
                <ul>
                    <li><i class="fas fa-home"></i> Home</li>
                    <li><i class="fas fa-user-alt"></i> About</li>
                    <li><i class="fas fa-envelope"></i> Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default RotatingNavigation();