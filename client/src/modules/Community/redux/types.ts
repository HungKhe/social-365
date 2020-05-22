// FETCH POST
export const FETCH_LIST_POST = "FETCH_LIST_POST";
export const FETCH_LIST_POST_SUCCESS = "FETCH_LIST_POST_SUCCESS";
export const FETCH_LIST_POST_FAILED = "FETCH_LIST_POST_FAILED";

export interface fetchPost {
    page: number,
    limit: number
}
export interface fetchPostState {
    error: boolean,
    message: string,
    isLoading: boolean,
    listPost: {
        post_id: any,
        content: string,
        replyCount: number,
        likeCount: number,
        user: any,
        create_date: any,
        replies: any[],
        images: any[],
        videos: any[],
        my_post: boolean
    }
}
interface fetchListPost {
    type: typeof FETCH_LIST_POST,
    payload: fetchPost
}
interface fetchListPostSuccess {
    type: typeof FETCH_LIST_POST_SUCCESS,
    payload: any
}
interface fetchListPostFailed {
    type: typeof FETCH_LIST_POST_FAILED,
    payload: any
}

type FetchListPostType = fetchListPost | fetchListPostSuccess | fetchListPostFailed;

export type PostType = FetchListPostType;