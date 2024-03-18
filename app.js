var container = document.getElementById("buttonContainer");

for (var i =1;i<=20; i++){
    var button =document.createElement("button");
    button.textContent =i;
    button.addEventListener("click",function(){
        alert(this.textContent);
    });
    container.appendChild(button);
}

