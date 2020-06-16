import React, { useState } from "react";
import PostItem from '../components/Post/PostItem';
import ConfirmModal from '../../../components/snippets/ConfirmModal'
import EditModal from '../components/Post/EditModal';
import { itfPostItem, itfUpdatePost } from '../redux/types';
interface CommunityPage {
    listPost: itfPostItem[],
    prUpdatePost: (dataUpdate? : itfUpdatePost) => void;
    prDeletePost: (post_id?: string) => void;
}
const CommunityPage: React.FC<CommunityPage> = props => {
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false);
    const [idDelete, setIdDelete] = useState<any>("");
    const [itemPostEdit, setItemPostEdit] = useState<itfPostItem>();
    const { listPost, prUpdatePost, prDeletePost } = props;
    const handleEditPost = (post: any) => {
        if(post) {
            setIsEditModal(true)
            setItemPostEdit(post);
        }
    }
    const handleDeletePost = (post_id: any) => {
        if(!post_id) return false;
        setIsDeleteModal(true);
        setIdDelete(post_id);
    }
    const handleConfirmDelete = (isConfirm: boolean) => {
        console.log('isConfirm: ', isConfirm)
        setIsDeleteModal(false)
        if(!isConfirm) return false;
        prDeletePost(idDelete);
    }
    const handleConfirmEdit = (post: any) => {
        setIsEditModal(false);
        if(!post) { return false; }
        prUpdatePost(post); 
    }
    return (
        <div className="listPosts mb-3">
            {
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