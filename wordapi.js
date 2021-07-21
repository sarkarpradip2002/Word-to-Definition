function fetch(){
    let fetch=new XMLHttpRequest();
    let word=document.getElementById('inputword').value;
    let getdefinition=document.getElementById('definition');
    getdefinition.value="";
    console.log(getdefinition)

    fetch.open('GET',`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`,true);

    fetch.onprogress=function(){
        getdefinition.value="On Progress..."
    }

    fetch.onload=function(){
         if(this.status===200)
         {
             let obj=JSON.parse(this.responseText);
             let defi=obj[0].meanings ;
             let  final=defi[0].definitions;
             getdefinition.value=final[0].definition;            
         }
         else{
             getdefinition.value="Sorry!!Can't find any!";
         }
    }

    fetch.send();
}