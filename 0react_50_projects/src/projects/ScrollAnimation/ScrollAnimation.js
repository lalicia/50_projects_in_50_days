import React from "react";
import {useEffect} from "react";

import {useInView} from 'react-intersection-observer';

import "./ScrollAnimation.css";
import HomeButton from "../../components/HomeButton.js";

// import ContentBox from "./ContentBox.js";

function ScrollAnimation() {
    //number of boxes generated - cannot use this now as Intersection Observer ref unable to be passed to Components. divs created directly in return
    // const [box, setBox] = useState(8);

    //making Content Boxes, rendered in return
    // const arr = [];
    // for (let i = 0; i < box; i++) {
    //     arr.push(<ContentBox key={i} ref={ref} className={inView ? "sa-box show" : "sa-box"} />);
    // }

    //ensure page loads at top as was loading in middle for some reason
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    //hook from react-intersection-observer - all need own ref otherwise animation only triggers when scrolled to bottom and ALL are in view!
    //threshold is how far up the element has to be to trigger inView
    //triggerOnce means it only sets the animation once on the way down the page - remove this and they will go back off and on
    const {ref: ref1, inView: inView1} = useInView({triggerOnce: true, threshold: 0.3});
    // console.log(inView);
    const {ref: ref2, inView: inView2} = useInView({triggerOnce: true, threshold: 0.3});
    const {ref: ref3, inView: inView3} = useInView({triggerOnce: true, threshold: 0.3});
    const {ref: ref4, inView: inView4} = useInView({triggerOnce: true, threshold: 0.3});
    const {ref: ref5, inView: inView5} = useInView({triggerOnce: true, threshold: 0.3});
    const {ref: ref6, inView: inView6} = useInView({triggerOnce: true, threshold: 0.3});
    const {ref: ref7, inView: inView7} = useInView({triggerOnce: true, threshold: 0.3});

    return (
        <div className="sa-container">
            <h1 className="sa-h1">Scroll to see the animation</h1>
            
            <div ref={ref1} className={inView1 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
            <div ref={ref2}  className={inView2 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
            <div ref={ref3}  className={inView3 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
            <div ref={ref4}  className={inView4 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
            <div ref={ref5}  className={inView5 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
            <div ref={ref6}  className={inView6 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
            <div ref={ref7}  className={inView7 ? "sa-box-show" : "sa-box"}><h2>Content</h2></div>
        
            <HomeButton />
        </div>
    )
}

export default ScrollAnimation;