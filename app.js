// Inspired by Coding Journey https://www.youtube.com/watch?v=T4VE_6v9hFs

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init)

class TypeWriter {
  constructor(typedTextSpan, words) {
    this.cursorSpan = document.querySelector('.cursor')
    this.typedTextSpan = typedTextSpan
    this.words = words
    this.charIndex = 0
    this.textArrayIndex = 0
    this.typingDelay = 200
    this.erasingDelay = 100
    this.newTextDelay = 2000
    this.beginTyping()
  }

  // Type Method
  type() {
    if (this.charIndex < this.words[this.textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains('typing')) {
        this.cursorSpan.classList.add('typing')
      }
      this.typedTextSpan.textContent += this.words[this.textArrayIndex].charAt(
        this.charIndex,
      )
      // Increase char index by 1 to move onto the next character
      this.charIndex++
      setTimeout(() => {
        this.type()
      }, this.typingDelay)
    } else {
      setTimeout(() => {
        this.erase()
      }, this.newTextDelay)
    }
  }

  erase() {
    if (this.charIndex > 0) {
      this.cursorSpan.classList.remove('typing')
      // remove character
      this.typedTextSpan.textContent = this.words[
        this.textArrayIndex
      ].substring(0, this.charIndex - 1)
      this.charIndex--
      setTimeout(() => {
        this.erase()
      }, this.erasingDelay)
    } else {
      // type again
      this.textArrayIndex++
      if (this.textArrayIndex >= this.words.length) {
        this.textArrayIndex = 0
      }
      setTimeout(() => {
        this.type()
      }, this.typingDelay + 1100)
    }
  }

  beginTyping() {
    if (this.words.length) {
      setTimeout(() => {
        this.type()
      }, this.newTextDelay + 250)
    }
  }
}

// ALTERNATIVE CODING APPROACH

//   // get the current index but loop back to 0, anything mod a number will count up to a multiple of that number, at which point, the mod will go back to 0, then 1, then 2, then all the way to the limit of the bottom mod. Wicked clever.
//   this.charIndex = this.textArrayIndex % this.words.length // Current Index of Word
//   const fullTxt = this.words[wordIndex] // Get text of current word
//   let typeSpeed = 300

//   // Check if deleting
//   if (this.isDeleting) {
//     // Remove Char
//     this.txt = fullTxt.substring(0, this.txt.length - 1)
//   } else {
//     // Add a char
//     this.txt = fullTxt.substring(0, this.txt.length + 1)
//   }

//   // Insert txt into element
//   this.typedTextSpan.innerHTML = `<span class="txt">${this.txt}</span>`

//   // Faster if deleting
//   if (this.isDeleting) {
//     typeSpeed /= 2
//   }

//   // If word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // Make pause on complete word
//     typeSpeed = this.wait
//     this.isDeleting = true
//   } else if (this.isDeleting && this.txt === '') {
//     // Move to the next word by increasing the textArrayIndex and by extension, the index
//     this.textArrayIndex++
//     // Pause before start typing
//     typeSpeed = 500
//     // turn off isDeleting
//     isDeleting = false
//   }

//   // Wait for a number of seconds
//   setTimeout(() => this.type(), typeSpeed)

// Init App
function init() {
  const typedTextSpan = document.querySelector('.typed-text')
  const cursorSpan = document.querySelector('.cursor')

  const studentWords = [
    '.students.learnToCode()',
    '.students.designAmazingUI()',
    '.students.makeArt()',
    '.students.buildWebsites()',
    '.students.scrapeWebData()',
    '.students.learnEncryption()',
    '.students.modelPhysics()',
    '.students.buildDiscordBots()',
    '.students.analyzeData()',
    '.students.codeAnimations()',
    '.students.solveProblems()',
    '.students.buildApps()',
    '.students.learnAlgorithms()',
    '.students.commandRobots()',
    '.students.createWithCode()',
    '.students.buildChatBots()',
    '.students.buildGames()',
    '.students.codeMusic()',
    '.students.changeTheWorld()',
  ]

  new TypeWriter(typedTextSpan, studentWords)
}
