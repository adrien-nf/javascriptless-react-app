import React from "react";

interface StripeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function StripeButton({
  children = "Pay with Stripe",
  disabled,
  className = "",
  ...props
}: StripeButtonProps) {
  const baseClasses = `
    w-full
    py-3
    rounded-lg
    font-semibold
    text-white
    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    shadow-lg
    transform transition-transform duration-200
    flex items-center justify-center gap-2
    relative
    overflow-hidden
  `;

  const stateClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-lg"
    : "hover:scale-105 hover:shadow-xl active:scale-95";

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${baseClasses} ${stateClasses} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <span
          className="
            absolute inset-0 bg-white/10
            rounded-lg
            opacity-0
            hover:opacity-20
            transition-opacity
          "
        ></span>
      )}
    </button>
  );
}
