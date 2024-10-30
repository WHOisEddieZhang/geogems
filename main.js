document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.createElement("button");
    subscribeButton.textContent = "Subscribe Now";
    subscribeButton.style.padding = "10px";
    subscribeButton.style.backgroundColor = "#4CAF50";
    subscribeButton.style.color = "white";
    subscribeButton.style.border = "none";
    subscribeButton.style.cursor = "pointer";

    subscribeButton.addEventListener("click", function() {
        alert("Thank you for subscribing to GeoGems!");
    });

    document.querySelector("main").appendChild(subscribeButton);
});
