const inp = document.getElementById('input');

const btn = document.getElementById('button');

const error =document.getElementById('error');

const continer = document.getElementsByClassName('continer')[0];


const cleare = document.getElementsByClassName('cleare')[0];

const myul = document.getElementsByClassName('myul')[0];
btn.addEventListener('click' , (e) => {
    simp = inp.value 

    if(simp == ''){
        error.innerHTML='please write some text!';
        return;
    }else{
        error.innerHTML='';
    }

    // ------------------

    const li = document.createElement('li');
    li.className='li';
    li.textContent= simp;

    const icon = document.createElement('i')
    icon.className='icon';
    icon.innerHTML='x';

    li.appendChild(icon);

    myul.appendChild(li);

    continer.style.display='flex';
    // ------------------

    console.log(myul);
})


//---------------------------------- step two

// ما اگر در پایین یوال لیست رو اول صدا زدیم بعد
// در یوال لیست رویه خیلی چیزا دسترسی داریم
//مثل خود یوال بعد ال ای بعد آی
// ما در اینجا میخوایهم با دست زدن به آِ 
// همه چیز حذف بشه

    function onclick (e){
        // console.log(e.target.parentElement.remove()); // اینجا اگر روی 
        // یول کلیک کنیم همیش پاک میشه
        if(e.target.classList.contains('icon')){
            e.target.parentElement.remove();
        }
    };
    //در بالا ما گفتیم که آغای یو الی که سلکت کردیم رو بگیر 
    //و در اون دنبال تگی با کلاس آیکون بگرد
    //و اگر اینطور بود پرنتشو یعنی کلا ال آیشو پاک کن


myul.addEventListener('click' , onclick )


//cleare All


cleare.addEventListener('click' , (e) =>{

     myul.innerHTML='';
     continer.style.display='none'

})
