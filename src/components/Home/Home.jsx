import React, { useEffect, useState } from 'react'
import "./Home.css"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSelector, useDispatch } from 'react-redux'
import { addToPaste, updateToPaste } from '../../features/pasteSlice';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from 'react-router-dom';
import { motion } from "framer-motion";
import { useMediaQuery } from '@mui/material';


const Home = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const pastId = searchParams.get('pastId')

  let [title, setTitle] = useState("")
  let [content, setContent] = useState("")

  useEffect(() => {
    if (pastId) {
      let filterPaste = pastes.filter((paste) => paste.id === pastId)
      setTitle(filterPaste[0].pasteTitle)
      setContent(filterPaste[0].pasteContent)
    }
  }, [pastId])

  //handle added paste
  let handleClick = () => {
    let paste = {
      pasteTitle: title,
      pasteContent: content,
      id: pastId || uuidv4(),
      created_at: Date()
    }

    if (pastId) {
      dispatch(updateToPaste(paste))
    } else {
      dispatch(addToPaste(paste))
    }

    setTitle("")
    setContent("")
    setSearchParams("")
  }

  return (
    <motion.div
      className='home-container'
      initial={{ opacity: 0, x: 196 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='home'>
        <input type="text"
          placeholder='Enter your past'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleClick}>
          {pastId ? "Edit Past" : "Create Paste"}
        </button>
      </div>
      <div className='content'>
        <div className='text-header'>
          <div className='dots-box'>
            <div className='red-dot'></div>
            <div className='yellow-dot'></div>
            <div className='green-dot'></div>
          </div>
          <ContentCopyIcon />
        </div>
        <textarea
          rows="20"
          placeholder='Enter your content here...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
        </textarea>
      </div>

    </motion.div>
  )
}

export default Home
