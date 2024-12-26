// export default function ChatsContainer() {
//     return (
//         <div className="grid grid-cols-3">
//             <div className="w-[33%] h-auto bg-red-500 aspect-square"></div>
//             <div className="w-[33%] h-auto bg-green-500 aspect-square"></div>
//             <div className="w-[33%] h-auto bg-blue-500 aspect-square"></div>
//         </div>
//     );
// }
export default function ChatsContainer() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-red-500 aspect-[4/8]"></div>
        <div className="bg-green-500 aspect-[4/8]"></div>
        <div className="bg-blue-500 aspect-[4/8]"></div>
      </div>
    );
  }
  