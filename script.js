

let randTime = Math.floor(Math.random()*7)

const messages = ["Initializing Hacking","Reading our files","Passswords obtained","Sending passwords and peronal files to server","Cleaning system",`<video loop autoplay muted>   <source src="https://cdn.pixabay.com/video/2020/08/21/47802-451812879_large.mp4" autoplay ></video>`]

const boxes = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
    document.getElementById("box4"),
    document.getElementById("box5"),
    document.getElementById("box6"),
   
]

boxes.forEach((box,index) => {
    setTimeout(() => {
       box.innerHTML = messages[index] 
    }, index*1000);
});