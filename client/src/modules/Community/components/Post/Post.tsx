import React, { useState } from 'react';
import { itfPostItem } from '../../redux/types'
import './styles.scss';

interface Post {
    post?: itfPostItem;
    prHandlePost: (data?: any) => void;
}
interface postState {
    post_id?: string;
    content: string;
    videos: File[] | string[];
    images: File[] | string[];
}
const Post: React.FC<Post> = (props) => {
    const { prHandlePost, post } = props;
    const [dataPost, setDataPost] = useState<postState>({
        post_id: post ? post.post_id : 0, 
        content: post ? post.content : '',
        videos: post? post.videos : [],
        images: post? post.images : []
    })
    const handleChange = function(e: React.ChangeEvent<HTMLTextAreaElement>){
        setDataPost({ ...dataPost, content: e.target.value });
    }
    const handlePost = function(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        prHandlePost({...dataPost});
        if(!dataPost.post_id)
            setDataPost({...dataPost, content: '', videos: [], images: []})
    }
    return(
        <div className="communityPost">
            <div className="postWrapper shadowPage">
                <div className="head">
                    <h3 className="title">
                        {
                            post ? `CHỈNH SỬA` : `CHIA SẺ`
                        }
                    </h3>
                </div>
                <div className="middle">
                    <div className="d-flex">
                        <div className="avatar">
                            <div className="defaultAvatar">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                                    <path fill="none" d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="textInput">
                            <textarea value={dataPost.content} onChange={handleChange} className="form-control" placeholder="Nội dung chia sẻ..."></textarea>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <ul className="list">
                        <li>
                            <a href="#">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M10,6.536c-2.263,0-4.099,1.836-4.099,4.098S7.737,14.732,10,14.732s4.099-1.836,4.099-4.098S12.263,6.536,10,6.536M10,13.871c-1.784,0-3.235-1.453-3.235-3.237S8.216,7.399,10,7.399c1.784,0,3.235,1.452,3.235,3.235S11.784,13.871,10,13.871M17.118,5.672l-3.237,0.014L12.52,3.697c-0.082-0.105-0.209-0.168-0.343-0.168H7.824c-0.134,0-0.261,0.062-0.343,0.168L6.12,5.686H2.882c-0.951,0-1.726,0.748-1.726,1.699v7.362c0,0.951,0.774,1.725,1.726,1.725h14.236c0.951,0,1.726-0.773,1.726-1.725V7.195C18.844,6.244,18.069,5.672,17.118,5.672 M17.98,14.746c0,0.477-0.386,0.861-0.862,0.861H2.882c-0.477,0-0.863-0.385-0.863-0.861V7.384c0-0.477,0.386-0.85,0.863-0.85l3.451,0.014c0.134,0,0.261-0.062,0.343-0.168l1.361-1.989h3.926l1.361,1.989c0.082,0.105,0.209,0.168,0.343,0.168l3.451-0.014c0.477,0,0.862,0.184,0.862,0.661V14.746z"></path>
                                </svg>
                                <span>Chọn hình ảnh</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M18.175,4.142H1.951C1.703,4.142,1.5,4.344,1.5,4.592v10.816c0,0.247,0.203,0.45,0.451,0.45h16.224c0.247,0,0.45-0.203,0.45-0.45V4.592C18.625,4.344,18.422,4.142,18.175,4.142 M4.655,14.957H2.401v-1.803h2.253V14.957zM4.655,12.254H2.401v-1.803h2.253V12.254z M4.655,9.549H2.401V7.747h2.253V9.549z M4.655,6.846H2.401V5.043h2.253V6.846zM14.569,14.957H5.556V5.043h9.013V14.957z M17.724,14.957h-2.253v-1.803h2.253V14.957z M17.724,12.254h-2.253v-1.803h2.253V12.254zM17.724,9.549h-2.253V7.747h2.253V9.549z M17.724,6.846h-2.253V5.043h2.253V6.846z"></path>
                                </svg>
                                <span>Chọn video</span>
                            </a>
                        </li>
                        <li className="postNow ml-auto">
                            <button onClick={handlePost} className="btn btn-primary" type="button" disabled={dataPost.content === ''}>
                                {
                                    post ? 'Lưu' : 'Đăng'
                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Post;