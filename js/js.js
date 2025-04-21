const txtentra = document.getElementById('myNum')
const premio = document.getElementById('premio')
const res = document.getElementById('res')
const tenta = document.getElementById('tenta')
const click = document.querySelector('#click')
const reset = document.getElementById('reset')
let cont = 0
let numAlea = Math.floor(Math.random() * 100) + 1;
click.addEventListener('click', () => {
   
    event.preventDefault()
    const entra = txtentra.value
    cont++
        if(entra<1 || entra>100){
            tenta.textContent = 'Invalido (1 A 100)'
            cont--
        } 
        else  if(entra>numAlea){
            tenta.textContent = 'Passou Longe, Voe Baixo'
         
         }else if(entra<numAlea){
            tenta.textContent = 'Passou longe,Voe Alto'
    }    else{
        cont--
        tenta.textContent = `🎯 Acertou! O número era ${numAlea}.`;
        setTimeout(()=> {
         tenta.textContent =' Aguarde Seu Premiokkk'
        },2000)
        setTimeout(() => {
            const img = document.getElementById('minhaImagem');
       
        img.classList.remove('escondida');
        img.classList.add('mostrar')
        premio.style.display ='block'
        }, 4000);
       


        click.style.display = 'none'
        reset.style.display= 'inline-block'
        
    } res.textContent = `Tentativas: ${cont}`;
      txtentra.value = ''
})
reset.addEventListener('click', () => {
    location.reload(); // recarrega a página
});
