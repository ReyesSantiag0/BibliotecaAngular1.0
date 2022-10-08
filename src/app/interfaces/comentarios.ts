export interface Sesion{
    correo: string,
    contrasenia:string
}

export interface Registro{
    nombre: string,
    isbn:string,
    editorial:string,
    autor:string
}

export interface Libro{
 
    nombre:string;
    isbn:string;
    editorial:string;
    autor:string
}

export interface Administrador{
 
    nombre:string;
    apellido:string;
    celular:string;
    ndocumento:string;
    correo:string;
    contrasenia:string
}

export interface Prestamo{
 
    nombre:string;
    apellido:string;
    tipodoc:string;
    ndocumento:string;
    correo:string;
    celular:string;
    fprestamo:Date;
    fdevolucion:Date;
}