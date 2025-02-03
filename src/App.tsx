import React, { useState } from 'react';
import { Activity, Heart, Scale, Moon, Mail, Phone, Utensils, Heater as Water, Brain, Plus } from 'lucide-react';

interface HealthData {
  steps: number;
  weight: number;
  sleepHours: number;
  waterIntake: number;
  calories: number;
  mood: string;
}

function App() {
  const [healthData, setHealthData] = useState<HealthData>({
    steps: 0,
    weight: 0,
    sleepHours: 0,
    waterIntake: 0,
    calories: 0,
    mood: 'good'
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHealthData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save this data to a database
    setShowForm(false);
    alert('Health data updated successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <h1 className="text-xl font-bold text-gray-900">Health Tracker</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Entry</span>
            </button>
            <div className="text-sm text-gray-500">Created by Pestingo</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Data Entry Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-6">Add Health Data</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Steps</label>
                  <input
                    type="number"
                    name="steps"
                    value={healthData.steps}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                  <input
                    type="number"
                    name="weight"
                    value={healthData.weight}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sleep Hours</label>
                  <input
                    type="number"
                    name="sleepHours"
                    value={healthData.sleepHours}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Water Intake (ml)</label>
                  <input
                    type="number"
                    name="waterIntake"
                    value={healthData.waterIntake}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Calories</label>
                  <input
                    type="number"
                    name="calories"
                    value={healthData.calories}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mood</label>
                  <select
                    name="mood"
                    value={healthData.mood}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="great">Great</option>
                    <option value="good">Good</option>
                    <option value="okay">Okay</option>
                    <option value="bad">Bad</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Activity Tracking */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="h-8 w-8 text-blue-500" />
              <h2 className="text-lg font-semibold">Activity Tracking</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Daily Steps</p>
                <p className="text-2xl font-bold">{healthData.steps.toLocaleString()}</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${Math.min((healthData.steps / 10000) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">Goal: 10,000 steps</p>
            </div>
          </div>

          {/* Weight Management */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-8 w-8 text-green-500" />
              <h2 className="text-lg font-semibold">Weight Management</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Current Weight</p>
                <p className="text-2xl font-bold">{healthData.weight} kg</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Daily Calories</p>
                <p className="text-2xl font-bold">{healthData.calories} kcal</p>
              </div>
            </div>
          </div>

          {/* Sleep Analysis */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Moon className="h-8 w-8 text-purple-500" />
              <h2 className="text-lg font-semibold">Sleep Analysis</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Sleep Duration</p>
                <p className="text-2xl font-bold">{healthData.sleepHours} hours</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-purple-500 rounded-full"
                  style={{ width: `${Math.min((healthData.sleepHours / 8) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">Goal: 8 hours</p>
            </div>
          </div>

          {/* Water Intake */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Water className="h-8 w-8 text-blue-400" />
              <h2 className="text-lg font-semibold">Water Intake</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Daily Intake</p>
                <p className="text-2xl font-bold">{healthData.waterIntake} ml</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-blue-400 rounded-full"
                  style={{ width: `${Math.min((healthData.waterIntake / 2000) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">Goal: 2,000 ml</p>
            </div>
          </div>

          {/* Nutrition */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Utensils className="h-8 w-8 text-orange-500" />
              <h2 className="text-lg font-semibold">Nutrition</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Calorie Goal</p>
                <p className="text-2xl font-bold">{healthData.calories} / 2000 kcal</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-orange-500 rounded-full"
                  style={{ width: `${Math.min((healthData.calories / 2000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Mood Tracking */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-8 w-8 text-pink-500" />
              <h2 className="text-lg font-semibold">Mood Tracking</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Current Mood</p>
                <p className="text-2xl font-bold capitalize">{healthData.mood}</p>
              </div>
              <p className="text-sm text-gray-600">Track your emotional well-being</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-500" />
              <a href="mailto:pesterpestingo@gmail.com" className="text-blue-600 hover:text-blue-800">
                pesterpestingo@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <a href="https://wa.me/27646338520" className="text-blue-600 hover:text-blue-800">
                WhatsApp: +2764 633 8520
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Health Tracker by Pestingo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;