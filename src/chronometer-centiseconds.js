class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime++
      if (printTimeCallback){
        printTimeCallback()
      }
    },10)
  }

  getMinutes() {
    let minute = this.currentTime / 60
    return Math.floor(minute)
    // ... your code goes here
  }

  getSeconds() {
    
    let seconds = this.currentTime % 60;
    return Math.floor(seconds)
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
    let centiSeconds = this.currentTime % 100
    return Math.floor(centiSeconds)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (this.value === 0){
    return "00"
  }
    else if (this.value > 0 && this.value < 10){
      return "0"+value
    }
    else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let centiSeconds = printTimeCallback (this.getCentiseconds())
    let seconds = printTimeCallback(this.getSeconds())
    let minutes = printTimeCallback(this.getMinutes())
    return `${minutes}:${seconds}:${centiSeconds}`
  }
}
