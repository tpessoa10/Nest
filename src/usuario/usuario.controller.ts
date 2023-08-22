import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDto } from "./dto/criaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import {v4 as uuid} from 'uuid'
import { ListaUsuarioDto } from "./dto/listaUsuario.dto";
import { AtualizaUsuarioDto } from "./dto/atualizadoUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{

    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDto){
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.email = dadosUsuario.email
        usuarioEntity.nome = dadosUsuario.nome
        usuarioEntity.senha = dadosUsuario.senha
        usuarioEntity.id = uuid()
        this.usuarioRepository.salvar(usuarioEntity)
        return { usuario: new ListaUsuarioDto(usuarioEntity.id, usuarioEntity.nome), message: 'usuario criado com sucesso'}
    }

    @Get()
    async listaUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listaUsuarios()
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDto(
                usuario.id,
                usuario.nome
            )
        )
        console.log(usuariosLista)
        console.log(usuariosSalvos)
        return usuariosLista
    }

    @Put('/:id')
    async atualizarUsuarios(@Param('id') id: string, @Body() novosDados:AtualizaUsuarioDto){
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados)
        return {usuario: usuarioAtualizado, messagem: 'Usuario atualizado com sucesso'}
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id:string){
        const usuarioRemovido = await this.usuarioRepository.remove(id)

        return {
            usuario: usuarioRemovido,
            messagem: 'usuario removido com sucesso'
        }
    }

}