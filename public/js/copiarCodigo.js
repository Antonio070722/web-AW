// copiarCodigo.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Buscar el elemento <code> dentro del <pre> anterior al botón
            const codeElement = button.previousElementSibling?.querySelector('code');
            if (!codeElement) {
                alert('No se encontró código para copiar');
                return;
            }
            const texto = codeElement.innerText;
            navigator.clipboard.writeText(texto).then(() => {
                const originalText = button.innerText;
                button.innerText = '¡Copiado!';
                setTimeout(() => {
                    button.innerText = originalText;
                }, 2000);
            }).catch(() => {
                alert('No se pudo copiar el código');
            });
        });
    });
});