import React from 'react'
import {apiCommentCreate} from './lookup'


export function CommentCreate(props){
  const textAreaRef = React.createRef()
  const {didComment} = props
    const handleBackendUpdate = (response, status) =>{
      if (status === 201){
        didComment(response)
      } else {
        console.log(response)
        alert("An error occured please try again")
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const newVal = textAreaRef.current.value
      // backend api request
      apiCommentCreate(newVal, handleBackendUpdate)
      textAreaRef.current.value = ''
    }
    return <div className={props.className}>
          <form onSubmit={handleSubmit}>
            <textarea ref={textAreaRef} required={true} className='form-control' name='comment'>

            </textarea>
            <button type='submit' className='btn btn-primary my-3'>Comment</button>
        </form>
  </div>
}