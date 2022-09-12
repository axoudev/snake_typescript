let defaultButtons = document.getElementsByClassName("default-active");
for(let i = 0; i < defaultButtons.length; i++){
    (defaultButtons[i] as HTMLElement).style.background = "#0984e3";
}
function setActive(button: HTMLButtonElement){
    let nodes: NodeListOf<ChildNode> = button.parentNode!.childNodes;
    for(let element in nodes){
        if(nodes[element].nodeName == 'BUTTON'){
            (nodes[element] as HTMLElement).style.background = "#dfe6e9";
        }
    }
    button.style.background = "#0984e3";
}