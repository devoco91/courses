import React, {useEffect} from 'react'
import "../Styles/Library.css";

function Library() {

    useEffect(() => {
       
        window.scrollTo(0, 0)
      
    }, [])
  return (
    <div>
        <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/javascript">View previous chapter</a>
            </div>
            <div className="info">
                <div className="progres-wrapper">
                    <div className="progres"></div>
                    <span className="progres-text">
                        3/9 Chapters
                    </span>
                </div>
                <h6>Chapter 3</h6>
                <h2>REACT and JQUERY</h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
                {/* <a className="btn" href="/git" >Next Chapter</a> */}
            </div>
        </div>
        <a href="/git" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Library