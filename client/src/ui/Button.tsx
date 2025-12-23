interface ButtonProps {
  icon?: Function | string;
  text: string;
  style: string;
}

const Button = ({ icon, text, style }: ButtonProps) => {
  return (
    <button class={style}>
      <div class={`${icon ? "flex" : ""}  items-center justify-center gap-2`}>
        {/* icon */}
        {icon && (
          <span class="text-2xl">
            {typeof icon === "function" ? icon({}) : icon}
          </span>
        )}

        {/* text */}
        <span class="text-lg capitalize">{text}</span>
      </div>
    </button>
  );
};

export default Button;
