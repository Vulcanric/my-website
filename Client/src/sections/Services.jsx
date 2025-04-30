import Card from "../components/Card"

const Services = () => {

  return (
    <section id="services" className="bg-[#444444] flex flex-col items-center p-8">
      <h1 className="text-4xl mt-5 mb-11">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <Card
          className="border w-96 h-96 border-2 border-gray-300 rounded-lg"
        >
        </Card>
        <Card
          className="border w-96 h-96 border-2 border-gray-300 rounded-lg"
        >
        </Card>
        <Card
          className="border w-96 h-96 border-2 border-gray-300 rounded-lg"
        >
        </Card>
        <Card
          className="border w-96 h-96 border-2 border-gray-300 rounded-lg"
        >
        </Card>
      </div>
    </section>
    )
}
export default Services;
