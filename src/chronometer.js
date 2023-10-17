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

    },1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutos = this.currentTime / 60;
    return Math.floor(minutos)
    // let minutosRound = Math.floor(minutos)
  }

  getSeconds() {
    // ... your code goes here
    let segundos = this.currentTime % 60;
    return Math.floor(segundos)
  }

  computeTwoDigitNumber(value) {
  //   // ... your code goes here
    
  //   // let dosDi = value.toString()
    
    if( value === 0){
      return "00" 
    }
    else if(value > 0 && value <=9){
      return "0"+value
    }
    else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval( this.intervalId )
    }

  
  

  reset() {
    // ... your code goes here
    this.currentTime = 0


  }

  split() {
    // ... your code goes here
    let segundos = this.computeTwoDigitNumber (this.getSeconds())
    let minutos = this.computeTwoDigitNumber (this.getMinutes())
    return `${minutos}:${segundos}`
  }
}
