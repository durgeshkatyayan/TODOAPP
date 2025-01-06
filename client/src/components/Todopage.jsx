import React, { useState } from "react";
import Layout from "./Layout/Layout";
import axios from "axios";

const AdminPanel = () => {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low"); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!task || !description) {
            alert("Please fill in the task title and description.");
            return;
        }

        const newTodo = { task, description, priority };
        try {
            const response = await axios.post("http://localhost:8080/api/v1/create-todo", newTodo);
            if (response.data.success) {
                setTask("");
                setDescription("");
                setPriority("low");
                alert("To-Do created successfully!");
            }
        } catch (error) {
            console.log("Error creating to-do:", error);
        }
    };

    return (
        <Layout>
            <div className="h-full bg-gray-50 py-12 px-4">
                <div className="max-w-lg mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4">
                            <h1 className="text-2xl font-bold text-white text-center">
                                Admin Panel - Create To-Do
                            </h1>
                        </div>

                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="task"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Task Title
                                    </label>
                                    <input
                                        id="task"
                                        type="text"
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                        placeholder="Enter task title"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                                        placeholder="Enter task description"
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div>
                                    <label
                                        htmlFor="priority"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Priority
                                    </label>
                                    <select
                                        id="priority"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition duration-200"
                                    >
                                        Create To-Do
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminPanel;
