import React, {useEffect} from 'react'
import "../Styles/Html.css";

function Html() {
    useEffect(() => {
       
          window.scrollTo(0, 0)
        
      }, [])

  return (
    <div>
        <div className="course">
            <div className="preview">
                <h6>Course</h6>
                <h2>Web Development</h2>
                <a href="#">View all chapters</a>
            </div>
            <div className="info">
                <div className="pr-wrapper">
                    <div className="pr"></div>
                    <span className="pr-text">
                        1/9 Chapters
                    </span>
                </div>
                <h6>Chapter 1</h6>
                <h2>HTML and CSS</h2>
                <p className="p-trunc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dicta atque ea earum illum, perferendis suscipit animi assumenda voluptatibus consectetur ratione, neque sapiente voluptatum sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro enim aperiam error! Quo ab maiores minima. Ad obcaecati aliquid sint ratione. Vitae fugit dolore saepe expedita dolorem vel cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro enim aperiam error! Quo ab maiores minima. Ad obcaecati aliquid sint ratione. Vitae fugit dolore saepe expedita dolorem vel cum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id porro enim aperiam error! Quo ab maiores minima. Ad obcaecati aliquid sint ratione. Vitae fugit dolore saepe expedita dolorem vel cum.</p>
                {/* <a className="btn" href="/javascript" >Next Chapter</a> */}
            </div>
        </div>
        {/* <a style="padding:10px;display:block;" href="" target="_blank">Click here for complete tutorial</a> */}



<a href="/javascript" className="float">
{/* <i NameName="fa fa-plus my-float"></i> */}
Next Chapter
</a>
    </div>
  )
}

export default Html