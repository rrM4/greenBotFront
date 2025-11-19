import MessageComponent from "@/components/MessageComponent";

const ChatBotDemo = () => {
    return(
        <main className="flex flex-col items-center h-screen justify-center w-[90%] mx-auto">
            <h1 className="text-black font-semibold text-xl">GreenBot AI</h1>
            <div className="w-full flex flex-col h-[calc(100%_-_200px)] no-scrollbar gap-8 overflow-y-auto">
                <MessageComponent
                    text={"Hola"}
                    belongsTo={true}
                />

                <MessageComponent
                    text={"Soy un asistente virtual dedicado a la sostenibilidad y el desarrollo sustentable. ¿En qué puedo ayudarte hoy? ¿Tienes alguna pregunta sobre energías renovables, reciclaje, conservación de la biodiversidad o algún otro tema relacionado?"}
                    belongsTo={false}
                />

                <MessageComponent
                    text={"Explicame el estado actual de como\n" +
                        "esta el calentamiento global."}
                    belongsTo={true}
                />
                <MessageComponent
                    text={"El estado actual del calentamiento global es de urgencia climática.\n" +
                        "\n" +
                        "1. El Diagnóstico: ¿Cuánto se ha calentado?\n" +
                        "El planeta ya se ha calentado aproximadamente 1.2c (grados Celsius) en promedio, en comparación con los niveles preindustriales (antes de 1850).\n" +
                        "Puede que 1.2c no parezca mucho, pero este aumento en el promedio global es suficiente para alterar drásticamente nuestros sistemas climáticos. El objetivo internacional, establecido en el Acuerdo de París, es limitar este calentamiento a 1.5c para evitar los impactos más catastróficos. Estamos peligrosamente cerca de ese límite."}
                    belongsTo={false}
                />
            </div>

            <div className="mt-5 flex justify-end items-center">
                <textarea placeholder="Piensa lo que quieras" className=" bg-[#F5F5F5]">sasd</textarea>
                <button className="flex items-center justify-center mainBg p-4 rounded-full w-18 h-18"><svg width="30" height="30" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3058 0.114258C18.9041 -0.445265 20.4245 1.15331 19.8917 2.83301L14.59 19.5488C14.0304 21.3128 11.7469 21.5479 10.8722 19.9316L7.68079 14.0332L10.796 10.7598C11.0816 10.4597 11.0816 9.97292 10.796 9.67285C10.5106 9.37334 10.0483 9.37334 9.76282 9.67285L6.64661 12.9463L1.0343 9.59277C-0.503556 8.67345 -0.280033 6.27452 1.39856 5.68652L17.3058 0.114258Z" fill="white"/>
                </svg>
                </button>
            </div>

        </main>
    )
}

export default ChatBotDemo;