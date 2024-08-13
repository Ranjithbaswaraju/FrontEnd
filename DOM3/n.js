let str=prompt("Enter the String :")
main=[]
let rows=+prompt("Enter the Number of rows :")
       for(i=1;i<=rows;i++){
           arr=[]
           for(j=0;j<str.length;j++){
               arr.push(" ")
           }
           main.push(arr)
       }

       let row=0
       down=false;
       for(i in str){
           main[row][i]=str[i]
           if(row==0){
               down=true
           }
           if(row==rows-1){
               down=false
           }
           if(down==true){
               row++
           }
           else{
               row--
           }
       }
       for(i of main){
           console.log(i.join(""))
       }
       