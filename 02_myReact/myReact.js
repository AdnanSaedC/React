function myRender(element,root){
    let newElement=document.createElement(element.type);
    console.log(element.type)
    newElement.innerHTML=element.text;
    for(let i in element.properties){
        console.log("hello");
        newElement.setAttribute(i,element.properties[i]);
    }
    root.appendChild(newElement);
}
let root=document.querySelector("#root");

const elementToCreate={
    type : 'a',
    properties:{
        href:"https://www.google.com",
        target: "_blank",
        id:"xyz"
    },
    text:"I will land you to google.com"
}

myRender(elementToCreate,root);

//this is what happens in the react