import React, { useState } from "react";
import PostItem from '../components/Post/PostItem';
import ConfirmModal from '../../../components/snippets/ConfirmModal'
import EditModal from '../components/Post/EditModal';
import { itfPostItem } from '../redux/types';
interface CommunityPage {
    listPost: itfPostItem[]
}
const CommunityPage: React.FC<CommunityPage> = props => {
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
    const [itemPostEdit, setItemPostEdit] = useState<itfPostItem>();
    const { listPost } = props;
    const handleEditPost = (post: any) => {
        if(post) {
            setIsEditModal(true)
            setItemPostEdit(post);
        }
    }
    const handleDeletePost = () => {
        setIsDeleteModal(true);
    }
    const handleConfirmDelete = (isConfirm: boolean) => {
        console.log("isConfirm: ", isConfirm)
        if(!isConfirm) setIsDeleteModal(isConfirm);
    }
    const handleConfirmEdit = (post: any) => {
        console.log('post: ', post)
        if(!post) setIsEditModal(false);
    }
    return (
        <div className="listPosts mb-3">
            {
                listPost.length === 0 ? <p className="emptyData text-center my-3">Not posts!</p>
                :
                listPost.map(post => <PostItem key={post.post_id} 
                    post={post}
                    prHandleEditPost = {handleEditPost}
                    prHandleDeletePost = {handleDeletePost}
                />)
            }
            <ConfirmModal toggleModal={isDeleteModal} prHandleConfirm={handleConfirmDelete} />
            <EditModal toggleModal={isEditModal} prHandleConfirm={handleConfirmEdit} post={itemPostEdit} />
        </div>
    )
}
export default CommunityPage;