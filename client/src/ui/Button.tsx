interface ButtonProps {
  icon: Function;
  text: string;
  style: string;
}

const Button = ({ icon, text, style }: ButtonProps) => {
  const Icon = icon;

  return (
    <button class={style}>
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
