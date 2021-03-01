/* ES6 Imports */
import React from 'react' /* ~ const React = require('react'); */
import ReactDom from 'react-dom'

/* Functional Components or Stateless Function Components (SFC) */
/* function HelloWorld() {
	return (
		<div>
			<Hello /> <World />
		</div>
	)
} */
/* function HelloWorld() {
	return React.createElement(
		'div',
		{},
		'Hello ',
		'World!',
		<Hello />,
		<World />
	)
} */
/* React.createElement(
    string|element,
    [propsObject],
    [children...]
) */

/* Example-2 */
/* function SongName(props){
    return(
        <span className = 'song-name'>
            {props.song.name}
        </span>
    )
} */

/* function SongName(props) {
	React.createElement('span', { className: 'song-name' }, props.song.name)
} */

function Hello() {
	return <span>Hello</span>
}

function World() {
	return <span>World!</span>
}

function HelloWorld() {
	return (
		<div>
			<Hello /> <World />
		</div>
	)
}

function SubmitButton() {
	const buttonText = 'This is a Button!'
	return <button>{buttonText}</button>
}

/* <React.Fragment></React.Fragment> ~ <></> */
function NameCells() {
	return (
		<React.Fragment>
			<td>Hey</td>
			<td>Table</td>
		</React.Fragment>
	)
}

function Ternary() {
	const isTrue = true
	return isTrue ? <button>True</button> : <button>False</button>
}

function ShortCircuit() {
	const isValid = false
	return (
		<button>
			{isValid && 'valid'}
            {/* This line and the below one are how we comment JSX */}
			{/* {!isValid && 'Invalid'} */}
		</button>
	)
}

ReactDom.render(<HelloWorld />, document.querySelector('#root'))
/* Overwriting */
ReactDom.render(<NameCells />, document.querySelector('#root'))

ReactDom.render(<SubmitButton />, document.querySelector('#root'))

ReactDom.render(<Ternary />, document.querySelector('#root'))

ReactDom.render(<ShortCircuit />, document.querySelector('#root'))
