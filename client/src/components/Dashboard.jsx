import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout/Layout';
import axios from 'axios';

const Dashboard = () => {
  const todos = useSelector((state) => state.user.todo);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [formData, setFormData] = useState({
    task: '',
    description: '',
    priority: '',
  });

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/v1/delete-todo/${id}`);
    if (response.data.success) {
      alert('Deleted');
      window.location.reload();
    }
  };

  const handleUpdate = (todo) => {
    setSelectedTodo(todo);
    setFormData({
      task: todo.task,
      description: todo.description,
      priority: todo.priority,
    });
    setIsModalOpen(true);
  };

  const handleModalSubmit = async () => {
    const response = await axios.put(`http://localhost:8080/api/v1/update-todo/${selectedTodo.id}`, formData);
    if (response.data.success) {
      alert('Updated');
      setIsModalOpen(false);
      window.location.reload(); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="dashboard p-4">
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Your Todo List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Task</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Description</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Priority</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Created At</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {todos && todos.map((todo) => (
                <tr key={todo.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-800">{todo.task}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{todo.description}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{todo.priority}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    {todo.created_at.split('T')[0]}
                  </td>
                  <td className="px-4 py-2 text-sm">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleUpdate(todo)}
                        className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

{/* {Popup page for loading updated data} */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
              <h3 className="text-lg font-semibold mb-4">Update Todo</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="task"
                  value={formData.task}
                  onChange={handleChange}
                  placeholder="Task"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  placeholder="Priority"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300 mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleModalSubmit}
                  className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
