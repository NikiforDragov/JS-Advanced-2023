function printDeckOfCards(cards) {

    let res = [];

    cards.forEach((card) => {
        const line = card.split('')
        const suit = line.pop();
        const face = line.join('');

        try {
            const currentCard = createCard(face, suit);
            res.push(currentCard);
        } catch {
            return console.log(`Invalid card: ${card}`);
        }
    })

    console.log(res.join(' '));


    function createCard(face, suit) {
        const faces = [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'J',
            'Q',
            'K',
            'A',
        ]

        const suits = {
            'S': '\u2660 ',
            'H': '\u2665 ',
            'D': '\u2666 ',
            'C': '\u2663 ',
        }

        if (faces.includes(face) == false) {
            throw TypeError('Invalid face');
        }
        if (suits.hasOwnProperty(suit) == false) {
            throw TypeError('Invalid suit');
        }

        const result = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit]
            }
        };

        return result
    }
}

