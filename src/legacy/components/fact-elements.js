import './fact-element.scss';

export default function factElm(fact) {
    let pElm = document.createElement("p")
    pElm.className="fact-p"

    pElm.innerHTML = `
    <p>${fact}</p>
    `

    return pElm
}