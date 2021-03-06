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

// UPDATE POST
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILED = "UPDATE_POST_FAILED";
export interface itfUpdatePost extends itfCreatePost {
    post_id: string
}
interface updatePost {
    type: typeof UPDATE_POST,
    payload: itfUpdatePost
}
interface updatePostSuccess {
    type: typeof UPDATE_POST_SUCCESS,
    payload: any
}
interface updatePostFailed {
    type: typeof UPDATE_POST_FAILED,
    payload: any
}

type UpdatePostType = updatePost | updatePostSuccess | updatePostFailed;

// DELETE POST
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILED = "DELETE_POST_FAILED";
export interface itfDeletePost {
    post_id: string
}
interface deletePost {
    type: typeof DELETE_POST,
    payload: itfDeletePost
}
interface deletePostSuccess {
    type: typeof DELETE_POST_SUCCESS,
    payload: any
}
interface deletePostFailed {
    type: typeof DELETE_POST_FAILED,
    payload: any
}

type DeletePostType = deletePost | deletePostSuccess | deletePostFailed;

export type PostType = FetchListPostType | CreatePostType | UpdatePostType | DeletePostType;