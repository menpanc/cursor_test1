document.addEventListener('DOMContentLoaded', () => {
    const sendMessage = document.getElementById('sendMessage');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            // 这里应该调用AI助手API来获取回复
            // 为了演示，我们将使用一个模拟的回复
            setTimeout(() => {
                addMessage('ai', '这是一个模拟的AI回复。在实际应用中，这里应该集成真正的AI助手API。');
            }, 1000);
            userInput.value = '';
        }
    }

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
