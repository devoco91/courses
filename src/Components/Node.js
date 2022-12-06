import React, {useEffect} from 'react'
import "../Styles/Node.css";

function Node() {

  useEffect(() => {
       
    window.scrollTo(0, 0)
  
}, [])
  return (
    <div>
          <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/data">View previous chapter</a>
            </div>
            <div className="info">
                <div className="progrest-wrapper">
                    <div className="progrest"></div>
                    <span className="progrest-text">
                        6/9 Chapters
                    </span>
                </div>
                <h6>Chapter 6</h6>
                <h2>NODE.js and EXPRESS </h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
                {/* <a className="btn" href="/py" >Next Chapter</a> */}
            </div>
        </div>
        <a href="/py" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Node