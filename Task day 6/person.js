// a person class to hold all the details:


class Person{
    #AadharNumber;
    #PhoneNumber;
    
    constructor ( personName,personFatherName,personMotherName,personGender,personDateOfBirth,personEmailID,personHighestQualification,personMaritalStatus,personWorkingExperience,personAddress)
    {
        this.Name = personName;
        this.FatherName=personFatherName;
        this.MotherName=personMotherName;
        this.Gender=personGender;
        this.DateOfBirth=personDateOfBirth;
        this.EmailID=personEmailID;
        this.HighestQualification=personHighestQualification;
        this.MaritalStatus=personMaritalStatus;
        this.WorkingExperience=personWorkingExperience;
        this.Address=personAddress;
        this.#AadharNumber=Math.floor(Math.random()*1000000000000);
        this.#PhoneNumber=Math.floor(Math.random()*10000000000);
        
    }
    get AadharNumber() {
        console.log('Authorized request for getting Aadhar number');
        return this.#AadharNumber;
    }

    get PhoneNumber() {
        console.log('Authorized request for getting Phone number');
        return this.#PhoneNumber;
    }
}
const person1=new Person('Musthaffa','Muththumeeran Pillai','Beema Beevi','Male','25/11/1999','musthaffa@gmail.com','M.Sc','Unmarried','Fresher','North Street,Nagarcoil,Kanyakumari.') ;


console.log(person1);
console.log(person1.PhoneNumber);
console.log(person1.AadharNumber);