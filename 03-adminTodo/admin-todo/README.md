/\*
🛠️ Development Setup

Sigue estos pasos para levantar el entorno de desarrollo de la aplicación.

---

1. Levantar la base de datos (Docker)

Asegúrate de tener Docker instalado y ejecuta:

    docker compose up -d

Esto levantará los contenedores definidos en `docker-compose.yml`.

---

2. Configurar Prisma

Inicializa y migra la base de datos con Prisma:

    npx prisma init
    npx prisma migrate dev --name init

Esto generará los archivos necesarios y aplicará la primera migración a tu base de datos.

---

3. Configurar variables de entorno
4. Ejectar el seed para crear la base de datos local [crear la base de datos]{http://localhost:3000/api/seed}

5. Renombra el archivo `.env-template` a `.env`:

   mv .env-template .env

6. Reemplaza los valores de las variables de entorno con tus configuraciones locales (como la URL de conexión a la base de datos).

---

🚀 Producción

(Pendiente: agrega aquí los pasos necesarios para desplegar en producción, incluyendo compilación, variables de entorno y otros requisitos.)

---

🚧 Staging

(Pendiente: documenta cómo levantar el entorno de staging si es diferente de producción.)

✅ Consejo:
Usa ramas separadas para desarrollo (`dev`), staging (`stage`) y producción (`main` o `prod`) para facilitar despliegues seguros.
\*/

#include <iostream>
int main() {
std::cout << "Este archivo solo contiene el README como comentario.\n";
return 0;
}
