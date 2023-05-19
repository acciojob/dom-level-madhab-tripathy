//your JS code here. If required.
window.onload = ()=>{
    let level = document.querySelectorAll("li");
    for(let i = 0; i < level.length; i++){
        if(level[i].id === "level") return alert(`The level of the element is: ${i}`)
    }
}