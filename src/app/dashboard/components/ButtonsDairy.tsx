export function ButtonsDairy({handleComponent}: {handleComponent: any}) {

    const buttonsForm = [
        {
          button: {
            eventos: "Eventos",
          },
        },
        {
          button: {
            tareas: "Tareas",
          },
        },
        {
          button: {
            notas: "Notas",
          },
        },
      ];

      
  const cssButton = (index: any) => {
    switch (index) {
      case 'eventos':
        return 'bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out';
      case 'tareas':
        return 'bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out';
      case 'notas':
        return 'bg-green-400 hover:bg-green-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out';
      default:
        return 'bg-blue-400 hover:bg-pink-500 py-2 px-4 rounded-lg transition duration-300 ease-in-out'
    }
  };
    return (
        <div className="flex space-x-4 items-center">
          {buttonsForm.map((item, indexButton) => (
            <div key={indexButton}>
              {Object.entries(item.button).map(([key, value], indexButton) => (
                <button
                  key={indexButton}
                  className={`text-sm text-white font-bold ${cssButton(key)}`}
                  onClick={() => {
                    handleComponent(key);
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          ))}
        </div>
    )
}
