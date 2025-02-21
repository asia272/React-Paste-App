import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./AllPastes.css"
import { NavLink } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deleteToPaste } from '../../features/pasteSlice';
import toast from 'react-hot-toast';
import ShareBox from '../ShareBox/ShareBox';

const AllPastes = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const Dispatch = useDispatch();
  const [searchPaste, setSearchPaste] = useState("")
  const [sharePaste, setSharePaste] = useState(null);

  let handleDelete = (id) => {
    Dispatch(deleteToPaste(id))
    toast.success("Deleted successfully");
  }
  let handleCopy = (paste) => {
    navigator.clipboard.writeText(paste.pasteContent)
    toast.success("Copy to clipboard")
  }
  const handleShare = (paste) => {
    const sharePasteUrl = `${window.location.origin}/allPastes/${paste.id}`;

    setSharePaste(
      {
        sharePasteUrl: sharePasteUrl,
        paste: paste
      })
  };


  let filterPaste = pastes.filter((pastes) =>
    pastes.pasteTitle.toLowerCase()
      .includes(searchPaste.toLowerCase()));

  return (
    <div className='pastes-container'>

      <input type="text"
        className="search-paste"
        placeholder='search your paste...'
        value={searchPaste}
        onChange={(e) => setSearchPaste(e.target.value)}
      />
      <div className="all-pastes">
        <h1 className='all-paste-heading'>All Pastes</h1>
        {
          (filterPaste.length > 0 ? filterPaste : pastes).map((paste) => (
            <div className="paste-box" key={paste.id}>
              <div className="paste-content">
                <h1 className="past-title">
                  {paste.pasteTitle}
                </h1>
                <p>
                  {paste.pasteContent}
                </p>
              </div>
              <div className="links-box">
                <div className="paste-btn">
                  <div>
                    <NavLink
                      to={`/?pastId=${paste?.id}`}
                      className="edit"
                    >
                      <EditIcon />
                    </NavLink>
                  </div>
                  <div onClick={() => handleDelete(paste?.id)}
                    className="delete">
                    <DeleteIcon />
                  </div>

                  <div onClick={() => handleCopy(paste)}>
                    <NavLink
                      className="copy"
                    >
                      <ContentCopyIcon />
                    </NavLink>
                  </div>
                  <div onClick={() => handleShare(paste)}>
                    <NavLink
                      className="share">

                      <ShareIcon />
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      className="view"
                      to={`/allPastes/${paste?.id}`}>
                      <VisibilityIcon />
                    </NavLink>
                  </div>
                </div>
                <div className="date">
                  {(paste.created_at.slice(4, 15))}
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {sharePaste && sharePaste.sharePasteUrl && (
        <ShareBox sharePaste={sharePaste} setSharePaste ={setSharePaste}/>
      )}

    </div>
  )
}

export default AllPastes
