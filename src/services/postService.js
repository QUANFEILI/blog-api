import { getAll, getById, create, update, remove } from "../repositories/postRepo.js";

export function getAllPosts(){
    return getAll();
}

export function getPostById(id){
    const post = getById(id);
    if(post){
        return post;
    } else {
        const error = new Error(`post ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export function createPost(postData){
    return create(postData);
}

export function updatePost(id, updateData){
    const updatedPost = update(id, updateData);
    if(updatedPost){
        return updatedPost;
    } else {
        const error = new Error(`post ${id} not found`);
        error.status = 404;
        throw error;
    }
}

export function deletePost(id){
    const result = remove(id);
    if(result){
        return true;
    } else {
        const error = new Error(`post ${id} not found`);
        error.status = 404;
        throw error;
    }
}