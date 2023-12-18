const timeline = () => {
	return gsap.timeline()
}
const obyssAnimation = () => {
	animations()
}

const textAnimation = () => {
	//text animation
	const text = timeline()
	text.from(".line h1, .line h2,.line-1-part-1", {
		y: 400,
		onStart: function () {
			Counter()
		},
		stagger: 0.2,
		duration: 0.8,
		delay: 0.5,
		opacity: 0,
	})

	text.to(".line h1, .line h2,.line-1-part-1", {
		y: -900,
		stagger: 0.2,
		duration: 1,
		delay: 2,
		opacity: 0,
		onStart: function () {
			Counter()
		},
	})
	//end of text animation

	// nav animation
	const nav = timeline()
	nav.from("#nav, #nav svg, #nav h4",{
		opacity:0,
		stagger:0.2,
		duration:0.9,
		delay: 4.8,
		y:100,
	})
	// end of nav animation
}

const loaderAnimation = () => {
	//loader animation
	const loader = timeline()
	loader.to("#loader", {
		delay: 4.9,
		duration: 1,
		y: -1100,
		stagger: 0.2,
	})

	loader.to("#loader", {
		display: "none",
	})

	//end of loader animation
}

const animations = () => {
	textAnimation()
	loaderAnimation()
}

obyssAnimation()

const Counter = () => {
	let timeout = document.querySelector(".line-1-part-1 h5")
	let number = 0
	const interVal = setInterval(() => {
		if (number < 100) {
			timeout.innerHTML = number++
		} else {
			timeout.innerHTML = number
			clearInterval(interVal)
		}
	}, 32)
}

const heroAnimation = () => {
	const hero = timeline()
	hero.to(".hero", {
		opacity: 0,
		stagger: 0.2,
		delay: 2.2,
		duration: 0.1,
		y: -200,
	})

	hero.from(".hero", {
		opacity: 0,
		stagger: 0.2,
		delay: 2.2,
		duration: 0.9,
		y: 200,
	})
}
heroAnimation()

//cursor animate
const cursorAnimation = () => {
	document.addEventListener("mousemove", (dets) => {
		gsap.to(".cursor", {
			left: dets.x,
			top: dets.y,
		})
	
	})
	Shery.makeMagnet("#nav-part2 h4", {})
}


cursorAnimation()

//end of cursor animate
