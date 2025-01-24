export default function Stats() {
  return (
    <section className="py-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold mb-2">$10 million</h2>
            <p className="text-gray-400">Quarterly trading volume</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">5000</h2>
            <p className="text-gray-400">Quarterly Registered users</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">200+</h2>
            <p className="text-gray-400">countries covered</p>
          </div>
        </div>
      </div>
    </section>
  )
}

