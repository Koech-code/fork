import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/Europa/create/", callback, {content: newTweet})
  }

export function apiCommentCreate(newComment, callback){
    backendLookup("POST", "/Europa/commentcreate/", callback, {content: newComment})
  }

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/Europa/action/", callback, data)
}


export function apiCommentAction(commentId, action, callback){
    const data = {id: commentId, action: action}
    backendLookup("POST", "/Europa/commentaction/", callback, data)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup("GET", `/Europa/${tweetId}/`, callback)
}

export function apiCommentDetail(commentId, callback) {
    backendLookup("GET", `/Europa/${commentId}/`, callback)
}

export function apiTweetFeed(callback, nextUrl) {
    let endpoint =  "/Europa/feed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}


export function apiCommentFeed(callback, nextUrl) {
    let endpoint =  "/Europa/commentfeed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}

export function apiTweetList(username, callback, nextUrl) {
    let endpoint =  "/Europa/"
    if (username){
        endpoint =  `/Europa/?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}