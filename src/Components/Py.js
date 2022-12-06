import React, {useEffect} from 'react'
import "../Styles/Py.css";

function Py() {

    useEffect(() => {
       
        window.scrollTo(0, 0)
      
    }, [])
  return (
    <div>
         <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/node">View previous chapter</a>
            </div>
            <div className="info">
                <div className="progresss-wrapper">
                    <div className="progresss"></div>
                    <span className="progresss-text">
                        7/9 Chapters
                    </span>
                </div>
                <h6>Chapter 7</h6>
                <h2>PYTHON PROGRAMMING </h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
                {/* <a className="btn" href="/django" >Next Chapter</a> */}
            </div>
        </div>
        <a href="/django" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Py