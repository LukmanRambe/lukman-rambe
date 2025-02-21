const Pill = ({ text }: { text: string }) => {
  return (
    <span className="px-3 py-1 text-green bg-green-tint text-sm text-center font-semibold rounded-full">
      {text}
    </span>
  );
};

export default Pill;
