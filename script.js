console.log("hi");
const app = new Vue({
    el: "#app",
    data:{
        fields:["1","2","3","4","5","6","7","8","9"],
        playerFields:[],
        pcFields:[],
        playerNameStatus: false,
        playerName : "",
        winCombis:[[1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],[1,4,7],[1,5,9],[3,5,7]]
    },

    methods: {
        randomNumber(){
            return Math.ceil(Math.random()*this.fields.length)
        }
    },

    mounted() {
        console.log(this.randomNumber())
        const testWin = [2,1,3]
       
        
    },
})


// WIN CONTROLL FUNCTION NEED ONE FORE MORE
// let controll = 0
        // for(number of testWin){
        //     console.log("number", number)
        //     if(this.winCombis[0].includes(number)){
        //         console.log("si")
        //         controll++
        //         if(controll === 3){
        //             console.log("win!")
        //         }
        //     }
        // }