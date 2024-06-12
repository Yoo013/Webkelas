import React, { useEffect } from "react"


import Chat from "./components/ChatAnonim"
import AOS from "aos"
import "aos/dist/aos.css"
import Home2 from "./Pages/Home2"
import Carousel from "./Pages/Gallery"
import FullWidthTabs from "./Pages/Tabs"
import Footer from "./Pages/Footer"

function App3() {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<>
		<Home2/>
		<div id="blur">
			<Carousel/>
            <FullWidthTabs/>

			<div id="Mesh1"></div>


			<div
				className="lg:mx-[12%] lg:mt-[-5rem] lg:mb-20 hidden lg:block"
				id="ChatAnonim_lg"
				data-aos="fade-up"
				data-aos-duration="1200">
				<Chat/>
			</div>

			<Footer/>
			</div>
		</>
	)
}

export default App3
