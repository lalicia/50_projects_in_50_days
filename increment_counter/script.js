const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        //this is set against each div - will be a string so use "+" or Number() or parseInt() to make a Number
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        //dividing by a fixed number like this means all will animate/increment at same time and finish together 
        const increment = target / 200;
        //console.log(increment);

        if(c < target) {
            //Math.ceil rounds the number
            counter.innerText = `${Math.ceil(c + increment)}`

            //calls the function every 1ms
            setTimeout(updateCounter, 1);
        } else {
            //ensures doesn't go over the attribute figure
            counter.innerText = target;
        }
    }

    updateCounter();
})