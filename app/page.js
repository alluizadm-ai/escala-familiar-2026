export default function Home() {
  const escalas = [
    {
      mes: "Fevereiro",
      sabado: "14/02/2026",
      domingo: "15/02/2026",
      nome: "Eduardo",
    },
    {
      mes: "Fevereiro",
      sabado: "21/02/2026",
      domingo: "22/02/2026",
      nome: "André",
    },
    {
      mes: "Fevereiro",
      sabado: "28/02/2026",
      domingo: "01/03/2026",
      nome: "Nivaldo",
    },
    {
      mes: "Março",
      sabado: "07/03/2026",
      domingo: "08/03/2026",
      nome: "Everaldo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Escala Familiar 2026
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {escalas.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold text-indigo-600 mb-2">
                {item.mes}
              </h2>

              <p className="text-gray-700">
                <span className="font-medium">Sábado:</span> {item.sabado}
              </p>

              <p className="text-gray-700 mb-4">
                <span className="font-medium">Domingo:</span> {item.domingo}
              </p>

              <div className="bg-indigo-50 rounded-lg p-3 text-center">
                <span className="text-gray-600 text-sm">Responsável</span>
                <p className="text-xl font-semibold text-indigo-700">
                  {item.nome}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
