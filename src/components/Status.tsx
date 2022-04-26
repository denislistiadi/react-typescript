import React from 'react'

type StatusProps = {
    status: 'loading' | 'error' | 'success'
}

const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading') {
        message = 'Loading...'
    } else if(props.status === 'error') {
        message = 'Error Fetching Data'
    } else if(props.status === 'success') {
        message = 'Data Fetched Successfully!'
    }
  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status