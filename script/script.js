// Certifique-se de importar o Axios corretamente antes de usar este código!
// Se estiver no navegador, inclua o Axios com um <script> na página HTML.

const shortenButton = document.querySelector('.shorten-btn');
shortenButton.addEventListener('click', async () => {
    const urlInput = document.getElementById('url');
    const longUrlDiv = document.querySelector('.results');
    
    const longUrl = urlInput.value.trim();
    if (!longUrl) {
        longUrlDiv.innerHTML = "<p style='color: red;'>Por favor, insira uma URL válida.</p>";
        return;
    }

    try {
        // Encurtando a URL usando o CleanURI
        const response = await axios.post(
            'https://cleanuri.com/api/v1/shorten',
            new URLSearchParams({ url: longUrl }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        // Exibindo a URL encurtada
        longUrlDiv.innerHTML = `
            <p>URL encurtada:</p>
            <a href="${response.data.result_url}" target="_blank">${response.data.result_url}</a>
        `;
    } catch (error) {
        longUrlDiv.innerHTML = "<p style='color: red;'>Erro ao encurtar a URL. Tente novamente.</p>";
        console.error(error.message);
    }
});