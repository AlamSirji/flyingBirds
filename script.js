window.onload = function(){
    console.clear();
    const timer = setInterval(randomFly,2000);
}

function randomFly(){
    const birds = document.getElementsByTagName(`img`);
    for (let index = 0; index < birds.length; index++) {
        const element = birds[index];
        element.style.transition = `all 3s`;
        element.style.transform = `rotate(${getRotation()}deg)`;
        element.style.top = `${getPosition()}%`;        
        element.style.right = `${getPosition()}%`;        
        element.style.bottom = `${getPosition()}%`;        
        element.style.left = `${getPosition()}%`;        
        document.getElementById(`ashokaChakra`).style.transform = `rotate(${getRotation()}deg)`;
        document.getElementById(`ashokaChakra`).style.transition = `all 3s`;
    }
}

function getPosition(){
    return Math.floor(Math.random()* (100 + 1) - 1);
}

function getRotation(){
    return Math.floor(Math.random() * (90 - 0) + 0);
}
