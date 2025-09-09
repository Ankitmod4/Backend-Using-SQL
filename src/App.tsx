import  { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://34.224.81.213:8080/api/v1/createdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response:", result);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create User</h2>

        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={formData.Username}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="email"
          name="Email"
          placeholder="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={formData.Password}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
