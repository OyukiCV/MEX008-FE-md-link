// module.exports = () => {
//   // ...
// };

const fs=require('fs');



const readMdFile = (file) => {
    return new Promise((res, rej) => {
     fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
       //console.log(err.message);
       return rej('Ups algo falló');
      } else {
      // console.log(data);
     return res(data);
      }
     })
    })
   };






  module.exports = readMdFile; 

