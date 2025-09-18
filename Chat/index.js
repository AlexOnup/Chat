export default function handler(req, res) {
    res.status(200).json({
        message: 'Chatbot Proxy Server',
        endpoint: '/api/chat',
        status: 'active'
    });
}
