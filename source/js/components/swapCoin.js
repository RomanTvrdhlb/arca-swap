import vars from '../_vars';

const {form} = vars;
const arc = form.arc;
const usdt = form.usdt;


arc.addEventListener('keyup', function(){
    usdt.value = converterArc(arc.value)
})

usdt.addEventListener('keyup', function(){
    arc.value = converterUsdt(usdt.value)
})

const converterArc = function(arc){return arc/4}
const converterUsdt = function(usdt){return usdt*4}

