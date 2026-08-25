document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('form');

    if (form) {
        const submitBtn = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Validação do hCaptcha
            const hCaptchaResponse = form.querySelector('textarea[name="h-captcha-response"]');
            if (!hCaptchaResponse || !hCaptchaResponse.value) {
                alert("Por favor, confirme o hCaptcha antes de enviar.");
                return;
            }

            const formData = new FormData(form);
            formData.append("access_key", "200dfa8a-a328-41b2-b15d-c5e28cc8c6e5");
            formData.append("subject", "Nova mensagem do portfólio de Ramses Pierre");
            formData.append("from_name", formData.get("nome"));
            const originalText = submitBtn.textContent;

            submitBtn.textContent = "Enviando...";
            submitBtn.disabled = true;

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Salva o nome digitado antes de mudar de página
                    const campoNome = document.getElementById('nome');
                    if (campoNome) {
                        sessionStorage.setItem('nomeDoUsuario', campoNome.value);
                    }
                    
                    // Redireciona para a página de confirmação
                    window.location.href = "mensagem.html";
                } else {
                    alert("Erro no envio: " + (data.message || "Tente novamente."));
                    if (typeof hcaptcha !== 'undefined') hcaptcha.reset();
                }

            } catch (error) {
                alert("Erro de conexão. Tente novamente.");
                if (typeof hcaptcha !== 'undefined') hcaptcha.reset();
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    const elementoNome = document.getElementById('nome-usuario');

    if (elementoNome) {
        const nomeSalvo = sessionStorage.getItem('nomeDoUsuario');
        if (nomeSalvo) {
            elementoNome.textContent = nomeSalvo;
            sessionStorage.removeItem('nomeDoUsuario'); // Limpa da memória após exibir
        }
    }
});