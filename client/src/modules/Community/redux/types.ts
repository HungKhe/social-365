// FETCH POST
export const FETCH_LIST_POST = "FETCH_LIST_POST";
export const FETCH_LIST_POST_SUCCESS = "FETCH_LIST_POST_SUCCESS";
export const FETCH_LIST_POST_FAILED = "FETCH_LIST_POST_FAILED";

export interface fetchPost {
    page: number,
    limit: number
}
export interface itfPostItem {
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
export interface postMODInterface {
    error: boolean,
    message: string,
    isLoading: boolean,
    listPost: itfPostItem[],
    totalPages: number
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

// CREATE POST
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILED = "CREATE_POST_FAILED";

export interface itfCreatePost {
    content: string,
    images: any[],
    videos: any[]
}

interface createPost {
    type: typeof CREATE_POST,
    payload: itfCreatePost
}
interface createPostSuccess {
    type: typeof CREATE_POST_SUCCESS,
    payload: any
}
interface createPostFailed {
    type: typeof CREATE_POST_FAILED,
    payload: any
}

type CreatePostType = createPost | createPostSuccess | createPostFailed;

export type PostType = FetchListPostType | CreatePostType;