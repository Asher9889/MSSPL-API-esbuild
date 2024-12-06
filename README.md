# Learning
- iisnode file is auto generated when browser opens.
- We need to provide node_modules built along with package.json file
- No need to provide port because in server we decide what port should be assign.


# Choosing a Build Tool(webpack)


- Babel : For transpiling modern JavaScript to older syntax.

- Webpack: For bundling and optimizing code. <br/>
    - to install webpack
        ```npm install --save-dev webpack webpack-cli```
    - Create a Webpack Configuration file in root:
         ```Add a webpack.config.js file```
    - Add Script
        ```"build": "webpack"```
    
    - Content inside webpack.config.js


```javascript
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: './src/app.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Name of the output file
  },
  target: 'node', // Specifies that the bundle is for Node.js
  mode: 'production', // Use 'development' for development mode
};

```

  



- esbuild: A faster alternative to Babel/webpack.
    - to install esbuid
        ```npm install --save-dev esbuild```
    - Now add script 
        ```"build": "esbuild src/index.js --bundle --platform=node --outfile=dist/index.js"```
    
- pkg: To package your Node.js project into a single executable file.

# How to host Node backend in IIS Server
- Double Click handler mapping. Add Module Mapping
    - Reuqest path: ```bundle.js``` or ```index.js``` as per the build file name
    - Module : ```iisnode```
    - Name: ```iisnode``` 

        ``Enjoy Hosting``