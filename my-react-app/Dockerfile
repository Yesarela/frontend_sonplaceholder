# Versión de Node a utilizar
FROM node:20

# Espacio de trabajo dentro del contenedor
WORKDIR /app

# Copiando paquetes (package.json & package-lock.json)
COPY package*.json ./

# Instalanado dependendencias
RUN npm install
RUN npm install -g create-react-app
RUN npm install react-bootstrap bootstrap

# Copiando el resto de la solución
COPY . .

# Construyendo y ejecutando la solución
RUN npm run build

# Abriendo puerto 3000
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]