let defaultButtons = document.getElementsByClassName("default-active");
for(let i = 0; i < defaultButtons.length; i++){
    (defaultButtons[i] as HTMLElement).style.background = "#0984e3";
}
function setActive(button: HTMLButtonElement){
    let nodes = <HTMLButtonElement>button.parentNode.childNodes;
    for(element in nodes){
        if(nodes[element].nodeName == 'BUTTON'){
            nodes[element].style.background = "#dfe6e9";
        }
    }
    button.style.background = "#0984e3";
}