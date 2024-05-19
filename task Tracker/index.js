const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container= document.querySelector(".container");
const notify =document.querySelector("#notify");
const add =document.querySelector("#add");

function showAllTasks()
{
    tasks.forEach((value,index)=>{
        const div= document.createElement("div");
        div.setAttribute("class","task")

            const innerDiv= document.createElement("div");
            div.append(innerDiv);

            const p = document.createElement("p");
            p.innerText= value.title;
            innerDiv.append(p);

            const span= document.createElement("span");
            span.innerText= value.description;
            innerDiv.append(span);

            const btn = document.createElement("button");
            btn.setAttribute("Id","dltBtn")
        
            btn.innerText="-";
            div.append(btn);
            container.append(div);

            btn.addEventListener("click",()=>{
                removeTasks();
                tasks.splice(index,1);
                localStorage.setItem("tasks",JSON.stringify(tasks));
                showAllTasks();
            })
        } ) ; 
     
}

function removeTasks() {
    tasks.forEach(()=>{
        const div= document.querySelector(".task");

        div.remove();
    });
}
const tasks =localStorage.getItem("tasks")?
JSON.parse(localStorage.getItem("tasks")) : [];
showAllTasks();
console.log(tasks);

// function sendNotificationAt8PM() {
//     const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
//     const currentHour = new Date(now).getHours();
//     const currentMinute = new Date(now).getMinutes();

//     if (currentHour === 21 && currentMinute === 36 && tasks.length > 0) {
//         sendNotification("You have tasks remaining!");
//     }
// }

// // Function to send notification
// function sendNotification(message) {
//     if (!("Notification" in window)) {
//         console.error("This browser does not support desktop notification");
//         return;
//     }

//     if (Notification.permission === "granted") {
//         new Notification("Task Reminder", { body: message });
//     } else if (Notification.permission !== "denied") {
//         Notification.requestPermission().then(function (permission) {
//             if (permission === "granted") {
//                 new Notification("Task Reminder", { body: message });
//             }
//         });
//     }
// }
// setTimeout(sendNotificationAt8PM, getTimeTo8PM());

// // Function to calculate time to 8:00 PM in milliseconds
// function getTimeTo8PM() {
//     const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
//     const targetTime = new Date(now);
//     targetTime.setHours(21,36,0,0);
//     const timeDifference = targetTime.getTime() - new Date(now).getTime();
//     return timeDifference > 0 ? timeDifference : 0;
// }

form.addEventListener("submit",(e) =>
{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title:title.value,
        description:description.value,

    });
    
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAllTasks();

});

notify.addEventListener("click",()=>{
    Notification.requestPermission().then(perm=>{
        if (prem==="granted"){
            new Notification("test");
        } 
            
        
    })
});

