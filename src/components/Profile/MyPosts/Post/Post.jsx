import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.S0HIURGiO0YtLiB9-4vZ_wHaCl%26pid%3DApi&f=1"}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post
