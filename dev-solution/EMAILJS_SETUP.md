# Configuración de EmailJS para el Formulario de Contacto

Este proyecto utiliza EmailJS para enviar correos electrónicos desde el formulario de contacto. Sigue estos pasos para configurarlo:

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita (tiene 200 emails/mes gratis)
3. Inicia sesión en tu cuenta

## Paso 2: Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **Email Services**
2. Haz clic en **Add New Service**
3. Selecciona tu proveedor de correo (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de correo
5. Anota el **Service ID** que se te proporciona: `service_rm2ciqp`

## Paso 3: Crear un Template de Email

1. Ve a **Email Templates**
2. Haz clic en **Create New Template**
3. Usa este formato para el template:

```
Asunto: Nueva consulta de {{from_name}}

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}

Mensaje:
{{message}}
```

4. En la sección "To Email", ingresa tu correo: `devsolutionchile@gmail.com`
5. Guarda el template y anota el **Template ID**: `template_rzm0exk`

## Paso 4: Obtener tu Public Key

1. Ve a **Account** → **General**
2. Copia tu **Public Key**: `lPZndZfWBBmeIUSrK`

## Paso 5: Configurar variables de entorno

### Para desarrollo local (opcional)

1. En la raíz del proyecto `dev-solution`, crea un archivo `.env`
2. Agrega las siguientes variables (reemplaza con tus valores reales):

```env
VITE_EMAILJS_SERVICE_ID=service_rm2ciqp
VITE_EMAILJS_TEMPLATE_ID=template_rzm0exk
VITE_EMAILJS_PUBLIC_KEY=lPZndZfWBBmeIUSrK
```

3. **IMPORTANTE**: El archivo `.env` ya está en `.gitignore`, así que tus credenciales no se subirán al repositorio.
4. Reinicia el servidor de desarrollo: `npm run dev`

### Para producción en Vercel (OBLIGATORIO)

**⚠️ IMPORTANTE**: Si estás usando Vercel para desplegar tu aplicación, DEBES configurar las variables de entorno directamente en Vercel, no solo en el archivo `.env`.

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto
3. Ve a la pestaña **Settings**
4. En el menú lateral, haz clic en **Environment Variables**
5. Haz clic en **Add New** y agrega cada una de estas variables:

   - **Key**: `VITE_EMAILJS_SERVICE_ID`
     **Value**: `service_rm2ciqp`
     **Environment**: Selecciona todas (Production, Preview, Development) o al menos Production

   - **Key**: `VITE_EMAILJS_TEMPLATE_ID`
     **Value**: `template_rzm0exk`
     **Environment**: Selecciona todas (Production, Preview, Development) o al menos Production

   - **Key**: `VITE_EMAILJS_PUBLIC_KEY`
     **Value**: `lPZndZfWBBmeIUSrK`
     **Environment**: Selecciona todas (Production, Preview, Development) o al menos Production

6. Haz clic en **Save** para cada variable
7. Después de agregar todas las variables, ve a la pestaña **Deployments**
8. Haz clic en los tres puntos (⋯) del deployment más reciente y selecciona **Redeploy** para aplicar los cambios

**Nota**: Las variables de entorno en Vercel están disponibles en tiempo de construcción (build time) para aplicaciones Vite. Es importante hacer un nuevo deployment después de agregar las variables.

## Notas importantes

- Las variables de entorno en Vite deben empezar con `VITE_` para ser accesibles en el código del cliente
- El formulario enviará los correos a `devsolutionchile@gmail.com` (configurado en el código)
- Si no configuras las variables de entorno, el formulario mostrará un error al intentar enviar
- **Para producción en Vercel**: Siempre configura las variables en el dashboard de Vercel, no solo en el archivo `.env` local
- Después de agregar las variables en Vercel, es necesario hacer un nuevo deployment para que los cambios surtan efecto
- **Seguridad**: Nunca subas tus credenciales reales a Git. El archivo `.env` está en `.gitignore` por seguridad

## Solución de problemas

- Si recibes un error de autenticación, verifica que tu Public Key sea correcta
- Asegúrate de que el nombre de las variables en el template coincidan exactamente con las que se envían desde el código
- Verifica que el Service ID y Template ID sean correctos

