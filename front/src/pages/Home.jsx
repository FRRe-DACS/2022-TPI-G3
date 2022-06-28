import { Link } from "react-router-dom"
export default function Home() {
  return (
    <div className="relative">
      <div className="sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-[#ffffff] sm:text-6xl drop-shadow-2xl">
              Tenemos todos los paquetes para vos y tu familia!
            </h1>
            <p className="mt-4 text-xl text-[#ffffff] drop-shadow-2xl shadow-black">
              Este año no te pierdas de los mejores eventos, en nuestros paquetes todo incluido, a precios imbatibles!😎
            </p>
          </div>

              <div
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-10 lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8 mt-24">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100 border-4">
                        <img
                          src="https://www.uade.edu.ar/media/1o3j021v/odradi0.jpg?anchor=center&mode=crop&width=1240&height=910&rnd=132266733783100000"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden border-4">
                        <img
                          src="https://www.cronista.com/files/image/304/304165/5ffe2012cb34e_950_534!.png?s=cb26ada201e0724bd22526f73a7274cc&d=1632271001"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      
                      <div className="w-44 h-64 rounded-lg overflow-hidden border-4">
                        <img
                          src="https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden border-4">
                        <img
                          src="https://www.primeraedicion.com.ar/wp-content/uploads/2020/03/corri.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden border-4">
                        <img
                          src="https://s3-sa-east-1.amazonaws.com/recorridoblogprod/assets/2016/11/Andesmar-3053-Sal%C3%B3n-Cama-1024x683.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden border-4">
                        <img
                          src="https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2020/08/viajes-para-aprender-ingles.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/paquetes"
                className="mt-5 inline-block text-center bg-[#00adad] border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Ver paquetes!
              </Link>
            </div>
          </div>
        </div>
  )
}
