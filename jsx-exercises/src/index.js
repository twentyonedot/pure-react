import React from 'react'
import ReactDom from 'react-dom'

function MyThing() {
	return (
		<React.Fragment>
			{/* <Exercise1_1 /> */}
			{/* <Exercise1_2a / */}
			{/* <Exercise1_2b /> */}
			{/* <Ex1 /> */}
			{/* <ManyChildren /> */}
			{/* <Greeting /> */}
			{/* <debugTime /> */}
			{/* <DebugTest5_C /> */}
			{/* <DebugTest5_D /> */}
			{/* <DebugTest5_F /> */}
			{/* <DebugTest5_G /> */}
			<CreateTable />
			{/* <Data /> */}
		</React.Fragment>
	)
}

/* function Exercise1_1() {
	return (
		<React.Fragment>
			<div className="book">
				<div className="title">The Title</div>
				<div className="author">The Author</div>
				<ul className="stats">
					<li className="rating">5 Stars</li>
					<li className="isbn">12-345678-910</li>
				</ul>
			</div>
		</React.Fragment>
	)
} */
/*
function Exercise1_2a() {
	return (
		<React.Fragment>
			Newline
			<br />
			Test
			<br />
		</React.Fragment>
	)
}

function Exercise1_2b() {
	return (
		<React.Fragment>
			Empty
			<br />
			<br />
			Newlines
			<br />
			<br />
			Here
		</React.Fragment>
	)
}
 */
/* function Ex1() {
	return React.createElement(
		'div',
		{ className: 'book' },
		React.createElement('div', { className: 'title' }, 'The Title'),
		React.createElement('div', { className: 'author' }, 'The Author'),
		React.createElement(
			'ul',
			{ className: 'stats' },
			React.createElement('li', { className: 'rating' }, '5 Stars'),
			React.createElement('li', { className: 'isbn' }, '12-345678-910')
		)
	)
}

function Greeting() {
	let userName = 'root'
	userName = undefined
	userName = null
	userName = false
	return userName ? 'Hello username' : 'Not logged in'
} */

/* function debugTime() {} */

/* Uncomment this function to know the error; Even if we don't call this function, it's showing the error. Why? */
/* function DebugTest5_B(){
    return(
        <div></div>
        <div></div>
    )
} */

/* function DebugTest5_C() {
	return [<div></div>, <div></div>]
} */

/* function DebugTest5_D() {
	let x = true
	return (
		<>
			<p>{(x && 5; x && 7)}</p>
		</>
	)
} */

/* function DebugTest5_E() {
	true && return (<div>hello</div>)
} */

/* function DebugTest5_F() {
	alert('hi')
}

function DebugTest5_G() {
	return <React.Fragment>"Hello"</React.Fragment>
}
 */

function CreateTable() {
	return (
		<React.Fragment>
			<table>
				<tbody>
					<tr>
						<td>Row 1 Col 1</td>
						<td>Row 1 Col 2</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	)
}

function Data() {
	return (
		<React.Fragment>
			<table>
				<tbody>
					<tr>
						<Data />
						<Data />
						<Data />
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	)
}
ReactDom.render(<MyThing />, document.querySelector('#root'))
