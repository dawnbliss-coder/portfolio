export default function Hero(){
    return (
        <section className = "flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className = "text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Hi, I'm Priyanka Agarwal.
            </h1>
            <p className= "mt-4 text-xl text-gray-400 max-w-2xl">

            </p>
            <div className = "flex mt-6 space-x-4">
                <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                    View My Work
                </a>
                <a href="mailto:priyanka.agarwal@students.iiit.ac.in" className = "border border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
                    Contact Me
                </a>
            </div>
        </section>
    );
}