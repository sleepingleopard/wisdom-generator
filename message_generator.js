let partOne = ['The unexamined life is', 'Whereof one cannot speak', 'Entities should not', 'The life of man (in a state of nature) is', 'I think therefore I am', 'He who thinks great thoughts',
 'What is rational is ', 'God is dead!', 'There is but one truly serious philosophical problem, and that is', 'One cannot step twice in', 'The greatest happiness of the greatest number is',
'To be is to', 'Happiness is', 'Liberty consists in', 'It is undesirable to believe a proposition when there is', 'There is only one good:', 'If God did not exist', 'Leisure is', 'Philosophy is a battle against',
'All that is necessary for the triumph of evil is', 'The only thing I know is', 'Man is born free, but is', 'Happiness lies in virtuous activity, and', 'Man is']

let partTwo = ['the bewitchment of our intelligence by means of language', 'the mother of philosophy', 'not worth living', 'solitary, poor, nasty, brutish, and short', ' therefore I am', 
'actual and what is actual is rational', 'suicide', 'the same river', 'the foundation of morals and legislation', 'to be perceived', 'not an ideal of reason but of imagination', 'in doing what one desires',
 'one evil, ignorance', 'a dark ocean without shores or lighthouse, strewn with many a philosophic wreck', 'at once the most sublime and the most trivial of human pursuits',
  'the highest good', 'condemned to be free', 'that I know nothing', 'strangled with the entrails of the last priest', 'a share of everything']

let authors = ['Socrates', 'Ludwig Wittgenstein', 'William of Ockham', 'Thomas Hobbes', 'Rene Descartes', 'Heidegger', 'Hegel', 'Nietzsche', 'Heraclitus', 'Camus', 'Bentham', 'Kant', 'Locke',
'Mill', 'Machiavelli', 'Volatire', 'Russel', 'Marx', 'Spinoza', 'Sartre', 'Kierkegaard']

function newQuote () {
    let randOne = Math.floor(Math.random()*partOne.length)
    let randTwo = Math.floor(Math.random()*partTwo.length)
    let randAuthors = Math.floor(Math.random()*authors.length)

    let randQuote = `"${partOne[randOne]} ${partTwo[randTwo]}." - ${authors[randAuthors]}`
    document.getElementById('quote-section').innerHTML = randQuote;
}

console.log(newQuote())
