import React, { useState } from 'react';

const TaskSubmit = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Start',
    commitMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // You can integrate this with your backend or GitHub API
  };

  return (
    <div className=" bg-gray-900 text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">📝 Task Submission</h2>

        <div>
          <label className="block mb-1">Working Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter task title"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Working Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the task"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Start">Start</option>
            <option value="Continious">Continious</option>
            <option value="Complete">Complete</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">GitHub Commit Message</label>
          <input
            type="text"
            name="commitMessage"
            value={formData.commitMessage}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter commit message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
        >
          🚀 Submit Task
        </button>
      </form>
    </div>
  );
};

export default TaskSubmit;