export default function ChatsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
      <div className="bg-red-500 aspect-[1/2] flex justify-center items-center">ChatGPT</div>
      <div className="bg-green-500 aspect-[1/2] flex justify-center items-center">Gemini</div>
      <div className="bg-blue-500 aspect-[1/2] flex justify-center items-center">GPT</div>
    </div>
  );
}