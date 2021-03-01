import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import './index.css'

function Tweet({ tweet }) {
	return (
		<div className="tweet">
			<Avatar hash={tweet.gravator} />
			<div className="content">
				<Author author={tweet.author} />
				<Time time={tweet.timestamp} />
				<Message text={tweet.message} />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton count={tweet.retweets} />
					<LikeButton count={tweet.likes} />
					<MoreOptionsButton />
				</div>
			</div>
			{/* <Comment author="me" message="a likeable message" likes={21 } /> */}
		</div>
	)
}
Tweet.propTypes = {
	tweet: PropTypes.shape({
		message: PropTypes.string,
		gravator: PropTypes.string,
		author: PropTypes.object,
		likes: PropTypes.number,
		retweets: PropTypes.number,
		timestamp: PropTypes.string,
	}).isRequired,
}

function Avatar({ hash }) {
	const url = `https://www.gravatar.com/avatar/${hash}`
	return <img className="avatar" src={url} alt="avatar" />
}
Avatar.propTypes = {
	hash: PropTypes.string,
}

function Message({ text }) {
	return <div className="message">{text}</div>
}
Message.propTypes = {
	text: PropTypes.string,
}

function Author({ author }) {
	return (
		<span className="author">
			<span className="name">{author.name}</span>
			<span className="handle">@{author.handle}</span>
		</span>
	)
}
Author.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired,
	}).isRequired,
}

const Time = ({ time }) => {
	const timeString = moment(time).fromNow()
	return <span className="time">{timeString}</span>
}
Time.propTypes = {
	time: PropTypes.string,
}

const ReplyButton = () => <i className="fa fa-reply reply-button" />

const RetweetButton = ({ count }) => (
	<span className="retweet-button">
		<i className="fa fa-retweet" />
		{getRetweetCount(count)}
	</span>
)
RetweetButton.propTypes = {
	count: PropTypes.number,
}

const LikeButton = ({ count }) => (
	<span className="like-button">
		<i className="fa fa-heart" />
		{count && <span className="like-count">{count}</span>}
	</span>
)
LikeButton.propTypes = {
	count: PropTypes.number,
}

const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button" />
)

const testTweet = {
	message: 'Something about cats.',
	gravator: '2a3a4466ab952c42d4aa8d316b604e60',
	author: {
		handle: 'catperson',
		name: 'IAMA Cat Person',
	},
	likes: 2,
	retweets: 21,
	timestamp: '2016-07-30 21:24:37',
}

function getRetweetCount(count) {
	if (count > 0) {
		return <span className="retweet-count">{count}</span>
	} else {
		return null
	}
}

function Comment({ author, message, likes }) {
	return (
		<div>
			<div className="author">{author}</div>
			<div className="message">{message}</div>
			<div className="likes">{likes > 0 ? likes : 'No'} likes</div>
		</div>
	)
}
Comment.propTypes = {
	message: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	likes: PropTypes.number,
}

ReactDom.render(<Tweet tweet={testTweet} />, document.querySelector('#root'))
