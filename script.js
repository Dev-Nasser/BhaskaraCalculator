function Bhaskara (){
let a = document.getElementById("a").value
let b = document.getElementById("b").value
let c = document.getElementById("c").value
let delta = (b*b) - 4*a*c
let x1 = b*b + Math.sqrt(delta) / 2*a
let x2 = b*b - Math.sqrt(delta) / 2*a



 
if (delta < 0){

    swal("Delta menor que 0, impossivel prosseguir.", 
         "Pressione Esc para sair", 
         "warning", {
        dangerMode: true,
        buttons: true,
        closeOnClickOutside: false,
    })
    
}
if (delta > 0){


    swal(`Valor de delta é ${delta}, de x' é ${x1}, de x'' é ${x2} `, 
            "Pressione Esc para sair", 
            "success", {
            dangerMode: true,
            buttons: true,
            closeOnClickOutside: false, 
              
            });   
    

    }
}
    
