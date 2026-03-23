import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Usuario } from "./model/usuario.model";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly repository: Repository<Usuario>
    ) {
    }

    getAll() {
        return 'Hola Servicio';
    }

    getById() {

    }

    saveOrUpdate() {

    }

    delete() {

    }
}