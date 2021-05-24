// Global variables
const symbols = ['3xBAR', 'BAR', '2xBAR', '7', 'Cherry']
const debugValues = { position: '', symbols: [] }
let playerBalance = 300; // default value
let debugMode = false; // debugging mode is off by default

// DOM elements
const reelFirstTop = document.querySelector('.first-top')
const reelFirstCenter = document.querySelector('.first-center')
const reelFirstBottom = document.querySelector('.first-bottom')
const reelSecondTop = document.querySelector('.second-top')
const reelSecondCenter = document.querySelector('.second-center')
const reelSecondBottom = document.querySelector('.second-bottom')
const reelThirdTop = document.querySelector('.third-top')
const reelThirdCenter = document.querySelector('.third-center')
const reelThirdBottom = document.querySelector('.third-bottom')
const balanceInput = document.querySelector('#balance-input')
const spinBtn = document.querySelector('.spin-btn')
const payTableList = document.querySelectorAll('.pay-table-container li')
const balanceBtn = document.querySelector('#balance-submit')
const debugBtn = document.querySelector('.debug-btn')
const debugSubmitBtn = document.querySelector('.debug-submit')
const debugAlarm = document.querySelector('.debug-alarm')
const debugPosition = document.querySelector('#debug-position')
const debugSymbolFirst = document.querySelector('#debug-symbols-first')
const debugSymbolSecond = document.querySelector('#debug-symbols-second')
const debugSymbolThird = document.querySelector('#debug-symbols-third')

balanceInput.value = playerBalance;

// payTable objects
const payTable = [
    // 4 position types - top, center, bottom, any
    // conditions
    // combination - fixed / free (represents whether the combination is fixed or not)
    {
        condition: ["Cherry", 'Cherry', 'Cherry'],
        combination: "fixed",
        position: 'top',
        listID: 0,
        points: 2000,
    },
    {
        condition: ["Cherry", 'Cherry', 'Cherry'],
        combination: "fixed",
        position: 'center',
        listID: 1,
        points: 1000,
    },
    {
        condition: ["Cherry", 'Cherry', 'Cherry'],
        combination: "fixed",
        position: 'bottom',
        listID: 2,
        points: 4000,
    },
    {
        condition: ["7", '7', '7'],
        combination: "fixed",
        position: 'any',
        listID: 3,
        points: 150,
    },
    {
        // condition: ["Cherry", '7'],
        condition: [''],
        combination: "free",
        position: 'any',
        listID: 4,
        points: 75,
    },
    {
        condition: ["3xBAR", '3xBAR', '3xBAR'],
        combination: "fixed",
        position: 'any',
        listID: 5,
        points: 50,
    },
    {
        condition: ["2xBAR", '2xBAR', '2xBAR'],
        combination: "fixed",
        position: 'any',
        listID: 6,
        points: 20,
    },
    {
        condition: ["BAR", 'BAR', 'BAR'],
        combination: "fixed",
        position: 'any',
        listID: 7,
        points: 10,
    },
    {
        condition: [''],
        // condition: ["BAR", 'BAR', 'BAR'],
        combination: "free",
        position: 'any',
        listID: 8,
        points: 50,
    },
]

// Image providng helper function
const generateImgPath = (symbol) => {
    return `"./imgs/${symbol}.png"`
}

// Debugging functions for each reel
const runDebugFirst = () => {
    if (debugValues.position === 'Top') {
        let firstTopNr = symbols.indexOf(debugValues.symbols[0])
        let firstCenterNr;
        let firstBottomNr;

        if (firstTopNr > symbols.length - 1) {
            firstTopNr = 0;
        }
        firstCenterNr = firstTopNr + 1;
        if (firstCenterNr > symbols.length - 1) {
            firstCenterNr = 0;
        }
        firstBottomNr = firstCenterNr + 1;
        if (firstBottomNr > symbols.length - 1) {
            firstBottomNr = 0;
        }

        reelFirstTop.style.backgroundImage = `url(${generateImgPath(symbols[firstTopNr])})`
        reelFirstCenter.style.backgroundImage = `url(${generateImgPath(symbols[firstCenterNr])})`
        reelFirstBottom.style.backgroundImage = `url(${generateImgPath(symbols[firstBottomNr])})`

        reelFirstTop.dataset.index = firstTopNr;
        reelFirstCenter.dataset.index = firstCenterNr;
        reelFirstBottom.dataset.index = firstBottomNr;
    }
    if (debugValues.position === 'Center') {
        let firstCenterNr = symbols.indexOf(debugValues.symbols[0]);
        let firstTopNr = firstCenterNr - 1;
        let firstBottomNr = firstCenterNr + 1;
        if (firstTopNr === -1) {
            firstTopNr = symbols.length - 1
        }

        if (firstTopNr > symbols.length - 1) {
            firstTopNr = 0;
        }
        firstCenterNr = firstTopNr + 1;
        if (firstCenterNr > symbols.length - 1) {
            firstCenterNr = 0;
        }
        firstBottomNr = firstCenterNr + 1;
        if (firstBottomNr > symbols.length - 1) {
            firstBottomNr = 0;
        }

        reelFirstTop.style.backgroundImage = `url(${generateImgPath(symbols[firstTopNr])})`
        reelFirstCenter.style.backgroundImage = `url(${generateImgPath(symbols[firstCenterNr])})`
        reelFirstBottom.style.backgroundImage = `url(${generateImgPath(symbols[firstBottomNr])})`

        reelFirstTop.dataset.index = firstTopNr;
        reelFirstCenter.dataset.index = firstCenterNr;
        reelFirstBottom.dataset.index = firstBottomNr;
    }
    if (debugValues.position === 'Bottom') {
        let firstBottomNr = symbols.indexOf(debugValues.symbols[0]);
        let firstCenterNr = firstBottomNr - 1;
        let firstTopNr = firstCenterNr - 1;
        if (firstTopNr === -1) {
            firstTopNr = symbols.length - 1
        }
        if (firstTopNr <= -2) {
            firstTopNr = symbols.length - 2
        }
        if (firstCenterNr === -1) {
            firstCenterNr = symbols.length - 1;
        }

        if (firstTopNr > symbols.length - 1) {
            firstTopNr = 0;
        }

        if (firstCenterNr > symbols.length - 1) {
            firstCenterNr = 0;
        }

        if (firstBottomNr > symbols.length - 1) {
            firstBottomNr = 0;
        }

        reelFirstTop.style.backgroundImage = `url(${generateImgPath(symbols[firstTopNr])})`
        reelFirstCenter.style.backgroundImage = `url(${generateImgPath(symbols[firstCenterNr])})`
        reelFirstBottom.style.backgroundImage = `url(${generateImgPath(symbols[firstBottomNr])})`

        reelFirstTop.dataset.index = firstTopNr;
        reelFirstCenter.dataset.index = firstCenterNr;
        reelFirstBottom.dataset.index = firstBottomNr;
    }
}
const runDebugSecond = () => {
    if (debugValues.position === 'Top') {
        let secondTopNr = symbols.indexOf(debugValues.symbols[1])
        let secondCenterNr;
        let secondBottomNr;

        if (secondTopNr > symbols.length - 1) {
            secondTopNr = 0;
        }
        secondCenterNr = secondTopNr + 1;
        if (secondCenterNr > symbols.length - 1) {
            secondCenterNr = 0;
        }
        secondBottomNr = secondCenterNr + 1;
        if (secondBottomNr > symbols.length - 1) {
            secondBottomNr = 0;
        }

        reelSecondTop.style.backgroundImage = `url(${generateImgPath(symbols[secondTopNr])})`
        reelSecondCenter.style.backgroundImage = `url(${generateImgPath(symbols[secondCenterNr])})`
        reelSecondBottom.style.backgroundImage = `url(${generateImgPath(symbols[secondBottomNr])})`

        reelSecondTop.dataset.index = secondTopNr;
        reelSecondCenter.dataset.index = secondCenterNr;
        reelSecondBottom.dataset.index = secondBottomNr;
    }
    if (debugValues.position === 'Center') {
        let secondCenterNr = symbols.indexOf(debugValues.symbols[1]);
        let secondTopNr = secondCenterNr - 1;
        let secondBottomNr = secondCenterNr + 1;
        if (secondTopNr === -1) {
            secondTopNr = symbols.length - 1
        }

        if (secondTopNr > symbols.length - 1) {
            secondTopNr = 0;
        }
        secondCenterNr = secondTopNr + 1;
        if (secondCenterNr > symbols.length - 1) {
            secondCenterNr = 0;
        }
        secondBottomNr = secondCenterNr + 1;
        if (secondBottomNr > symbols.length - 1) {
            secondBottomNr = 0;
        }

        reelSecondTop.style.backgroundImage = `url(${generateImgPath(symbols[secondTopNr])})`
        reelSecondCenter.style.backgroundImage = `url(${generateImgPath(symbols[secondCenterNr])})`
        reelSecondBottom.style.backgroundImage = `url(${generateImgPath(symbols[secondBottomNr])})`

        reelSecondTop.dataset.index = secondTopNr;
        reelSecondCenter.dataset.index = secondCenterNr;
        reelSecondBottom.dataset.index = secondBottomNr;
    }
    if (debugValues.position === 'Bottom') {
        let secondBottomNr = symbols.indexOf(debugValues.symbols[1]);
        let secondCenterNr = secondBottomNr - 1;
        let secondTopNr = secondCenterNr - 1;
        if (secondTopNr === -1) {
            secondTopNr = symbols.length - 1
        }
        if (secondTopNr <= -2) {
            secondTopNr = symbols.length - 2
        }
        if (secondCenterNr === -1) {
            secondCenterNr = symbols.length - 1;
        }

        if (secondTopNr > symbols.length - 1) {
            secondTopNr = 0;
        }

        if (secondCenterNr > symbols.length - 1) {
            secondCenterNr = 0;
        }

        if (secondBottomNr > symbols.length - 1) {
            secondBottomNr = 0;
        }

        reelSecondTop.style.backgroundImage = `url(${generateImgPath(symbols[secondTopNr])})`
        reelSecondCenter.style.backgroundImage = `url(${generateImgPath(symbols[secondCenterNr])})`
        reelSecondBottom.style.backgroundImage = `url(${generateImgPath(symbols[secondBottomNr])})`

        reelSecondTop.dataset.index = secondTopNr;
        reelSecondCenter.dataset.index = secondCenterNr;
        reelSecondBottom.dataset.index = secondBottomNr;
    }
}
const runDebugThird = () => {
    if (debugValues.position === 'Top') {
        let thirdTopNr = symbols.indexOf(debugValues.symbols[2])
        let thirdCenterNr;
        let thirdBottomNr;

        if (thirdTopNr > symbols.length - 1) {
            thirdTopNr = 0;
        }
        thirdCenterNr = thirdTopNr + 1;
        if (thirdCenterNr > symbols.length - 1) {
            thirdCenterNr = 0;
        }
        thirdBottomNr = thirdCenterNr + 1;
        if (thirdBottomNr > symbols.length - 1) {
            thirdBottomNr = 0;
        }

        reelThirdTop.style.backgroundImage = `url(${generateImgPath(symbols[thirdTopNr])})`
        reelThirdCenter.style.backgroundImage = `url(${generateImgPath(symbols[thirdCenterNr])})`
        reelThirdBottom.style.backgroundImage = `url(${generateImgPath(symbols[thirdBottomNr])})`

        reelThirdTop.dataset.index = thirdTopNr;
        reelThirdCenter.dataset.index = thirdCenterNr;
        reelThirdBottom.dataset.index = thirdBottomNr;
    }
    if (debugValues.position === 'Center') {
        let thirdCenterNr = symbols.indexOf(debugValues.symbols[2]);
        let thirdTopNr = thirdCenterNr - 1;
        let thirdBottomNr = thirdCenterNr + 1;
        if (thirdTopNr === -1) {
            thirdTopNr = symbols.length - 1
        }

        if (thirdTopNr > symbols.length - 1) {
            thirdTopNr = 0;
        }
        thirdCenterNr = thirdTopNr + 1;
        if (thirdCenterNr > symbols.length - 1) {
            thirdCenterNr = 0;
        }
        thirdBottomNr = thirdCenterNr + 1;
        if (thirdBottomNr > symbols.length - 1) {
            thirdBottomNr = 0;
        }

        reelThirdTop.style.backgroundImage = `url(${generateImgPath(symbols[thirdTopNr])})`
        reelThirdCenter.style.backgroundImage = `url(${generateImgPath(symbols[thirdCenterNr])})`
        reelThirdBottom.style.backgroundImage = `url(${generateImgPath(symbols[thirdBottomNr])})`

        reelThirdTop.dataset.index = thirdTopNr;
        reelThirdCenter.dataset.index = thirdCenterNr;
        reelThirdBottom.dataset.index = thirdBottomNr;
    }
    if (debugValues.position === 'Bottom') {
        let thirdBottomNr = symbols.indexOf(debugValues.symbols[2]);
        let thirdCenterNr = thirdBottomNr - 1;
        let thirdTopNr = thirdCenterNr - 1;

        if (thirdTopNr === -1) {
            thirdTopNr = symbols.length - 1
        }
        if (thirdTopNr <= -2) {
            thirdTopNr = symbols.length - 2
        }
        if (thirdCenterNr === -1) {
            thirdCenterNr = symbols.length - 1;
        }

        if (thirdTopNr > symbols.length - 1) {
            thirdTopNr = 0;
        }

        if (thirdCenterNr > symbols.length - 1) {
            thirdCenterNr = 0;
        }

        if (thirdBottomNr > symbols.length - 1) {
            thirdBottomNr = 0;
        }

        reelThirdTop.style.backgroundImage = `url(${generateImgPath(symbols[thirdTopNr])})`
        reelThirdCenter.style.backgroundImage = `url(${generateImgPath(symbols[thirdCenterNr])})`
        reelThirdBottom.style.backgroundImage = `url(${generateImgPath(symbols[thirdBottomNr])})`

        reelThirdTop.dataset.index = thirdTopNr;
        reelThirdCenter.dataset.index = thirdCenterNr;
        reelThirdBottom.dataset.index = thirdBottomNr;
    }
}

// Reel functions for each reel
const firstReel = () => {
    let firstTopNr = reelFirstTop.dataset.index;
    let firstCenterNr = reelFirstCenter.dataset.index;
    let firstBottomNr = reelFirstTop.dataset.index;

    firstTopNr++;
    if (firstTopNr > symbols.length - 1) {
        firstTopNr = 0;
    }
    firstCenterNr = firstTopNr + 1;
    if (firstCenterNr > symbols.length - 1) {
        firstCenterNr = 0;
    }
    firstBottomNr = firstCenterNr + 1;
    if (firstBottomNr > symbols.length - 1) {
        firstBottomNr = 0;
    }

    reelFirstTop.style.backgroundImage = `url(${generateImgPath(symbols[firstTopNr])})`
    reelFirstCenter.style.backgroundImage = `url(${generateImgPath(symbols[firstCenterNr])})`
    reelFirstBottom.style.backgroundImage = `url(${generateImgPath(symbols[firstBottomNr])})`

    reelFirstTop.dataset.index = firstTopNr;
    reelFirstCenter.dataset.index = firstCenterNr;
    reelFirstBottom.dataset.index = firstBottomNr;
}
const secondReel = () => {
    let secondTopNr = reelSecondTop.dataset.index;
    let secondCenterNr = reelSecondCenter.dataset.index;
    let secondBottomNr = reelSecondBottom.dataset.index;

    secondTopNr++;
    if (secondTopNr > symbols.length - 1) {
        secondTopNr = 0;
    }
    secondCenterNr = secondTopNr + 1;
    if (secondCenterNr > symbols.length - 1) {
        secondCenterNr = 0;
    }
    secondBottomNr = secondCenterNr + 1;
    if (secondBottomNr > symbols.length - 1) {
        secondBottomNr = 0;
    }

    reelSecondTop.style.backgroundImage = `url(${generateImgPath(symbols[secondTopNr])})`
    reelSecondCenter.style.backgroundImage = `url(${generateImgPath(symbols[secondCenterNr])})`
    reelSecondBottom.style.backgroundImage = `url(${generateImgPath(symbols[secondBottomNr])})`

    reelSecondTop.dataset.index = secondTopNr;
    reelSecondCenter.dataset.index = secondCenterNr;
    reelSecondBottom.dataset.index = secondBottomNr;
    return;
}
const thirdReel = () => {
    let thirdTopNr = reelThirdTop.dataset.index;
    let thirdCenterNr = reelThirdCenter.dataset.index;
    let thirdBottomNr = reelThirdBottom.dataset.index;

    thirdTopNr++;
    if (thirdTopNr > symbols.length - 1) {
        thirdTopNr = 0;
    }
    thirdCenterNr = thirdTopNr + 1;
    if (thirdCenterNr > symbols.length - 1) {
        thirdCenterNr = 0;
    }
    thirdBottomNr = thirdCenterNr + 1;
    if (thirdBottomNr > symbols.length - 1) {
        thirdBottomNr = 0;
    }

    reelThirdTop.style.backgroundImage = `url(${generateImgPath(symbols[thirdTopNr])})`
    reelThirdCenter.style.backgroundImage = `url(${generateImgPath(symbols[thirdCenterNr])})`
    reelThirdBottom.style.backgroundImage = `url(${generateImgPath(symbols[thirdBottomNr])})`

    reelThirdTop.dataset.index = thirdTopNr;
    reelThirdCenter.dataset.index = thirdCenterNr;
    reelThirdBottom.dataset.index = thirdBottomNr;
    return;
}

// Final result analysis functions
// Functions are divided for less complexity
const getResult = () => {
    const allReels = document.querySelectorAll('.reel');
    const copiedReels = [...allReels]
    const resultArr = copiedReels.filter((item) => {
        if (item.style.display !== 'none') return item;
    })
    analyzeResult(resultArr)
}
const analyzeResult = (data) => {
    const topResult = []
    const centerResult = []
    const bottomResult = []
    data.forEach((item) => {
        if (item.getAttribute('class').includes('top')) {
            topResult.push(symbols[item.dataset.index])
        } else if (item.getAttribute('class').includes('center')) {
            centerResult.push(symbols[item.dataset.index])
        } else {
            bottomResult.push(symbols[item.dataset.index])
        }
    })

    const finalAnalysis = [[...topResult], [...centerResult], [...bottomResult]]
    calcBalance(finalAnalysis);
}
const calcBalance = (data) => {
    const top = data[0];
    const center = data[1];
    const bottom = data[2];
    console.log(top, center, bottom)
    const topCondition = payTable.filter((item) => item.position === 'top')
    const centerCondition = payTable.filter((item) => item.position === 'center')
    const bottomCondition = payTable.filter((item) => item.position === 'bottom')
    const anyCondition = payTable.filter((item) => item.position === 'any' && item.combination === 'fixed')

    topCondition.forEach((item) => {
        if (item.condition.join('') === top.join('')) {
            console.log(item.points)

            payTableList[item.listID].classList.add('win-blinking')
            setTimeout(() => {
                payTableList[item.listID].classList.remove('win-blinking')
            }, 3000);
            playerBalance += item.points;
        }
    })
    centerCondition.forEach((item) => {
        if (item.condition.join('') === center.join('')) {
            console.log(item.points)

            payTableList[item.listID].classList.add('win-blinking')
            setTimeout(() => {
                payTableList[item.listID].classList.remove('win-blinking')
            }, 3000);
            playerBalance += item.points;
        }
    })
    bottomCondition.forEach((item) => {
        if (item.condition.join('') === bottom.join('')) {
            console.log(item.points)

            payTableList[item.listID].classList.add('win-blinking')
            setTimeout(() => {
                payTableList[item.listID].classList.remove('win-blinking')
            }, 3000);
            playerBalance += item.points;
        }
    })
    anyCondition.forEach((item) => {
        if (
            item.condition.join('') === top.join('') ||
            item.condition.join('') === center.join('') ||
            item.condition.join('') === bottom.join('')
        ) {
            console.log(item.points)

            payTableList[item.listID].classList.add('win-blinking')
            setTimeout(() => {
                payTableList[item.listID].classList.remove('win-blinking')
            }, 3000);
            playerBalance += item.points;
        }
    })

    // Check any BAR symbols combinations
    const checkBAR = (arr) => {
        if (arr.includes('7') || arr.includes('Cherry')) {
            return
        } else if (arr.length !== 3) {
            return
        } else {
            console.log(5)
            playerBalance += 5;
            payTableList[8].classList.add('win-blinking')
            setTimeout(() => {
                payTableList[8].classList.remove('win-blinking')
            }, 3000);
        }
    }
    checkBAR(top);
    checkBAR(center);
    checkBAR(bottom);

    // Check Any Cherry and 7 combinations
    checkCherryAndSeven = (arr) => {
        if (arr.includes('BAR') || arr.includes('2xBAR') || arr.includes('3xBAR')) {
            return
        } else if (arr.length !== 3) {
            return
        } else if (arr.includes('Cherry') && arr.includes('7')) {
            console.log(75)
            playerBalance += 75;
            payTableList[4].classList.add('win-blinking')
            setTimeout(() => {
                payTableList[4].classList.remove('win-blinking')
            }, 3000);
        }
    }
    checkCherryAndSeven(top);
    checkCherryAndSeven(center);
    checkCherryAndSeven(bottom);

    balanceInput.value = playerBalance;
}

// Spin control function
// decides whether the final outcome will be fixed or random
const spinControl = () => {
    // Player pays 3 points
    playerBalance = playerBalance - 1;
    balanceInput.value = playerBalance;
    // remove button click event listener
    spinBtn.removeEventListener('click', spinControl);

    // returns random value for reel speed
    const randomInterval = () => {
        let result = Math.floor(Math.random() * 25)
        let output = 70 + result;
        return output;
    }
    // returns a boolean that decides 2 symbols / 3 symbols for each reel
    const randomOutput = () => {
        //   decides to putout either 2 or 3 rows
        let randNr = Math.floor(Math.random() * 10) + 1
        let output;
        if (randNr > 5) {
            output = true;
            return output;
        } else {
            output = false;
            return output;
        }
    }

    // runs each Reel functions
    const spinFirst = setInterval(() => {
        firstReel();
    }, randomInterval());
    const spinSecond = setInterval(() => {
        secondReel();
    }, randomInterval());
    const spinThird = setInterval(() => {
        thirdReel();
    }, randomInterval());

    // setTimeout for:
    // 1. sequential termination of each reel
    //  a. 2 seconds for the first reel
    //  b. 0.5 seconds for second and third reels
    // 2. manipulated/controlled outcome from debugging options
    setTimeout(() => {
        // clears out first reel column
        clearInterval(spinFirst)
        if (debugMode) {
            reelFirstCenter.style.display = 'block';
            runDebugFirst()
        } else {
            if (randomOutput()) {
                reelFirstBottom.dataset.index = reelFirstCenter.dataset.index;
                reelFirstBottom.style.backgroundImage = `url(${generateImgPath(symbols[reelFirstBottom.dataset.index])})`
                reelFirstCenter.style.display = 'none';
            } else {
                reelFirstCenter.style.display = 'block';
            }
        }
        // clears out second reel column
        setTimeout(() => {
            clearInterval(spinSecond);
            if (debugMode) {
                reelSecondCenter.style.display = 'block';
                runDebugSecond()
            } else {
                if (randomOutput()) {
                    reelSecondBottom.dataset.index = reelSecondCenter.dataset.index;
                    reelSecondBottom.style.backgroundImage = `url(${generateImgPath(symbols[reelSecondBottom.dataset.index])})`
                    reelSecondCenter.style.display = 'none';
                } else {
                    reelSecondCenter.style.display = 'block';
                }
            }
            // clears out third reel column
            // final analysis functions are triggered here
            setTimeout(() => {
                clearInterval(spinThird)
                if (debugMode) {
                    reelThirdCenter.style.display = 'block';
                    runDebugThird();
                    spinBtn.addEventListener('click', spinControl)
                    getResult();
                } else {
                    if (randomOutput()) {
                        reelThirdBottom.dataset.index = reelThirdCenter.dataset.index;
                        reelThirdBottom.style.backgroundImage = `url(${generateImgPath(symbols[reelThirdBottom.dataset.index])})`
                        reelThirdCenter.style.display = 'none';
                    } else {
                        reelThirdCenter.style.display = 'block';
                    }
                    spinBtn.addEventListener('click', spinControl)
                    getResult();
                }
            }, 500)
        }, 500)
    }, 2000);
}

// Submit and change player balance
const changeBalance = () => {
    if (balanceInput.value > 5000) {
        playerBalance = 5000;
        balanceInput.value = playerBalance;
    } else {
        playerBalance = balanceInput.value;
        balanceInput.value = playerBalance;
    }
}

// Debugging functions

// switch debugging mode
const debugConfigure = () => {
    if (debugMode === false) {
        debugMode = true;
        debugBtn.textContent = 'enter random mode'
        debugBtn.classList.add('debug-activated');
    } else {
        debugMode = false;
        debugBtn.textContent = 'enter debug mode'
        debugBtn.classList.remove('debug-activated')
    }
}

// update debugging options/values
const debugSubmit = (e) => {
    // prevent default behavior
    e.preventDefault()

    // check if debug mode is on
    if (!debugMode) {
        return;
    }
    else {
        // toggle alarm element
        debugAlarm.classList.toggle('show-alarm')
        setTimeout(() => {
            debugAlarm.classList.toggle('show-alarm')
        }, 2000);
        // save debug values
        debugValues.position = debugPosition.value
        debugValues.symbols = [debugSymbolFirst.value, debugSymbolSecond.value, debugSymbolThird.value]
    }
    console.log(debugValues)
}

// Attach event listeners
spinBtn.addEventListener('click', spinControl)
balanceBtn.addEventListener('click', changeBalance)
debugBtn.addEventListener('click', debugConfigure)
debugSubmitBtn.addEventListener('click', debugSubmit)