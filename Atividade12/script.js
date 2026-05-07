function imprimirArea(){
    let retangulo = new Object(); 
    retangulo.altura=document.forms.formulario1.elements["idLargura"].value;
    retangulo.largura=document.forms.formulario1.elements["idAltura"].value;
    alert(retangulo.altura*retangulo.largura);
  
}