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
import { Tooltip } from "@mui/material";

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
    toast.success("Copied to clipboard")
  }
  const handleShare = (paste) => {
    const sharePasteUrl = `${window.location.origin}/allPastes/${paste.id}`;
    setSharePaste({ sharePasteUrl: sharePasteUrl, paste: paste });
  };

  let filterPaste = pastes.filter((pastes) =>
    pastes.pasteTitle.toLowerCase()
      .includes(searchPaste.toLowerCase()));

  return (
    <div className='pastes-container'>

      <input type="text"
        className="search-paste"
        placeholder='Search your paste...'
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

                  {/* Edit Button with Tooltip */}
                  <Tooltip title="Edit"  arrow>
                    <NavLink to={`/?pastId=${paste?.id}`} className="edit">
                      <EditIcon />
                    </NavLink>
                  </Tooltip>

                  {/* Delete Button with Tooltip */}
                  <Tooltip
                    title="Delete"
                    arrow
                  >
                    <div className="delete" onClick={() => handleDelete(paste?.id)}>
                      <DeleteIcon />
                    </div>
                  </Tooltip>

                  {/* Copy Button with Tooltip */}
                  <Tooltip title="Copy"  arrow>
                    <div className="copy" onClick={() => handleCopy(paste)}>
                      <ContentCopyIcon />
                    </div>
                  </Tooltip>

                  {/* Share Button with Tooltip */}
                  <Tooltip title="Share"  arrow>
                    <div className="share" onClick={() => handleShare(paste)}>
                      <ShareIcon />
                    </div>
                  </Tooltip>

                  {/* View Button with Tooltip */}
                  <Tooltip title="View"  arrow>
                    <NavLink to={`/allPastes/${paste?.id}`} className="view">
                      <VisibilityIcon />
                    </NavLink>
                  </Tooltip>

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
        <ShareBox sharePaste={sharePaste} setSharePaste={setSharePaste} />
      )}

    </div>
  )
}

export default AllPastes;
