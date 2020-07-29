const darkscreen = document.getElementById("darkscreen");

var openModal = function(){
    darkscreen.classList.remove("hide");
}

var closeModal = function(){
    darkscreen.classList.add("hide");
}

async function getNodes() {
    let response = await fetch ('https://elconjunto-backend.herokuapp.com/api/nodes/all')
    let data = await response.json()
    return data;
}