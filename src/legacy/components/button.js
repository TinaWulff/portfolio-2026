
import './button.scss'

export default function button(buttonTXT, href) {
    let buttonElm = document.createElement("a")
    buttonElm.className="link-button";
    buttonElm.href= `${href}`;
    buttonElm.textContent=`${buttonTXT}`;

    return buttonElm
}


    // buttonElm.innerHTML = `
    //     ${buttonTXT}
    // `

