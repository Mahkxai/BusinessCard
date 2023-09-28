import React, { useRef, useState, useEffect } from 'react';
import './App.css'
import { Header, MainBody, Footer } from './';

function App() {
	const cardRef = useRef();
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [startPos, setStartPos] = useState({ x: 0, y: 0 });

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartPos({ x: e.clientX, y: e.clientY });
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		const newX = position.x + e.clientX - startPos.x;
		const newY = position.y + e.clientY - startPos.y;
		setPosition({ x: newX, y: newY });
		setStartPos({ x: e.clientX, y: e.clientY });
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging, position, startPos]);

	return (
		<div
			className='card'
			ref={cardRef}
			onMouseDown={handleMouseDown}
			style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
		>
			<Header />
			<MainBody />
			<Footer />
		</div>
	);
}

export default App;
