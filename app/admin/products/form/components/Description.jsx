"use client";

export default function Description({ data, handleData }) {
  const handleChange = (event) => {
    handleData("description", event.target.value);
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl h-full">
      <h1 className="font-semibold">Description</h1>
      <textarea
        value={data?.description}
        onChange={handleChange}
        placeholder="Enter your description here..."
        className="p-2 border rounded-md h-48"
      />
    </section>
  );
}
