import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDto } from "./dto/criaUsuario.dto";


@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDto){
        this.usuarioRepository.salvar(dadosUsuario)
    }

    @Get()
    async listaUsuarios(){
        return this.usuarioRepository.listaUsuarios()
    }

}