import React from 'react'

function TheirMessage({ lastMessage, message }) {
  const isFirstMessage = !lastMessage || lastMessage.sender.userName != message.sender.userName

  return (
    <div className='messagge-row'>
      {isFirstMessage && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {(message?.attachments?.length > 0) ?
        (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className='message-image'
            style={{ marginLeft: isFirstMessage ? '4px' : '48px' }}
          />
        ) :
          (
            <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC' , marginLeft: isFirstMessage ? '4px' : '48px' }}>
              {message.text}
            </div>
          )
      }
    </div>
  )
}

export default TheirMessage
