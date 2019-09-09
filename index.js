// module.exports = () => {
//   // ...
// };

const fs=require('fs');
const path = require ('path');
const fetch = require('node-fetch');
const marked = require('marked'); //para extraer links
const readmeFile = './README.md';//mi readme
const reading = require('./reading.js')
const markdownLinkExtractor = require('markdown-link-extractor');
// const validate = require('validate.js');//archivo para validar
// const stats = require('stats.js'); //archivo para ver links rotos


const extName =()=> {
    return new Promise((res,rej)=>{
         if (path.extname(file)==='.md'){
          fs.readFile(file, 'utf-8', (err, data) => {
            if (err) 
               rej(err); 
            else     
            res (data);       
          })
         }   
             
        })
     .then (data => extIsMd(data) )
    }
    module.exports = extName();

 let linksIn= [];
 
 reading(readmeFile)
    .then(data=>{
        const linksIn = marked(data);

        linksIn.forEach(Element => {
        fetch(Element)
            if (links===200) {
                return ('Link Correcto')
                
            } else if(links === 404) {
                return ('Ya no existe')
            }
            
        });
    })