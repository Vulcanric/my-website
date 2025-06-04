
const Contact = () => {

  return (
    <section id="contact" className="min-h-full border flex flex-col items-center">
      <h2 className="text-5xl my-14">Contact me</h2>
      <form
        action="/contact-form"
        method="post"
        className="form-container flex flex-col gap-5 border p-10 rounded-2xl shadow-xl"
      >
        <div className="w-full flex flex-col">
          <label className="my-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="bg-white h-12 py-2 px-4 border-2 focus:outline-offset-2 focus:outline-red-100 rounded-xl w-98"
          />
          <br />
          <label className="my-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
            className="bg-white h-12 py-2 px-4 border-2 focus:outline-offset-2 focus:outline-red-100 rounded-xl"
          />
          <br />
          <label className="my-2 text-lg" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Let's work together!"
            rows={3}
            className="bg-white py-2 px-4 border-2 focus:outline-offset-2 focus:outline-red-100 rounded-xl"
          >
          </textarea>
        </div>
        <div className="w-full border">
          <button
            className="right-0 px-6 py-2 rounded-xl text-lg w-full bg-orange-400 hover:bg-yellow-400"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
export default Contact;
