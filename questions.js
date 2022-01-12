// node questions.js --source1=https://www.interviewbit.com/courses/programming/topics/arrays --excel=allquestion.csv --source2=https://www.interviewbit.com/courses/programming/topics/dynamic-programming/
let minimist=require("minimist");
let axios=require("axios");
let jsdom=require("jsdom");
let excel4node=require("excel4node");

let fs=require("fs");
let args=minimist(process.argv);
let promise1=axios.get(args.source1)
let promise2=axios.get(args.source2)
let all=[];
let dp=[];
promise1.then(function(response)
{
    let html=response.data;
    
    let dom=new jsdom.JSDOM(html);
    let document=dom.window.document;
    let title=document.title;
   let topic1= document.querySelectorAll("#bucket-50 > table > tbody > tr > td > a");
   let topic3=document.querySelectorAll("#bucket-56 > table > tbody > tr > td > a");
   let topic2=document.querySelectorAll("#bucket-51 > table > tbody > tr > td > a");
   let topic4=document.querySelectorAll("#bucket-54 > table > tbody > tr > td > a");
   let topic5=document.querySelectorAll("#bucket-55 > table > tbody > tr > td > a");
   let topic6=document.querySelectorAll("#bucket-83 > table > tbody > tr > td > a");
   let topic7=document.querySelectorAll("#bucket-53 > table > tbody > tr > td > a");
   let topic8=document.querySelectorAll("#bucket-52 > table > tbody > tr > td > a");
        let topics=[];
        for(let i=0;i<topic1.length;i++){
      topics=topic1[i].textContent;
        all.push(topics);}
        for(let i=0;i<topic2.length;i++){
            topics=topic2[i].textContent;
              all.push(topics);}
              for(let i=0;i<topic3.length;i++){
                topics=topic3[i].textContent;
                  all.push(topics);}
                  for(let i=0;i<topic4.length;i++){
                    topics=topic4[i].textContent;
                      all.push(topics);}
                      for(let i=0;i<topic5.length;i++){
                        topics=topic5[i].textContent;
                          all.push(topics);}
                          for(let i=0;i<topic6.length;i++){
                            topics=topic6[i].textContent;
                              all.push(topics);}
                              for(let i=0;i<topic7.length;i++){
                                topics=topic7[i].textContent;
                                  all.push(topics);}
                                  for(let i=0;i<topic8.length;i++){
                                    topics=topic8[i].textContent;
                                      all.push(topics);}
        let matchJson=JSON.stringify(all);
        fs.writeFileSync("all.json",matchJson,"utf-8");
        
   })
   promise2.then(function(response)
{
    let html=response.data;
    
    let dom=new jsdom.JSDOM(html);
    let document=dom.window.document;
    let title=document.title;
   let topic1= document.querySelectorAll("#bucket-10 > table > tbody > tr > td > a");
   let topic3=document.querySelectorAll("#bucket-11 > table > tbody > tr > td > a");
   let topic2=document.querySelectorAll("#bucket-12 > table > tbody > tr > td > a");
   let topic4=document.querySelectorAll("#bucket-13 > table > tbody > tr > td > a");
   let topic5=document.querySelectorAll("#bucket-14 > table > tbody > tr > td > a");
   let topic6=document.querySelectorAll("#bucket-15 > table > tbody > tr > td > a");
   let topic7=document.querySelectorAll("#bucket-17 > table > tbody > tr > td > a");
   let topic8=document.querySelectorAll("#bucket-142 > table > tbody > tr > td > a");
   let topic9=document.querySelectorAll("#bucket-149 > table > tbody > tr > td > a");
   let topic10=document.querySelectorAll("#bucket-18 > table > tbody > tr > td > a");
   let topic11=document.querySelectorAll("#bucket-19 > table > tbody > tr > td > a");
   let topic12=document.querySelectorAll("#bucket-20 > table > tbody > tr > td > a");
   let topic13=document.querySelectorAll("#bucket-21 > table > tbody > tr > td > a");
        let topics=[];
        for(let i=0;i<topic1.length;i++){
      topics=topic1[i].textContent;
        dp.push(topics);}
        for(let i=0;i<topic2.length;i++){
            topics=topic2[i].textContent;
              dp.push(topics);}
              for(let i=0;i<topic3.length;i++){
                topics=topic3[i].textContent;
                  dp.push(topics);}
                  for(let i=0;i<topic4.length;i++){
                    topics=topic4[i].textContent;
                      dp.push(topics);}
                      for(let i=0;i<topic5.length;i++){
                        topics=topic5[i].textContent;
                          dp.push(topics);}
                          for(let i=0;i<topic6.length;i++){
                            topics=topic6[i].textContent;
                              dp.push(topics);}
                              for(let i=0;i<topic7.length;i++){
                                topics=topic7[i].textContent;
                                  dp.push(topics);}
                                  for(let i=0;i<topic8.length;i++){
                                    topics=topic8[i].textContent;
                                      dp.push(topics);}
                                      for(let i=0;i<topic9.length;i++){
                                        topics=topic9[i].textContent;
                                          dp.push(topics);}
                                          for(let i=0;i<topic10.length;i++){
                                            topics=topic10[i].textContent;
                                              dp.push(topics);}
                                              for(let i=0;i<topic11.length;i++){
                                                topics=topic11[i].textContent;
                                                  dp.push(topics);}
                                                  for(let i=0;i<topic12.length;i++){
                                                    topics=topic12[i].textContent;
                                                      dp.push(topics);}
                                                      for(let i=0;i<topic13.length;i++){
                                                        topics=topic13[i].textContent;
                                                          dp.push(topics);}
        let matchJson=JSON.stringify(dp);
        fs.writeFileSync("all.json",matchJson,"utf-8");
        createexcel(all,dp);
   })
        function createexcel(all,dp) {
            let wb=new excel4node.Workbook();
            
                let sheet1=wb.addWorksheet("Arrays");
                let sheet2=wb.addWorksheet("Dynamic Programming");
                
               
                for(let j=0;j<all.length;j++)
                {
                    sheet1.cell(j+1,1).string(all[j]);
                   
                }
                for(let j=0;j<dp.length;j++)
                {
                    sheet2.cell(j+1,1).string(dp[j]);
                   
                }
                
            
            wb.write(args.excel);
        }
    


