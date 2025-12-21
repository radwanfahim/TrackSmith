import { FiPackage } from "solid-icons/fi";

const Card = () => {
  return (
    <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-start justify-between mb-4">
        <div class="p-3 bg-teal-100 rounded-lg">
          <FiPackage class="w-6 h-6 text-teal-600" />
        </div>
      </div>
      <h3 class="text-gray-600 text-sm font-medium mb-1">Today's Orders</h3>
      <p class="text-3xl font-bold text-gray-900">1</p>
    </div>
  );
};

export default Card;
