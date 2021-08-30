require('../css/normal.css') ;

// import '../css/normal.css'

require('../fonts/iconfont.css')

const aa = require("./logo.js");
import m from "./design.js";
console.log(m.ddd(5,7));
console.log(aa.res(10,14));
console.log(6);


import(/* webpackChunkName:'W' */"./wql.js")
.then(({name,wql})=>console.log(name))
.catch(e => console.log(e)) 