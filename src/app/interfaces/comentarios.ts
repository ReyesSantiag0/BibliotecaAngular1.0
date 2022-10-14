export interface Sesion{
    correo: string,
    contrasenia:string
}

export interface Registro{
    id?: string;
    nombre: string,
    isbn:string,
    editorial:string,
    autor:string
}

export interface Libro{
    id?: string;
    nombre:string;
    isbn:string;
    editorial:string;
    autor:string
}

export interface Administrador{
    id?: string;
    nombre:string;
    apellido:string;
    celular:string;
    ndocumento:string;
    correo:string;
    contrasenia:string
}

export interface Prestamo{
    id?: string;
    nombre:string;
    apellido:string;
    tipodoc:string;
    ndocumento:string;
    correo:string;
    celular:string;
    fprestamo:string;
    fdevolucion:string;
}