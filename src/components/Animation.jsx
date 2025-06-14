export default function Animation() {
  return (
    <div className="flex items-center flex-col gap-8">
      <h1 className="text-5xl font-bold">Estilos de animação</h1>

      <div className="flex justify-center items-center p-4 border-2 border-black border-solid">
        div
      </div>

      <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-200 cursor-pointer ease-in-out duration-300 text-gray-200 p-10 rounded-xl border-2  border-black border-solid">
        div
      </div>

      <div className="flex justify-center items-center bg-amber-800 text-gray-200 p-10 rounded-full border-2 cursor-pointer ease-in-out hover:scale-110 duration-1000 border-black border-solid">
        div
      </div>
    </div>
  );
}
