import React, {useEffect, useState}  from 'react'

import {TweetCreate} from './create'
import {CommentCreate} from './commentcreate'
import {Tweet} from './detail'
import {Comment} from './commentdetail'
import {apiTweetDetail} from './lookup'
import {apiCommentDetail} from './lookup'
import {FeedList} from './feed'
import {CommentFeedList} from './commentfeed'
import {TweetsList} from './list'

export function NFLFeedComponent(props) {
  const [newTweets, setNewTweets] = useState([])
  const canTweet = props.canTweet === "false" ? false : true
  const handleNewTweet = (newTweet) =>{
    let tempNewTweets = [...newTweets]
    tempNewTweets.unshift(newTweet)
    setNewTweets(tempNewTweets)
  }
  return <div className={props.className}>
          {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
        <FeedList newTweets={newTweets} {...props} />
  </div>
}


export function NFLCommentFeedComponent(props) {
  const [newComments, setNewComments] = useState([])
  const canComment = props.canComment === "false" ? false : true
  const handleNewComment = (newComment) =>{
    let tempNewComments = [...newComments]
    tempNewComments.unshift(newComment)
    setNewComments(tempNewComments)
  }
  return <div className={props.className}>
          {canComment === true && <CommentCreate didComment={handleNewComment} className='col-12 mb-3' />}
        <CommentFeedList newComments={newComments} {...props} />
  </div>
}

export function NFLTweetsComponent(props) {
    const [newTweets, setNewTweets] = useState([])
    const canTweet = props.canTweet === "false" ? false : true
    const handleNewTweet = (newTweet) =>{
      let tempNewTweets = [...newTweets]
      tempNewTweets.unshift(newTweet)
      setNewTweets(tempNewTweets)
    }
    return <div className={props.className}>
            {canTweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3' />}
          <TweetsList newTweets={newTweets} {...props} />
    </div>
}


export function NFLTweetDetailComponent(props){
  const {tweetId} = props
  const [didLookup, setDidLookup] = useState(false)
  const [tweet, setTweet] = useState(null)

  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setTweet(response)
    } else {
      alert("There was an error finding your tweet.")
    }
  }
  useEffect(()=>{
    if (didLookup === false){

      apiTweetDetail(tweetId, handleBackendLookup)
      setDidLookup(true)
    }
  }, [tweetId, didLookup, setDidLookup])

  return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
 }

export function NFLCommentDetailComponent(props){
  const {commentId} = props
  const [didLookup, setDidLookup] = useState(false)
  const [comment, setComment] = useState(null)

  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setComment(response)
    } else {
      alert("There was an error finding your tweet.")
    }
  }
  useEffect(()=>{
    if (didLookup === false){

      apiCommentDetail(commentId, handleBackendLookup)
      setDidLookup(true)
    }
  }, [commentId, didLookup, setDidLookup])

  return comment === null ? null : <Comment comment={comment} className={props.className} />
 }




