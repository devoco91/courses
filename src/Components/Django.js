import React, {useEffect} from 'react'
import "../Styles/Django.css";

function Django() {

    useEffect(() => {
       
        window.scrollTo(0, 0)
      
    }, [])
  return (
    <div>
         <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/py">View previous chapter</a>
            </div>
            <div className="info">
                <div className="prog-wrapper">
                    <div className="prog"></div>
                    <span className="prog-text">
                        8/9 Chapters
                    </span>
                </div>
                <h6>Chapter 8</h6>
                <h2>DJANGO FRAMEWORK</h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
                {/* <a className="btn" href="/rest" >Next Chapter</a> */}
            </div>
        </div>
        <a href="/rest" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Django