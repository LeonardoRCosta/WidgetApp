import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';
import { Popover } from '@headlessui/react' //Biblioteca para acessibilidade
import { WidgetForm } from './WidgetForm';

//a classe group irá identificar que todo o conteúdo do botão funciona como um grupo

//permitindo assim realizar o hover no botão

//max-w representa a largura máxima do objeto

//Sempre que precisamos que algo mude de acordo com uma ação do usuário utilizamos os Estados

//Estado é uma variável como qualquer outra 

//porém o react fica observando elas e quando seu valor for alterado ele cria a interface do componente com o valor atualizado das variáveis de Estado

//o array recebe um booleano que controla, neste caso, se o Widget está aberto ou não e também uma função para alterar o valor do booleano

//a função toggleWidgetVisibility alterna a visibilidade do Widget sempre que chamada, ou seja irá alterar o valor do booleano isWidgetOpen

//a propriedade onClick irá receber a função e fará com que sempre que o usuário clicar no botão o Widget abra
export function Widget(){
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback 
                </span>
            </Popover.Button>
        </Popover>
    )
}