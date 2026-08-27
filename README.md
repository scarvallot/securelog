# SecureLog 

[![In Progress](https://img.shields.io/badge/In%20Progress-magenta)](https://github.com/scarvallot/securelog.git)

> Sistema de Control de Acceso y Bitácora Automatizada

SecureLog es un Mínimo Producto Viable (MVP) de una plataforma web interna diseñada para registrar los ingresos diarios de empleados a oficinas corporativas. Desarrollado bajo una arquitectura de renderizado del lado del servidor (SSR), el sistema prioriza la seguridad informática generando de forma automática un historial estricto de auditoría para cada evento clave.

## Características Principales

*   **Autenticación Segura:** Sistema de login y manejo de sesiones con contraseñas encriptadas mediante `bcrypt`.
*   **Rutas Protegidas:** Middlewares de validación para restringir el acceso del Dashboard y procesos internos únicamente a usuarios autenticados.
*   **Panel de Control (Dashboard):** Interfaz personalizada (SSR con Handlebars) para el registro de asistencia con un solo clic.
*   **Auditoría Automática (Logs):** Registro silencioso en base de datos de eventos de seguridad (`LOGIN`, `LOGOUT`, `REGISTRO_ASISTENCIA`).
*   **Precarga de Datos (Seeder):** Script de inicialización para leer y poblar la base de datos a partir de un archivo `usuarios.json` local.

## Stack 

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![Handlebars](https://img.shields.io/badge/Handlebars-f0772b?style=for-the-badge&logo=handlebars&logoColor=black) ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Instalación y Configuración

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/scarvallot/SecureLog.git
    cd SecureLog
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto para proteger tus credenciales:
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=tu_usuario_mysql
    DB_PASS=tu_contraseña_mysql
    DB_NAME=securelog_db
    SESSION_SECRET=tu_clave_secreta_super_segura
    ```

4.  **Carga Inicial de Datos (Seed):**
    Asegúrate de tener tu base de datos MySQL activa y el archivo `usuarios.json` en la raíz del proyecto. Luego, ejecuta el script de inicialización para cargar los usuarios de prueba:
    ```bash
    node seed.js
    ```

5.  **Iniciar el Servidor:**
    ```bash
    npm start
    ```
    El sistema estará disponible en `http://localhost:3000`.

<br>
  <div align="center">
    <p>Crafted by <b><a href="https://github.com/scarvallot">whiterabbit 🕳🐇</a></b> | 2026</p>
    <a href="https://github.com/scarvallot/SecureLog.git">
    </a>
  </div>
<br>