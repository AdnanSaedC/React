function renderHTML(HTMLContent,whereToInject){
    const DOMElement = document.createElement(HTMLContent.type)
    DOMElement.innerHTML = HTMLContent.Children

    for (const ecahProp in HTMLContent.props) {
        DOMElement.setAttribute(ecahProp,HTMLContent.props[ecahProp])
    }
    whereToInject.appendChild(DOMElement)
}

const ourObject = {
    type:"a",
    props:{
        href:"https://www.google.com"
    },
    Children:"click me to visit google.com"
}

const DOM = document.querySelector("#root")

renderHTML(ourObject,DOM)