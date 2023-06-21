const Button = (props) => {
	return (
		<>
			<button
				className={`border-2 bg-blue-500 text-white p-2 ${props.className}`}
				onClick={props.onClick}>
				{props.children}
			</button>
		</>
	);
};

export default Button;
