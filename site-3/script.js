const rostoRobo = document.getElementById('rosto-robo')
const btnCarinho = document.getElementById('btn-carinho')
const btnBronca = document.getElementById('btn-bronca')
const btnDormir = document.getElementById('btn-dormir')

btnCarinho.addEventListener('click', function(){
rostoRobo.style.backgroundColor= 'palevioletred'
rostoRobo.textContent= " ( ^_^ )"

})

btnBronca.addEventListener('click', function(){
rostoRobo.style.backgroundColor= 'purple'
rostoRobo.textContent= " ( >_< )"

})

btnDormir.addEventListener('click', function(){
rostoRobo.style.backgroundColor= 'darkblue'
rostoRobo.textContent= " ( -_- ) zZz"

})