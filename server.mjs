import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname} from 'node:path';
const allowed = new Set(['index.html','app.js','core.js','style.css','questions.json']);
http.createServer(async(req,res)=>{
 const file = new URL(req.url,'http://localhost').pathname.slice(1)||'index.html';
 if(!allowed.has(file)){res.writeHead(404);res.end('Not found');return;}
 try{const data=await readFile(new URL(file,import.meta.url));res.setHeader('Content-Type',({'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json'})[extname(file)]);res.setHeader('X-Content-Type-Options','nosniff');res.end(data);}catch{res.writeHead(404);res.end('Not found');}
}).listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>console.log('Open http://localhost:'+(process.env.PORT||4173)));
