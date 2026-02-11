import { posts, getNextId } from '../db/posts.js';


export function getAll(){
    return posts;
}

export function getById(id){
    let post = posts.find((post) => post.id === id);
    return post;
}

export function create(postData){
    const newPost = {
        id: getNextId(),
        title: postData.title,
        content: postData.content,
        createdAt: new Date().toISOString(),
    };
    posts.push(newPost);
    return newPost;
}

export function update(id, postData){
    let post = posts.find((post) => post.id === id);
    if(!post){
        return undefined;
    }
    if(postData.title){
        post.title = postData.title;
    }
    if(postData.content){
        post.content = postData.content;
    }
    return post;
}

export function remove(id){
    const index = posts.findIndex((post) => post.id === id);
    if(index === -1){
        return false;
    }
    posts.splice(index, 1);
    return true;
}