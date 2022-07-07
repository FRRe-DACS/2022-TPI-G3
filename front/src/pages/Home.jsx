import { Link } from "react-router-dom"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Hero from "../../public/images/home/hero.jpg"
import Newsletter from "../../public/images/home/newsletter.jpg"

export default function Home() {
  return (
<section className="min-h-screen bg-[#059090] overflow-hidden">
    <Parallax pages={3}>
    
    <ParallaxLayer offset={0}
                factor={1.5}
                  speed={0.05} 
                  style={{
                    backgroundImage: `url(${Hero})`,
                    backgroundSize: 'cover',
                    backgroundRepeat:"no-repeat",
                    backgroundPosition: "center center",
                    
                  }}> 
        
        <ParallaxLayer offset={0}
                factor={1.5}
                  speed={0.05}>
      <div class="container mx-auto flex flex-col items-center px-4 py-12 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 class="text-5xl font-bold leading-none sm:text-6xl">Prepará un
          <span class="text-[#059090]"> viaje inolvidable </span> con un solo click
        </h1>
    
        <div class="flex flex-wrap justify-center mt-64">
          <button class="px-12 py-3 m-2 text-lg font-semibold rounded bg-[#b75c0c] text-white">Ver paquetes</button>
          <button class="px-12 py-3 m-2 text-lg border rounded text-white border-black hover:bg-[#d0782b] hover:border-[#d0782b]">Contáctate</button>
        </div>
      </div>
      </ParallaxLayer>
    </ParallaxLayer>
 
<ParallaxLayer offset={1.5}
                factor={1}
                  speed={0.5} >

  <section className="bg-[#059090] py-32">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<h2 className="text-4xl font-bold lg:text-5xl">Tu viaje con los mejores beneficios</h2>
		</div>
		<div className="flex flex-wrap items-stretch mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 w-full rounded shadow sm:p-8 dark:bg-gray-900">
					<div className="space-y-2 text-white">
						<h4 className="text-2xl font-bold">Eventos</h4>
						<span className="text-6xl font-bold">1°</span>
					</div>
					<p className="mt-3 leading-relaxed dark:text-gray-400">Los más aclamados shows.</p>
					<ul className="flex-1 mb-6 dark:text-gray-400">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Lista de beneficios</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="/eventos" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-[#d0782b] dark:text-gray-900">Ver Eventos</a>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-col p-6 space-y-6 w-full rounded shadow sm:p-8 dark:bg-[#d0782b] dark:text-gray-900">
					<div className="space-y-2 text-white">
						<h4 className="text-2xl font-bold ">Hoteles</h4>
						<span className="text-6xl font-bold">2°
						
						</span>
					</div>
					<p className="leading-relaxed">Más de 2.000 hoteles en cientos de destinos.</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Lista de beneficios</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Phasellus tellus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Praesent faucibus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Aenean et lectus blandit</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="/hoteles" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-800 dark:text-[#d0782b]">Ver Hoteles</a>
				</div>
			</div>
			<div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="p-6 space-y-6 w-full rounded shadow sm:p-8 text-white bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Seguros</h4>
						<span className="text-6xl font-bold">3°
							
						</span>
					</div>
					<p className="leading-relaxed dark:text-gray-400">Para que tu viaje sea divertido y seguro.</p>
					<ul className="space-y-2 dark:text-gray-400">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Lista de beneficios</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Fusce sem ligula</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Curabitur dictum</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#d0782b]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						
					</ul>
					<a rel="noopener noreferrer" href="/seguros" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-[#d0782b] dark:text-gray-900">Ver Seguros</a>
				</div>
			</div>
		</div>
	</div>
  </section>



</ParallaxLayer>



    <ParallaxLayer offset={2}
                  speed={1}
                  factor={1}> 

	<div class="pt-32 min-h-screen bg-white">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
			<span className="block mb-2 text-[#2badad]">No te pierdas de ofertas increíbles</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-50">Enterate de todas nuestras novedades</h1>
			<p className="my-8 text-white">
				<span className="font-medium dark:text-gray-50">Suscríbete</span> para recibir nuevos paquetes y ofertas personalizadas para vos!
			</p>
			<form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label for="name" className="text-sm sr-only">Tu Nombre</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-[#d0782b] dark:border-gray-700" />
				</div>
				<div>
					<label for="lastname" className="text-sm sr-only">E-mail</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-[#d0782b] dark:border-gray-700" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded dark:bg-[#d0782b] dark:text-gray-900">Únete</button>
			</form>
		</div>
		<img src="../../public/images/home/newsletter2.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
    </div></div>


</ParallaxLayer> 



    </Parallax>




</section>
  )
}
