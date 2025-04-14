import Carousel from "../layouts/Carousel";

const Testimonials = () => {
  const testimonials = [
    {name: "Abert Macauley", title: "Software Engineer", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi asperiores eos veniam id eius dolor culpa quam, reprehenderit natus quibusdam, debitis ad harum laboriosam nulla ex illum soluta. Officia vero iusto omnis laboriosam magnam voluptatem quaerat dolor autem animi. Unde qui deserunt aut impedit recusandae nisi dolor quam ducimus."},
    {name: "Mary Jummy", title: "CEO Mastercard", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi asperiores eos veniam id eius dolor culpa quam, reprehenderit natus quibusdam, debitis ad harum laboriosam nulla ex illum soluta. Officia vero iusto omnis laboriosam magnam voluptatem quaerat dolor autem animi. Unde qui deserunt aut impedit recusandae nisi dolor quam ducimus."},
    {name: "Docas Temitope", title: "Software Engineer", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi asperiores eos veniam id eius dolor culpa quam, reprehenderit natus quibusdam, debitis ad harum laboriosam nulla ex illum soluta. Officia vero iusto omnis laboriosam magnam voluptatem quaerat dolor autem animi. Unde qui deserunt aut impedit recusandae nisi dolor quam ducimus."},
    {name: "Singh Google", title: "CEO Google", message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi asperiores eos veniam id eius dolor culpa quam, reprehenderit natus quibusdam, debitis ad harum laboriosam nulla ex illum soluta. Officia vero iusto omnis laboriosam magnam voluptatem quaerat dolor autem animi. Unde qui deserunt aut impedit recusandae nisi dolor quam ducimus."}
  ]

  return (
    <section id="testimonials" className="border flex flex-col items-center p-8 relative">
      <h2 className="text-4xl font-bold mt-6 mb-11">Testimonials</h2>
      <Carousel items={testimonials} />
      <p className="text-xl">Have you worked with me before? I'm very excited to see your review 🥳</p>
      <button
        className="text-white border border-blue-500 bg-blue-500 hover:bg-blue-400 px-4 py-3 text-xl rounded-xl"
      >
        Give your testimonial
      </button>
    </section>
  )
}
export default Testimonials;
