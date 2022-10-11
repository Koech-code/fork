
import React, {useState}  from 'react'

import {ActionBtn} from './buttons'

import {
  UserDisplay,
  UserPicture9,
  UserPicture
} from '../profiles'

export function ParentTweet(props){
    const {tweet} = props
    return tweet.parent ? <Tweet isRetweet retweeter={props.retweeter} hideActions className={' '} tweet={tweet.parent} /> : null
  }
  export function Tweet(props) {
      const {tweet, didRetweet, hideActions, isRetweet, retweeter} = props
      const [actionTweet, setActionTweet] = useState(props.tweet ? props.tweet : null)
      let className = props.className ? props.className : 'col-10 mx-auto col-md-6'
      className = isRetweet === true ? `${className} p-2 border rounded` : className
      const path = window.location.pathname
      const match = path.match(/(?<tweetid>\d+)/)
      const urlTweetId = match ? match.groups.tweetid : -1
      const isDetail = `${tweet.id}` === `${urlTweetId}`
      
      const handleLink = (event) => {
        event.preventDefault()
        window.location.href = `/Laliga/${tweet.id}`
      }
      const handlePerformAction = (newActionTweet, status) => {
        if (status === 200){
          setActionTweet(newActionTweet)
        } else if (status === 201) {
          if (didRetweet){
            didRetweet(newActionTweet)
          }
        }
        
      }
      
      return <div className={className}>
         {isRetweet === true && <div className='mb-2'>
          <span className='small text-muted'>Retweet via <UserDisplay user={retweeter} /></span>
        </div>}
        <div className=''>
       
          <div className='d-flex'>
            <UserPicture user={tweet.user} />

            < div className='col-8'>

            
                   <UserDisplay includeFullName user={tweet.user} />

                    </div>
              
            <div   className='col-3'>
                  <UserPicture9 user={tweet.user} />

            </div>
            
                
           
          </div>

              <div className='col-11'> 
               <div> 
                 

              
                
                <p>{tweet.content}</p>
               <img src = {tweet.image} width="400" height="200" className="d-inline-block align-top" alt=""/>
               
                <ParentTweet tweet={tweet} retweeter={tweet.user} />

              </div>
          <div className='btn btn-group px-5'>
          {(actionTweet && hideActions !== true) && <React.Fragment>
                 <div> <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{type: "like", display:"Likes"}}/></div>

                 <div> {isDetail === true ? null : <button className='btn btn-outline-primary btn-sm' onClick={handleLink}>Comments</button>}</div>

                 <div> <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{type: "retweet", display:"Share"}}/></div>
                </React.Fragment>
          }
                  {isDetail === true ? null : <button className='btn btn-outline-primary btn-sm' onClick={handleLink}>View</button>}
                </div>
                </div>
      </div>
      </div>
    }
  