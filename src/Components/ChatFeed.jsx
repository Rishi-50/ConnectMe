import React from 'react'
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


function ChatFeed(props) {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[keys];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className='message-block'>
                        {
                            isMyMessage 
                            ? <MyMessage message={message} /> 
                            : <TheirMessage message={message} lastMessage={message[lastMessageKey]} />
                        }
                    </div>

                    <div className="read-receipts" style={{ margin: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        read-recipts
                    </div>
                    {renderMessages()}
                    <div style={{ height: '100px' }} />
                    <div className="message-form-container">
                        <MessageForm {...props} chatId={activeChat} />
                    </div>
                </div>
            )
        })
    }

    if (!chat) {
        return 'Loading...'
    }

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="sub-title">
                    {chat.people.map((person) => `${person.person.userName}`)}
                </div>
            </div>

        </div>
    );
}

export default ChatFeed;
