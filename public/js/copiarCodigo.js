function copiarCodigo() {
    const codigo = document.getElementById('codigo').innerText;
    navigator.clipboard.writeText(codigo).then(() => {
        const btn = document.querySelector('.copy-btn');
        const textoOriginal = btn.innerText;
        btn.innerText = '¡Copiado!';
        setTimeout(() => {
            btn.innerText = textoOriginal;
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar: ', err);
        alert('No se pudo copiar el código.');
    });
}