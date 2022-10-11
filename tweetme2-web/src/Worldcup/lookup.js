import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/Worldcup/create/", callback, {content: newTweet})
  }

export function apiCommentCreate(newComment, callback){
    backendLookup("POST", "/Worldcup/commentcreate/", callback, {content: newComment})
  }

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/Worldcup/action/", callback, data)
}


export function apiCommentAction(commentId, action, callback){
    const data = {id: commentId, action: action}
    backendLookup("POST", "/Worldcup/commentaction/", callback, data)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup("GET", `/Worldcup/${tweetId}/`, callback)
}

export function apiCommentDetail(commentId, callback) {
    backendLookup("GET", `/Worldcup/${commentId}/`, callback)
}

export function apiTweetFeed(callback, nextUrl) {
    let endpoint =  "/Worldcup/feed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}


export function apiCommentFeed(callback, nextUrl) {
    let endpoint =  "/Worldcup/commentfeed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}

export function apiTweetList(username, callback, nextUrl) {
    let endpoint =  "/Worldcup/"
    if (username){
        endpoint =  `/Worldcup/?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}