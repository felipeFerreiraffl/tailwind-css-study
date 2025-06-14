export default function Spacing() {
  return (
    <div className="flex items-center flex-col gap-8">
      <h1 className="text-5xl font-bold">Estilos de espaçamento</h1>

      <div className="flex justify-center items-center p-4 border-2 border-black border-solid">
        div
      </div>

      <div className="flex justify-center items-center bg-emerald-800 text-gray-200 p-10 rounded-xl border-2  border-black border-solid">
        div
      </div>

      <div className="flex justify-center items-center bg-amber-800 text-gray-200 p-10 rounded-full border-2  border-black border-solid">
        div
      </div>
    </div>
  );
}
