let count=0;
let names=prompt('enter your name','')

let para=document.getElementById('para');
para.innerText=names
function func(){

    let t_id=document.getElementById('textareaid');
    let t_id_value=t_id.value;
    console.log(t_id_value)

    var c_data=document.createElement('div');
    c_data.className = "comment";
    c_data.textContent=t_id_value;
    // console.log(c_data)


    // this line gives  an error to me before ,because iam getting the elemnt using the class name ,
    //so the class will return the group of elements even thought the class is empty , but here i need to use only single element that is 
    // so need slelect the div using 'id' instaed of 'class' , or we can mention the index of the elemnt in the class
    // as same as i did here , if it was id then we need to do like this :
    // let appendclass=document.getElementsById('comment-data');
    
    let appendclass=document.getElementsByClassName('comment-data')[0];

    appendclass.appendChild(c_data)

    t_id.value=''

    // trail and error code
    // let TA=document.createElement('textarea')
    // let divadd=document.querySelector('div')
    // divadd.appendChild(TA)
    count+=1

    console.log(count)

    if (count==50){
        // Reload the page
        location.reload();
    
     }
    
}

var colour='white';
function changemode(){
    
    let modebtn=document.getElementById('mode');
    // let body=document.body
    // let colour=window.getComputedStyle(body).backgroundColor
    // console.log(colour);
    if (colour=== 'white'){
        colour='black';
        document.body.style.backgroundColor='#333333';
        document.body.style.color='white';
    }else{
        colour='white';
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
    
    }
    
    console.log(colour);

}

