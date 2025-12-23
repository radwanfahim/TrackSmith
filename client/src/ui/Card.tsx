interface CardProps {
  ico: Function;
  text: string;
  icoStyle: string;
  icoStyleBg: string;
}

const Card = ({ ico, text, icoStyle, icoStyleBg }: CardProps) => {
  const Ico = ico;

  return (
    <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-center gap-3">
        <div class={`p-3 rounded-lg ${icoStyleBg}`}>
          {/* ico */}
          <Ico class={`w-6 h-6 ${icoStyle}`} />
        </div>
        {/* text */}
        <h3 class="text-gray-600 text-lg font-medium mb-1">{text}</h3>
      </div>

      <p class="text-3xl font-bold text-gray-900 mt-3">1</p>
    </div>
  );
};

export default Card;
