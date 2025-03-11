const ClientStats = () => {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our customers achieve <span className="bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">outstanding ROI</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl md:text-6xl font-display font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">80%</div>
            <p className="text-gray-600">reduction in manual effort</p>
          </div>
          
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl md:text-6xl font-display font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">5X</div>
            <p className="text-gray-600">risk identification</p>
          </div>
          
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-5xl md:text-6xl font-display font-bold mb-2 bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">2X</div>
            <p className="text-gray-600">document speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStats;
