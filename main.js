
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'La Calculadora está lista para usar',
    showConfirmButton: false,
    timer: 1500
})
let op;
    document.querySelector('#suma').addEventListener('click', () =>{
        op = '+';
    });
    document.querySelector('#resta').addEventListener('click', () =>{
        op = '-';
    });
    document.querySelector('#multiplicacion').addEventListener('click', () =>{
        op = '*';
    });
    document.querySelector('#division').addEventListener('click', () =>{
        op = '/';
    });

    document.querySelector('#calcular').addEventListener('click', () =>{
        const n1 = parseInt(document.querySelector('#n1').value);
        const n2 = parseInt(document.querySelector('#n2').value);
        
        let r;
        if(op == '+'){
            r = n1 + n2;
        }else if( op == '-'){
            r = n1 - n2;
        }else if(op == '*'){
            r = n1 * n2;
        }else if(op == '/'){
            r = n1 / n2;
        }
        document.querySelector('#r').innerHTML = r;
    });
    



const resultado = document.querySelector('#calcular')



resultado.addEventListener ('click', agregoResultado)
function agregoResultado (evt){
    evt.preventDefault ();
    
    const resultado = document.querySelector ('#r').value
    
    
    sessionStorage.setItem ("Resultado",resultado );

}








