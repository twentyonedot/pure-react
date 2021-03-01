import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function Tweet() {
	return (
		<div className="tweet">
			<Avatar />
			<div className="content">
				<Author />
				<Time />
				<Message />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton />
					<LikeButton />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	)
}

function Avatar() {
	return (
		<img
			className="avatar"
			src="https://www.gravatar.com/avatar/2a3a4466ab952c42d4aa8d316b604e60"
			alt="avatar"
		/>
	)
}

function Message() {
	return <div className="message">This is less than 140 characters.</div>
}

function Author() {
	return (
		<span className="author">
			<span className="name">Your Name</span>
			<span className="handle">@yourHandle</span>
		</span>
	)
}

const Time = () => <span className="time">3h ago</span>

const ReplyButton = () => <i className="fa fa-reply reply-button" />

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />

const LikeButton = () => <i className="fa fa-heart like-button" />

const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button" />
)

ReactDom.render(<Tweet />, document.querySelector('#root'))
