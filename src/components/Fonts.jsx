// Estilos de fonte
export default function Font() {
  return (
    <div className="flex justify-center items-center flex-col gap-10">
      <h1 className="text-5xl font-bold">Estilos de fontes</h1>

      <div className="flex items-center flex-col gap-5">
        <h1 className="text-8xl font-bold text-cyan-300">Título com 96px</h1>
        <h2 className="text-6xl font-bold">Título com 60px</h2>
        <h3 className="text-5xl font-bold text-yellow-300">Título com 48px</h3>
        <h4 className="text-2xl font-medium text-blue-600">Título com 24px</h4>
        <h5 className="text-lg font-medium text-green-700">Título com 18px</h5>
        <p className="text-sm font-light text-red-900">Texto com 14px</p>
      </div>
    </div>
  );
}
