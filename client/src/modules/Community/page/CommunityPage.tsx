import React from "react";
import PostItem from '../components/Post/PostItem';
import LoadingLine from '../../../components/snippets/LoadingLine';
const CommunityPage: React.FC<{}> = props => {
    return (
        <div className="communityPage">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <LoadingLine isLoading={true} />
        </div>
    )
}
export default CommunityPage;