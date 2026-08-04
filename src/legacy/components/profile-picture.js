

import profilePic from '../assets/profile-pic.png';
import "./profile-picture.scss";

export default function profileImg() {
    const profileImgElm = document.createElement("img");
    profileImgElm.className = "profile-img";
    profileImgElm.src = profilePic;
    profileImgElm.alt = "Profile picture Tina Wulff";

    return profileImgElm;
}
