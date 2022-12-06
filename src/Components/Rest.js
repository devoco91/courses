import React, {useEffect} from 'react'
import "../Styles/Rest.css";

function Rest() {

    useEffect(() => {
       
        window.scrollTo(0, 0)
      
    }, [])
  return (
    <div>
        <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="/django">View previous chapter</a>
            </div>
            <div className="info">
                <div className="progress-wrapper">
                    <div className="progress"></div>
                    <span className="progress-text">
                        9/9 Chapters
                    </span>
                </div>
                <h6>Chapter 9</h6>
                <h2>RESTful API(s), DEPLOYMENT and HOSTING</h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit</p>
               
            </div>
        </div>
        <a href="/django" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Back
</a>
    </div>
  )
}

export default Rest