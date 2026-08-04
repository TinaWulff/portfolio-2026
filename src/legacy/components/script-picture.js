import sriptImg from '../assets/sript-img.png';
import "./script-picture.scss";



export default function codeImg() {
    const codeImgElm = document.createElement("img");
    codeImgElm.className = "code-img";
    codeImgElm.src = sriptImg;
    codeImgElm.alt = "Code in VS-Code";

    return codeImgElm;
}

