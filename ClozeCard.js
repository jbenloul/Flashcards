var ClozeCardFront = []
var ClozeCardBack = []

function ClozeCards(text, cloze) {
    this.text = text;
        this.cloze = cloze;
        if (!text.includes(cloze)) {
            console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
            return;
        }
    this.partial = text.replace(cloze, '...');
}
module.exports = ClozeCards
