class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.rank=0;
        this.distance=0;
    }
    getPlayerCount(){
        var playerCountRef=db.ref("playerCount");
        playerCountRef.on("value",function (data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        })
    }
    update(){
        var playerIndex="players/player"+this.index
        db.ref(playerIndex).update({
            name:this.name, distance:this.distance, rank:this.rank
        })
    }
    
    static getPlayerInfo(){
       var playerInfoRef=db.ref("players");
       playerInfoRef.on("value", (data)=>{
           allPlayers=data.val();
       })
    }
    getCarsAtEnd(){
        var getCarsAtEndRef=db.ref("carsAtEnd");
        getCarsAtEndRef.on("value", function (data){
            this.rank=data.val();

        })
    }
    static updateCarsAtEnd(rank){
        db.ref("/").update({
            carsAtEnd:rank
        })
    }
}