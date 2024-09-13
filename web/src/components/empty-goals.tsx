import { PlusIcon } from "lucide-react";

import letsStart from "../assets/lets-start-illustration.svg";
import logo from "../assets/logo-in-orbit.svg";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";

export function EmptyGoals() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-8 px-5">
      <img src={logo} alt="logo in.orbit" draggable={false} />
      <img
        src={letsStart}
        alt="ilustração de uma mulher ao lado de um foguete"
        draggable={false}
      />
      <p className="max-w-80 text-balance text-center leading-relaxed text-zinc-300">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
