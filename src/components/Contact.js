const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Contact Us Page</h1>
      <input
        type="text"
        className="border border-black p-2 m-2"
        placeholder="name"
      />
      <input
        type="text"
        className="border border-black p-2 m-2"
        placeholder="mesage"
      />
      <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
        Submit
      </button>
    </div>
  );
};
export default Contact;
