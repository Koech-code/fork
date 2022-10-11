import React, {useEffect, useState}  from 'react'

import {apiCommentFeed} from './lookup'

import {Comment} from './commentdetail'

export function CommentFeedList(props) {
    const [commentsInit, setCommentsInit] = useState([])
    const [comments, setComments] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [commentsDidSet, setCommentsDidSet] = useState(false)
    useEffect(()=>{
      const final = [...props.newComments].concat(commentsInit)
      if (final.length !== comments.length) {
        setComments(final)
      }
    }, [props.newComments, comments, commentsInit])

    useEffect(() => {
      if (commentsDidSet === false){
        const handleCommentListLookup = (response, status) => {
          if (status === 200){
            setNextUrl(response.next)
            setCommentsInit(response.results)
            setCommentsDidSet(true)
          }
        }
        apiCommentFeed(handleCommentListLookup)
      }
    }, [commentsInit, commentsDidSet, setCommentsDidSet, props.username])


    const handleDidRetweet = (newComment) => {
      const updateCommentsInit = [...commentsInit]
      updateCommentsInit.unshift(newComment)
      setCommentsInit(updateCommentsInit)
      const updateFinalComments = [...comments]
      updateFinalComments.unshift(comments)
      setComments(updateFinalComments)
    }
    const handleLoadNext = (event) => {
      event.preventDefault()
      if (nextUrl !== null) {
        const handleLoadNextResponse = (response, status) =>{
          if (status === 200){
            setNextUrl(response.next)
            const newComments = [...comments].concat(response.results)
            setCommentsInit(newComments)
            setComments(newComments)
          }
        }
        apiCommentFeed(handleLoadNextResponse, nextUrl)
      }
    }

    return <React.Fragment>{comments.map((item, index)=>{
      return <Comment  
        comment={item} 
        didRetweet={handleDidRetweet}
        className='my-5 py-5 border bg-white text-dark' 
        key={`${index}-{item.id}`} />
    })}
    {nextUrl !== null && <button onClick={handleLoadNext} className='btn btn-outline-primary'>Load next</button>}
    </React.Fragment>
  }


