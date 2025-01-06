import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((state) => state.user.todo);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Navbar />
      </header>

      <section className="h-[85vh] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Your Todos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {todos && todos.map((todo) => (
              <div
                key={todo.id}
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800">{todo.task}</h2>
                <p className="text-gray-600">{todo.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Priority:</strong> {todo.priority}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Created At:</strong> {new Date(todo.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
          {todos?.length === 0 && (
            <p className="text-center text-gray-500 mt-6">No todos found.</p>
          )}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} TODO APP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
