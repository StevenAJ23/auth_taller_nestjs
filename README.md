# 🛡️ NestJS Authentication API

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Passport](https://img.shields.io/badge/passport-%2334E27A.svg?style=for-the-badge&logo=passport&logoColor=black)

Sistema backend robusto de autenticación y autorización construido con **NestJS**. Incluye registro, login seguro, protección de rutas mediante JWT (JSON Web Tokens) y control de acceso basado en roles (RBAC).

---

## 🚀 Características Principales

* ✅ **Registro de Usuarios:** Validación de datos con DTOs.
* 🔒 **Seguridad Avanzada:** Hasheo de contraseñas utilizando `bcrypt`.
* 🔑 **Autenticación JWT:** Generación y validación de tokens de acceso.
* 👮 **Roles de Usuario:** Sistema de permisos (Admin vs User) con Guards personalizados.
* 🛡️ **Rutas Protegidas:** Endpoints privados accesibles solo con token válido.
* 🔄 **Gestión de Cuenta:** Funcionalidad para cambiar contraseña.

---

## 🛠️ Tecnologías

* [NestJS](https://nestjs.com/) - Framework de Node.js
* [Passport.js](http://www.passportjs.org/) - Middleware de autenticación
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Encriptación
* [Class-Validator](https://github.com/typestack/class-validator) - Validación de datos

---

## ⚙️ Instalación y Ejecución

1.  **Clonar el repositorio**
    ```bash
    git clone [https://github.com/StevenAJ23/auth_taller_nestjs.git](https://github.com/StevenAJ23/auth_taller_nestjs.git)
    cd auth-taller-nestjs
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Correr el servidor (Modo Desarrollo)**
    ```bash
    npm run start:dev
    ```
    *El servidor iniciará en `http://localhost:3000`*

---

## 📡 Documentación de la API (Endpoints)

Puedes probar estos endpoints usando **Postman**.

### 🟢 Autenticación

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/register` | Registrar un nuevo usuario | Público |
| `POST` | `/auth/login` | Iniciar sesión y obtener Token | Público |

### 🟡 Usuarios y Perfil

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| `GET` | `/auth/profile` | Ver datos del usuario logueado | 🔐 Token Requerido |
| `PATCH` | `/auth/change-password` | Actualizar la contraseña | 🔐 Token Requerido |

### 🔴 Zona Administrativa (Roles)

| Método | Endpoint | Descripción | Acceso |
| :--- | :--- | :--- | :--- |
| `GET` | `/auth/admin-only` | Ruta exclusiva para administradores | 🔐 Token + Role Admin |

---

## 👤 Autor

**StevenAJ23**
* [GitHub Profile](https://github.com/StevenAJ23)

---
Developed with ❤️ using NestJS
