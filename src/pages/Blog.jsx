import React from "react";
import Navbar from "../components/Navbar";
import "../css/Blog.css";
import blogImage from "../assets/AII.webp"

const Blog = () => {
  return (
    <div className="hidden">
      <Navbar />
      <div className="banner">
        <div className="tabs">Latest Posts </div>
        <div className="tabs">Artificial Intelligence</div>
        <div className="tabs">Data Science</div>
        <div className="tabs">Mobile Application</div>
        <div className="tabs">Machine Learning</div>
      </div>

      <div className="blogs">
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>    
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>
        <div className="blog">
            <div className="b_img_section">
                <img src={blogImage} alt="" />
            </div>
            <div className="b_text_section">
                <div className="b_title">THE EFFECT OF AI</div>
                <div className="b_author">Osei Divine</div>
                <button>READ MORE</button>
            </div>
        </div>  
        
        </div>
      
      
    </div>
  );
};

export default Blog;
