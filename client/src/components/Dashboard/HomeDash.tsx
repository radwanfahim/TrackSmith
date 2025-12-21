import Card from "../../ui/Card";

const HomeDash = () => {
  return (
    <div>
      <div>
        {/* text */}
        <div>
          <h1 class="text-3xl font-bold text-gray-700">Dashboard</h1>
          <p class="capitalize text-gray-700 mt-2">performance overview</p>
        </div>

        <div>
          <button></button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card />
      </div>
    </div>
  );
};

export default HomeDash;
