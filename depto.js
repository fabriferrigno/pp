console.log('activo');

document.querySelector('#botoncasa1').addEventListener('click', traerdatos);

function traerdatos(){
    //console.log('funcion activada');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','depto.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#respuesta1');
            res.innerHTML = ''; 

            for(let item of datos){
                res.innerHTML = 
                <div>
                   <p>${item.Precio}</p>
                   <p>${item.Ubicacion}</p>
                   <p>${item.Superficie}</p>
                   <p>${item.Descripcion}</p>
                </div>
                
            }
        }
    }
}
