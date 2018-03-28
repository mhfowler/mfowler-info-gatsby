import React from 'react'
import Link from 'gatsby-link'

const NotesPage = () => (
  <div className="about-wrapper">
    <div className="note-wrapper" style={{"margin-top": "0px"}}>
        <img src="/mfowler/img/notes/1.jpg" className="note"/>
    </div>
    <div className="note-wrapper">
        <img src="/mfowler/img/notes/3.jpg" className="note"/>
    </div>
    <div className="note-wrapper">
        <img src="/mfowler/img/notes/4.jpg" className="note"/>
    </div>
    <div className="note-wrapper">
        <img src="/mfowler/img/notes/2.jpg" className="note"/>
    </div>
    <div className="note-wrapper">
        <img src="/mfowler/img/notes/5.jpg" className="note"/>
    </div>
  </div>
)

export default NotesPage
