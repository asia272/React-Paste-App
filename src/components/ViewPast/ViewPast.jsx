import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./ViewPast.css"
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

const ViewPast = () => {
    let id = useParams();
    console.log(id.id)
    const pastes = useSelector((state) => state.paste.pastes)
    const Dispatch = useDispatch();

    let findViewPaste = pastes.filter((paste) => paste?.id === id.id)[0]
    console.log(findViewPaste)

    return (
        <motion.div className='view-paste-container'
        initial={{ opacity: 0 ,y:196}}
        animate={{ opacity: 1 , y:0}}
        transition={{ duration: 1 }}
        >
            <h1>Paste Details</h1>
            <div className="view-paste-box">
                <h2>
                    {findViewPaste.pasteTitle}
                </h2>
                <div className="view-paste-content">
                    <p>
                        {findViewPaste.pasteContent}
                    </p>
                </div>
            </div>
            <NavLink to={"/allPastes"}>
                <button className='back-btn'>
                    Back
                </button>

            </NavLink>

        </motion.div>
    )
}

export default ViewPast
