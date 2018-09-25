
var nb = 1
function include(file)
{
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    document.getElementsByTagName('body').item(0).appendChild(script);
}
while (nb < 10) {
    include('exercicesJS/ex' + nb + '.js');
    nb++;
}