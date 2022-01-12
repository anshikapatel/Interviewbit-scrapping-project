// node ans.js --source=https://www.imdb.com/india/top-rated-indian-movies/
let minimist=require("minimist");
let axios=require("axios");
let jsdom=require("jsdom");
let excel4node=require("excel4node");
let fs=require("fs");

let args=minimist(process.argv);
let promise = axios.get(args.source);
promise.then(function(response)
{
let all=[];
    let html=response.data;
    let dom=new jsdom.JSDOM(html);
    let document=dom.window.document;
  let title=document.querySelectorAll("td.titleColumn > a");
  for(let i=0;i<title.length;i++)
  {
  all.push(title[i].textContent);}
  let matchJson=JSON.stringify(all);
  fs.writeFileSync("matches.json",matchJson,"utf-8");
})