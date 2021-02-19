var javascript ={
    name: "Javascript",
    libraries:["React","Angular","Vue"],
    printLibraries:function(){
        var self = this;
        this.libraries.forEach(function(a){
            console.log(`${self.name} loves ${a}`)
        })
    }
}
javascript.printLibraries();