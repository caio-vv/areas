function areaTriangulo(base, altura) {
    return 0.5 * base * altura;
}

function areaCirculo(raio){
    return 3.14 * raio * raio;
}

function areaRetangulo(largura, altura){
    return largura * altura
}

module.exports = {areaCirculo, areaRetangulo, areaTriangulo}