type animalType = 'dog'| 'turtle'| 'snake';

class Character {
    private hunger:number = 5;
    private happiness:number = 5;
    private gameIsRunning:boolean = true;
    constructor(
        public readonly userName:string,
        public readonly animalType:animalType
        ) {
        setInterval(this.hungerLevel.bind(this), 5000);
        setInterval(this.happinessLevel.bind(this), 5000);
       
    }

    private increaseHunger(amount = 1){
        if(this.hunger < 10){
            this.hunger+= amount;
        } else {
            this.decreaseHappiness()
        };
    }

    private decreaseHunger(){
        if(this.hunger > 0){
            this.hunger--;}
    }
    
    private increaseHappiness(){
        if(this.happiness < 10){
            this.happiness++;
        }
    }

    private decreaseHappiness(){
        if(this.happiness > 0){
            this.happiness--;
        }
    }

    private hungerLevel(){
        this.increaseHunger();
        console.log(this.hunger,'hunger');
        if (this.gameIsRunning && this.hunger === 10) {
            this.gameIsRunning = false;
            alert('Your tamagochi died because of hunger, AND IT IS ALL YOUR FAULT!!! :(')
        }
    }

    private happinessLevel(){
        this.decreaseHappiness();
        console.log(this.happiness,'happy');
        if (this.gameIsRunning && this.happiness === 0) {
            this.gameIsRunning = false;
            alert('Your tamagochi died because it was unhappy:(')
        }
    }

    getHappiness(){
        return this.happiness;
    }

    getHunger(){
        return this.hunger;
    }

    feed(){
        this.decreaseHunger();
        console.log(this.hunger);
    }

    play(){
        this.increaseHappiness()
        this.increaseHunger(1)
    }
}

const newCharacter = new Character('Indy','turtle');
console.log(newCharacter);

const happinessUI = document.querySelector('#happiness');
const hungerUI = document.querySelector('#hunger');

function updateUI(){
    happinessUI.textContent = newCharacter.getHappiness().toString();
    hungerUI.textContent = newCharacter.getHunger().toString()

}

setInterval(updateUI, 200);


const feedBtn = document.querySelector('#feed-btn');
feedBtn.addEventListener('click', ()=>{
    console.log('feeeed');
    newCharacter.feed();
})

const playBtn = document.querySelector('#play-btn');
playBtn.addEventListener('click', ()=>{
    console.log('plaaaaay');
    newCharacter.play();
})

