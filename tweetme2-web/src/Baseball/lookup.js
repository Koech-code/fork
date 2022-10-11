import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/Baseball/create/", callback, {content: newTweet})
  }

export function apiCommentCreate(newComment, callback){
    backendLookup("POST", "/Baseball/commentcreate/", callback, {content: newComment})
  }

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/Baseball/action/", callback, data)
}


export function apiCommentAction(commentId, action, callback){
    const data = {id: commentId, action: action}
    backendLookup("POST", "/Baseball/commentaction/", callback, data)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup("GET", `/Baseball/${tweetId}/`, callback)
}

export function apiCommentDetail(commentId, callback) {
    backendLookup("GET", `/Baseball/${commentId}/`, callback)
}

export function apiTweetFeed(callback, nextUrl) {
    let endpoint =  "/Baseball/feed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}


export function apiCommentFeed(callback, nextUrl) {
    let endpoint =  "/Baseball/commentfeed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}

export function apiTweetList(username, callback, nextUrl) {
    let endpoint =  "/Baseball/"
    if (username){
        endpoint =  `/Baseball/?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}