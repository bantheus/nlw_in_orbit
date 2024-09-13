import { PlusIcon } from 'lucide-react';

import letsStart from "./assets/lets-start-illustration.svg";
import logo from './assets/logo-in-orbit.svg';
import { Button } from './components/ui/button';

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8 container mx-auto px-5">
      <img src={logo} alt="logo in.orbit" draggable={false}/>
      <img src={letsStart} alt="ilustração de uma mulher ao lado de um foguete" draggable={false}/>
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center text-balance">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <Button>
        <PlusIcon className='size-4'/>
        Cadastrar meta
      </Button>
    </div>  
  );
}
