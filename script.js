const app = new Vue({
    el: "#app",
    data:{
        fields:[0,1,2,3,4,5,6,7,8],
        fieldsDinamic:[0,1,2,3,4,5,6,7,8],
        playerFields:[],
        pcFields:[],
        playerNameStatus: false,
        playerName : "",
        winCombis:[[0,1,2],[3,4,5],[6,7,8],[4,7,8],[1,4,7],[0,3,6],[0,4,8],[2,4,6],[2,5,8]],
        winner: null,
        playerSymbol: "X",
        pcSymbol: "O",
        message: null
    },

    methods: {
        //random numbers to (9)
        randomNumber(){
            return Math.floor(Math.random()*this.fields.length)
        },
        //checks the clicked field so dont click again
        fieldClick(index){
            if( ! this.playerFields.includes(index) && this.fieldsDinamic.includes(index)){
                console.log(index)
                this.fieldsDinamic.splice(this.fieldsDinamic.indexOf(index), 1)

                this.playerFields.push(index)
                console.log(this.playerFields)
                console.log(this.fieldsDinamic)
                this.winControlFun(this.playerFields, this.playerName)
                
                if(this.winner === null  && this.fieldsDinamic.length > 0){
                    let whileflage = false
                    while(!whileflage){
                         const testers = this.randomNumber()
                         console.log(testers, "random num")
                        if( !this.pcFields.includes(testers) && this.fieldsDinamic.includes(testers)){
                            this.fieldsDinamic.splice(this.fieldsDinamic.indexOf(testers), 1)
                            this.pcFields.push(testers)
                            this.append(testers, this.pcSymbol)
                            this.winControlFun(this.pcFields, "pc")
                            whileflage = true
                            console.log(this.fieldsDinamic)
                        }
                    }
                }else if(this.fieldsDinamic.length === 0){
                    if(this.message === null){
                        this.message = "Pareggio!"
                    }
                    console.log("pareggio")
                }
            }
            
        },
        //appends the gamer choise
        append(index, who){
            const span = document.querySelectorAll('span')
            span[index].innerHTML = who           
        },
        //controls if is win
        winControlFun(who, name){
            this.winCombis.forEach(element => {
                let controll = 0
                let tryes = 0
                // console.log(element, "element");
                for(number of who){
                    tryes++
                    
                    if(element.includes(number)){
                        console.log("si")
                        controll++
                        if(controll === 3){
                            console.log(controll)
                            this.winner = name
                            this.playerFields.length = 0
                            this.pcFields.length = 0
                            console.log("game finish")
                            console.log("the winner", this.winner)
                            this.message = "Ha vinto " + this.winner + " !" 
                            controll = 0
                        }
                    }
                    // else if(tryes === 3){
                    //     controll = 0
                    //     console.log("reset")
                    // }
                }

            });
            
        }
    },

    mounted() {
        // console.log(this.randomNumber())
        // this.winControlFun()
       
        
    },
})


// WIN CONTROLL FUNCTION NEED ONE FOR MORE
// for(number of this.playerFields){
//     console.log("number", number)
//     if(element.includes(number)){
//         console.log("si")
//         controll++
//         if(controll === 3){
//             console.log("win!")
//         }
//     }
// }