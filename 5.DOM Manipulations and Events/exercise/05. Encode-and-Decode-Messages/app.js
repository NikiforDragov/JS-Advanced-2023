function encodeAndDecodeMessages() {
    const [textArea1, textArea2] = Array.from(document.querySelectorAll('textarea'));
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('button'));

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(event) {
        const text = textArea1.value;
        let encoded = '';

        for (const char of text) {
            encoded += String.fromCharCode(char.charCodeAt() + 1)
        }

        textArea2.value = encoded;
        textArea1.value = '';
    }

    function decode(event) {
        const message = textArea2.value;
        let decoded = '';
        for (const char of message) {
            decoded += String.fromCharCode(char.charCodeAt() - 1);
        }

        textArea2.value = decoded;
    }
}