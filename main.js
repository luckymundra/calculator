(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    // let op = document.querySelector('.opration');
    // let i = 0;
    // let k = 0;
    // let ans;
    // let intArr = [];
    // let opration = [] ;
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let attr = e.target.getAttribute('data-num');
            // if(attr == '+' || attr == '-' || attr == '/' || attr == '*'){
            //     screen.value += attr;
            //     // opration[k] = attr ;
            //     opration.push(equal.value);
            //     opration.push(attr);
            //     console.log(equal.value);
            //     equal.value = '';
            //     k++;
            // }else{
                let value = e.target.dataset.num;
                // intArr[i] = value;
                // console.log(i);
                screen.value += value;
                equal.value += value;
                // i++;
            // }
            
        });
    });
    

    equal.addEventListener('click', function(e){
        // opration.push(equal.value);
        // let ans = eval(opration.join(''));
        
        if(screen.value === ''){
            screen.value = ""
        }else{
            let answer = eval(screen.value.toString());
            screen.value = answer;
        }
    })

    clear.addEventListener('click',function(e){
        screen.value = "" ;
    } )


     
})();










