import React from 'react';
import "./ShareBox.css";
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ShareBox = ({ sharePaste, setSharePaste }) => {
    let paste_URL = sharePaste.sharePasteUrl;
    let pasteTitle = sharePaste.paste.pasteTitle;
    console.log(pasteTitle, paste_URL)


    const shareOptions = [
        {
            name: "WhatsApp",
            icon: <WhatsAppIcon sx={{ color: "#25D366" }} />,
            url: `https://api.whatsapp.com/send?text=${encodeURIComponent(pasteTitle + " " + paste_URL)}`
        },
        {
            name: "Facebook",
            icon: <FacebookIcon sx={{ color: "#1877F2" }} />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(paste_URL)}`
        },
        {
            name: "Twitter",
            icon: <TwitterIcon sx={{ color: "#1DA1F2" }} />,
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(paste_URL)}&text=${encodeURIComponent(pasteTitle)}`
        },
        {
            name: "LinkedIn",
            icon: <LinkedInIcon sx={{ color: "#0077B5" }} />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(paste_URL)}`
        }
    ];
    return (
        <div className='share-box-container'>
            <div className="links">
                <h2>Share via</h2>
                {shareOptions.map(option => (
                    <div key={option.name}>
                        <NavLink to={option.url} className="link">
                            {option.icon}
                            {option.name}
                        </NavLink>
                    </div>
                ))}
            </div>
            <button onClick={() => setSharePaste(null)}
                className='close-share-links-btn'
            >
                < CloseIcon />
            </button>


        </div>
    );
}

export default ShareBox;
