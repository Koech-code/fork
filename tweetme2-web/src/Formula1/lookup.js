import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/Formula1/create/", callback, {content: newTweet})
  }

export function apiCommentCreate(newComment, callback){
    backendLookup("POST", "/Formula1/commentcreate/", callback, {content: newComment})
  }

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/Formula1/action/", callback, data)
}


export function apiCommentAction(commentId, action, callback){
    const data = {id: commentId, action: action}
    backendLookup("POST", "/Formula1/commentaction/", callback, data)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup("GET", `/Formula1/${tweetId}/`, callback)
}

export function apiCommentDetail(commentId, callback) {
    backendLookup("GET", `/Formula1/${commentId}/`, callback)
}

export function apiTweetFeed(callback, nextUrl) {
    let endpoint =  "/Formula1/feed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}


export function apiCommentFeed(callback, nextUrl) {
    let endpoint =  "/Formula1/commentfeed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}

export function apiTweetList(username, callback, nextUrl) {
    let endpoint =  "/Formula1/"
    if (username){
        endpoint =  `/Formula1/?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}