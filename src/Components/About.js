import React from 'react'

export default function About(props) {

	// const [myStyle, setMyStyle] = useState({
	// 	color: 'black',
	// 	backgroundColor: 'white'
	// })

	// const [btn, setBtn] = useState("Enable Dark Mode")

	// const toggleTheme = () => {
	// 	if (myStyle.color === "white") {
	// 		setMyStyle({
	// 			color: 'black',
	// 			backgroundColor: 'white'
	// 		})
	// 		setBtn("Enable Dark Mode")
	// 	}
	// 	else {
	// 		setMyStyle({
	// 			color: 'white',
	// 			backgroundColor: 'black'
	// 		})
	// 		setBtn("Enable Light Mode")
	// 	}
	// }


	return (
		<div className='container' style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} >
			<h1>About Us</h1>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button className="accordion-button" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							About the App!
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} >
							This app will full fil your needs , like if you want to analyse your text you can type it here and do some operatios so that the text can be analyzed . You can convert the text to <strong>Upper Case</strong> to <strong>Lower Case</strong> , <strong>copy the text</strong> etc.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button className="accordion-button collapsed" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Benefits it provide!
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} >
							This is my first react app , which is text analyser provides te functionality of manipulating the text in a way you want . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolores fugiat obcaecati deleniti, amet, harum tempore aliquam delectus eligendi dolore omnis recusandae unde ipsum illo error cumque neque eum numquam.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button className="accordion-button collapsed" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							accessibility !
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div className="accordion-body" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)', backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white' }} >
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas officiis modi, dolores ipsa neque assumenda voluptates consequuntur dolorem unde quibusdam eligendi necessitatibus ut, quod sed asperiores eaque commodi rerum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odio eaque pariatur facilis provident consectetur assumenda labore dolore repudiandae incidunt, iste, iusto ut fugit perferendis molestias deleniti possimus cumque itaque?
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container ">
				<button className="btn btn-primary my-3" onClick={toggleTheme}>{btn}</button>
			</div> */}
		</div>
	)
}
