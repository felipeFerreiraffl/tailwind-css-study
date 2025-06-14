// Estilos de posicionamento
export default function Positioning() {
  return (
    <div className="flex items-center flex-col gap-8">
      <h1 className="text-5xl font-bold">Estilos de posicionamento</h1>

      <div className="flex justify-center items-center bg-black text-white w-24 h-24">
        div
      </div>

      <div className="flex justify-end items-center bg-black text-white w-2xs h-8">
        div
      </div>

      <div className="flex justify-center items-start bg-black text-white w-14 h-32">
        div
      </div>
    </div>
  );
}
