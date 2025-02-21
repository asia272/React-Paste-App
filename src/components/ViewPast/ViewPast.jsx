import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./ViewPast.css"
import { NavLink } from 'react-router-dom'

const ViewPast = () => {
    let id = useParams();
    console.log(id.id)
    const pastes = useSelector((state) => state.paste.pastes)
    const Dispatch = useDispatch();

    let findViewPaste = pastes.filter((paste) => paste?.id === id.id)[0]
    console.log(findViewPaste)

    return (
        <div className='view-paste-container'>
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

        </div>
    )
}

export default ViewPast
