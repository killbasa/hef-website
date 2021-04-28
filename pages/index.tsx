import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div className="flex flex-col h-full min-h-screen bg-red-50">
			<Navbar/>
			<Hero/>

			<div className="flex-grow">
				<div className="my-16 w-full flex flex-col items-center">
					<div className="max-w-4xl w-full mx-4">
						<div>
							<h1 className="text-2xl text-red-500 font-bold border-b-2 border-red-200 text-center sm:text-left">Featured projects</h1>
							<div className="flex flex-col sm:flex-row sm:flex-wrap sm:-mx-2 sm:justify-center items-center">
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
							</div>
						</div>
						<div className="mt-10">
							<h1 className="text-2xl text-red-500 font-bold border-b-2 border-red-200 text-center sm:text-left">EN Servers</h1>
							<div className="flex flex-col sm:flex-row sm:flex-wrap sm:-mx-2 sm:justify-center items-center">
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
								<Card img="/img/logo.png" title="HoloRes" description="A fun Hololive community! We have concerts, arts, festivals, and more!" button="Join!" url="#"/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer/>
		</div>
	);
}
