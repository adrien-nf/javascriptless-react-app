interface Flash {
  type: "success" | "error";
  text: string;
}

export function FlashToast({ flash }: { flash: Flash }) {
  return (
    <div
      className={`w-full max-w-2xl mx-auto p-4 rounded border mt-4 ${
        flash.type === "success"
          ? "bg-green-100 text-green-800 border-green-300"
          : "bg-red-100 text-red-800 border-red-300"
      }`}
    >
      {flash.text}
    </div>
  );
}
