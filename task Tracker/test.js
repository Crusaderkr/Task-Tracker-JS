const notify = document.querySelector("#notify");
notify.addEventListener("click", () => {
    //alert("working");
    Notification.requestPermission().then(perm => {
        console.log("Permission:", perm);
        if (perm === "granted") {
            console.log("Notification granted");
            new Notification("test", { body: "This is a test notification" });

        } else {
            console.log("Notification not granted");
        }
    });
});
