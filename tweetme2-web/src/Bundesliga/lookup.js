import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/Bundesliga/create/", callback, {content: newTweet})
  }

export function apiCommentCreate(newComment, callback){
    backendLookup("POST", "/Bundesliga/commentcreate/", callback, {content: newComment})
  }

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/Bundesliga/action/", callback, data)
}


export function apiCommentAction(commentId, action, callback){
    const data = {id: commentId, action: action}
    backendLookup("POST", "/Bundesliga/commentaction/", callback, data)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup("GET", `/Bundesliga/${tweetId}/`, callback)
}

export function apiCommentDetail(commentId, callback) {
    backendLookup("GET", `/Bundesliga/${commentId}/`, callback)
}

export function apiTweetFeed(callback, nextUrl) {
    let endpoint =  "/Bundesliga/feed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}


export function apiCommentFeed(callback, nextUrl) {
    let endpoint =  "/Bundesliga/commentfeed/"
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}

export function apiTweetList(username, callback, nextUrl) {
    let endpoint =  "/Bundesliga/"
    if (username){
        endpoint =  `/Bundesliga/?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined) {
        endpoint = nextUrl.replace("http://localhost:8000/api", "")
    }
    backendLookup("GET", endpoint, callback)
}