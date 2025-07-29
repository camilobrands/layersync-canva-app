// Esperar o Canva SDK carregar
document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const syncButton = document.getElementById('syncButton');
    const status = document.getElementById('status');
    
    // Função para atualizar status
    function updateStatus(message, type = 'normal') {
        status.textContent = message;
        status.className = type;
    }
    
    // Função principal para sincronizar
    async function syncWithCanva() {
        const text = textInput.value.trim();
        
        if (!text) {
            updateStatus('Por favor, insira algum texto', 'error');
            return;
        }
        
        try {
            syncButton.disabled = true;
            updateStatus('Sincronizando...', 'normal');
            
            // Processar texto numerado
            const lines = text.split('\n').filter(line => line.trim());
            const numberedItems = lines.filter(line => /^\d+\./.test(line.trim()));
            
            if (numberedItems.length === 0) {
                updateStatus('Nenhum item numerado encontrado', 'error');
                return;
            }
            
            // Aqui você integraria com a API do Canva
            // Por enquanto, simulamos o sucesso
            setTimeout(() => {
                updateStatus(`${numberedItems.length} itens sincronizados com sucesso!`, 'success');
            }, 1500);
            
        } catch (error) {
            updateStatus('Erro ao sincronizar: ' + error.message, 'error');
        } finally {
            syncButton.disabled = false;
        }
    }
    
    // Event listener para o botão
    syncButton.addEventListener('click', syncWithCanva);
    
    // Integração com Canva (quando disponível)
    if (window.Canva && window.Canva.DesignApi) {
        updateStatus('Conectado ao Canva! Pronto para usar.', 'success');
    }
});