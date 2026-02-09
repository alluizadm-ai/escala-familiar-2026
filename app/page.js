export default function Home() {
  const escalas = [
    {
      mes: "Fevereiro",
      sabado: "14/02/2026",
      domingo: "15/02/2026",
      responsavel: "Eduardo",
    },
    {
      mes: "Fevereiro",
      sabado: "21/02/2026",
      domingo: "22/02/2026",
      responsavel: "André",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Escala Familiar 2026
        </h1>

        <div className="grid gap-6">
          {escalas.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500 mb-2">
                Mês: {item.mes}
              </p>
              <p className="font-semibold">
                Sábado: {item.sabado}
              </p>
              <p className="font-semibold mb-3">
                Domingo: {item.domingo}
              </p>

              <div className="bg-blue-50 rounded-md p-2 text-blue-700 font-medium">
                Responsável: {item.responsavel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

