import React, {useEffect} from 'react'
import "../Styles/Git.css";

function Git() {


    useEffect(() => {
       
        window.scrollTo(0, 0)
      
    }, [])
  return (
    <div>
        <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/library">View previous chapter</a>
            </div>
            <div className="info">
                <div className="progr-wrapper">
                    <div className="progr"></div>
                    <span className="progr-text">
                        4/9 Chapters
                    </span>
                </div>
                <h6>Chapter 4</h6>
                <h2>GIT, GITHUB and API(s) </h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
                {/* <a className="btn" href="/data" >Next Chapter</a> */}
            </div>
        </div>
        <a href="/data" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Git