# ZARA CHALLENGE

## **Instalación**

```bash
git clone https://github.com/fmarigarcia/zara_challenge.git
cd zara_challenge
npm install
```

### **Configuración de variables de entorno**

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

```ini
NEXT_PUBLIC_API_KEY=API-KEY
```

## **Ejecución**

### **Modo desarrollo**

El modo desarrollo se ejecuta en el puerto **3000**

```bash
npm run dev
```

### **Modo producción**

El **modo producción** se ejecuta en el puerto **3001**, y el mismo comando hace tanto build como ejecución

```bash
npm start
```

### **Tests**

Los **tests unitarios** de componentes pueden ser ejecutados con:

```bash
npm test
```

### **Linting y Formatting**

Puede ejecutarse de manera manual el **linting** con:

```bash
npm run lint
```

y el **formatting** con:

```bash
npm run format
```

## **Explicación de la Arquitectura y Estructura**

### **App Router (`src/app/`)**

Este proyecto utiliza el **App Router** de Next.js para manejar el enrutamiento de manera modular y escalable. Cada directorio dentro de `app/` representa una ruta en la aplicación, aprovechando las características de **React Server Components**.

- `cart/` y `product/`: Definen rutas específicas para el carrito y la página de producto.
- `layout.tsx`: Define el diseño global y persistente de la aplicación.
- `page.tsx`: Es la página de inicio.

### **Componentes (`src/components/`)**

Componentes reutilizables y modulares.

### **Hooks Personalizados (`src/hooks/`)**

- `useProductList.ts`: Custom Hook para obtener la lista de productos desde la API.

### **Iconos (`src/icons/`)**

Iconos SVG como componentes React para mejorar la reutilización y consistencia de estilo.

### **Mocks (`src/mocks/`)**

Datos mockeados para pruebas y desarrollo local sin depender de la API.

### **Servicios (`src/services/`)**

- `CartProvider.tsx`: Contexto global para manejar el estado del carrito.
- `PhoneApi.ts`: Lógica de comunicación con la API de productos.

### **Tipos (`src/types/`)**

Definiciones de tipos y modelos para productos y el carrito.

### **Testing**

Las pruebas están en la misma carpeta de los componentes, con el sufijo `.test.tsx`.

## **Despliegue**

Aprovechando las carácterísticas nativas de **NextJS**, se ha realizado un despligue de la aplicación en la plataforma **Vercel**, donde se realizan los despliegues de la aplicación diréctamente desde el repositorio de Github.

Puede verse en https://zara-challenge-chi.vercel.app/
