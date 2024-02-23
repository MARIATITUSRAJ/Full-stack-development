class Car {
    #serialNumber;
    #makeYear;
    constructor(
      color = "White"
      phonename = "vivo"
      ios = "Android",
      version = "14",
      modelno = "Y75",
      batterytype = "5500mah"
      displaytype = "Amled",
      ram = "8+4GB"
    ) {
      this.color = color;
      this.phonename = phone;
      this.ios = android;
      this.version = version;
      this.modelno = modelno;
      this.displaytype = displayType;
      this.isOn
      this.ram = 0;
      this.baterylevel = 100;
      this.#makeYear = new Date().getFullYear() - 5;
      this.#serialNumber = Math.floor(Math.random() * 12345678910);
    }
  
    mobilestart() {
      if (this.isOn) {
        console.log("phone is already on");
      } else
        console.log("display is Starting...");
        this.isOn = true;
        console.log("Car is on");
      }
    }
    engineStop() {
      if (this.isOn) {
        console.log("Engine is Stopping...");
        this.isOn = false;
        console.log("Car is off");
      } else {
        console.log("Car is already off");
      }
    }
    turnRight() {
      if (this.isOn) {
        console.log("Turning right...");
      } else {
        console.log("Car is off");
      }
    }
    turnLeft() {
      if (this.isOn) {
        console.log("Turning left...");
      } else {
        console.log("Car is off");
      }
    }
    get makeYear() {
      console.log("Authorized personal requesting makeYear");
      return this.#makeYear;
    }
    get serialNumber() {
      console.log("Authorized personal requesting serialNumber");
  
      return this.#serialNumber;
    }
    get fuel() {
      return this.fuelLevel;
    }
    set fuel(level) {
      if (level < 0) {
        console.log("Fuel level cannot be negative");
        this.fuelLevel = 0;
      } else if (level > 100) {
        console.log("Fuel level cannot be greater than 100");
        this.fuelLevel = 100;
      } else {
        this.fuelLevel = level;
      }
    }
    get age() {
      return new Date().getFullYear() - this.#makeYear;
    }
  }
  
  const car3 = new Car("Blue", "2.0L Turbo", "Diesel", "SUV", "7", "Automatic");
  console.log(car3);
  console.log(car3.age);
  
  