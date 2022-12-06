import React, {useEffect} from 'react'
import "../Styles/Data.css";

function Data() {

    useEffect(() => {
       
          window.scrollTo(0, 0)
        
      }, [])
  return (
    <div>
         <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/git">View previous chapter</a>
            </div>
            <div className="info">
                <div className="pro-wrapper">
                    <div className="pro"></div>
                    <span className="pro-text">
                        5/9 Challenge
                    </span>
                </div>
                <h6>Chapter 5</h6>
                <h2>SQL (Database) </h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
                {/* <a className="btn" href="/node" >Next Chapter</a> */}
            </div>
        </div>
        <a href="/node" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Data