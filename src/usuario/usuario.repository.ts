import { Injectable } from "@nestjs/common"

@Injectable()
export class UsuarioRepository{
    private usuarios = []

    async salvar(usuario){
        this.usuarios.push(usuario)
    }

    async listaUsuarios(){
        return this.usuarios
    }

    async existeComEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.emai === email
        )

        return possivelUsuario !== undefined
    }
}