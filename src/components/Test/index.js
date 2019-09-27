import React, {useState} from 'react';

export const Test = () => {

	const [text, setText] = useState("Hello World");

	return (
		<article>
			<p> {text} </p>
		</article>
	);
}