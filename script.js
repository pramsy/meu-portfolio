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

/* =========================================
   ASSISTENTE DE IA
========================================= */

const aiButton = document.getElementById("ai-assistant-button");
const aiChat = document.getElementById("ai-chat");
const aiClose = document.getElementById("ai-chat-close");
const aiForm = document.getElementById("ai-chat-form");
const aiInput = document.getElementById("ai-chat-input");
const aiMessages = document.getElementById("ai-chat-messages");


/* Abrir */

if (aiButton) {

    aiButton.addEventListener("click", () => {

        aiChat.classList.add("open");

        aiChat.setAttribute("aria-hidden", "false");

        aiInput.focus();

    });

}


/* Fechar */

if (aiClose) {

    aiClose.addEventListener("click", () => {

        aiChat.classList.remove("open");

        aiChat.setAttribute("aria-hidden", "true");

    });

}


/* Adicionar mensagem */

function adicionarMensagem(texto, tipo) {

    const mensagem = document.createElement("div");

    mensagem.classList.add(
        "ai-message",
        tipo === "user"
            ? "ai-message-user"
            : "ai-message-bot"
    );

    mensagem.textContent = texto;

    aiMessages.appendChild(mensagem);

    aiMessages.scrollTop = aiMessages.scrollHeight;
}


/* Enviar pergunta */

if (aiForm) {

    aiForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const pergunta = aiInput.value.trim();

        if (!pergunta) {
            return;
        }

        adicionarMensagem(pergunta, "user");

        aiInput.value = "";

        adicionarMensagem(
            "Estou pensando... 🤔",
            "bot"
        );

        /*
         * IMPORTANTE:
         * Aqui futuramente vamos chamar
         * o nosso backend de IA.
         */

    });

}