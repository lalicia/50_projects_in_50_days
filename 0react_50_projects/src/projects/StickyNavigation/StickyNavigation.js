import React from "react";
import {useState, useEffect, useRef} from "react";

import "./StickyNavigation.css";
import HomeButton from "../../components/HomeButton.js";

function StickyNavigation() {
    const navRef = useRef();
    const [active, setActive] = useState(false);

    //found on Stackoverflow
    useEffect(() => {
        window.addEventListener("scroll", fixNav);
        
        return () => {
          window.removeEventListener('scroll', fixNav);
        }
      }, []);

      function fixNav() {
        //console.log(window.scrollY, nav.offsetHeight);
        if(window.scrollY > navRef.current.offsetHeight + 100) {
            setActive(true);
        } else {
            setActive(false) 
        }
    }

    return(
        <div className="sn-big-container">
            <nav className={active ? 
            "sn-nav sn-active"
            :
            "sn-nav"
             } ref={navRef}>
                <div className="sn-container">
                    <h1 className="sn-logo"><a href="./index.html">My Website</a></h1>

                    <ul>
                        <li><a href="#" className="sn-current">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div className="sn-hero">
                <div className="sn-container">
                    <h1>Welcome To My Website</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, cum!</p>
                </div>
            </div>

            <section className="sn-container sn-content">
                <h2>Content One</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facere optio? Possimus, magnam quos, consectetur doloribus at dolores illo, molestiae omnis totam necessitatibus nisi quia amet eum dignissimos voluptas officia delectus. Consequuntur voluptates veniam nemo voluptatum natus molestiae laborum laboriosam labore, architecto impedit magni obcaecati cupiditate provident voluptate, omnis magnam, doloribus laudantium necessitatibus velit illo nobis eum accusamus! Officia sit officiis eveniet, aperiam dolorum veniam ab quo quos maxime nemo, in molestiae quae sunt odit a, assumenda inventore ducimus consequuntur? Quas eos, eaque eveniet eligendi, ad voluptatibus placeat praesentium laboriosam laborum quasi nostrum rerum, id consequuntur nulla officiis magni nobis?</p>

                <h3>Content Two</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque nesciunt quia ratione, officia eaque cupiditate eveniet voluptatem, quibusdam quo amet perspiciatis dolor qui incidunt ullam ipsam vero deleniti omnis aliquam. Perspiciatis magnam, quis molestias saepe eligendi itaque deleniti esse. Ducimus totam excepturi voluptatibus laborum nam expedita nihil perferendis dolore.</p>
            </section>  

            <HomeButton />
        </div>
    )
}

export default StickyNavigation;