import { Injectable } from "@nestjs/common"
import { UsuarioEntity } from "./usuario.entity"

@Injectable()
export class UsuarioRepository{
    private usuarios:UsuarioEntity[] = []

    async salvar(usuario){
        this.usuarios.push(usuario)
    }

    async listaUsuarios(){
        return this.usuarios
    }

    async existeComEmail(email: string){
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        )

        return possivelUsuario !== undefined
    }

    async atualiza(id: string, dadosDeAtualizacao:Partial<UsuarioEntity>){
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        )
        if(!possivelUsuario){
            throw new Error('Usuário não existe')
        }

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if(chave === id){
                return
            }
            possivelUsuario[chave] = valor
        })
        return possivelUsuario
    }
} 