interface ButtonProps {
  icon: Function;
  text: string;
}

const Button = ({ icon, text }: ButtonProps) => {
  const Icon = icon;

  return (
    <button class="w-full bg-linear-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-lg font-medium hover:from-teal-600 hover:to-cyan-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-teal-500/30 cursor-pointer">
      <div class="flex items-center justify-center gap-2">
        {/* icon */}
        <span class="text-2xl">
          <Icon />
        </span>
        {/* text */}
        <span class="text-lg capitalize">{text}</span>
      </div>
    </button>
  );
};

export default Button;
