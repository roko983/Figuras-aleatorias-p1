        
        var genfiguras = []
        var gencuadrados = []
        function setup() {
            createCanvas(windowWidth, windowHeight)
            /*for (let i = 0; i < 100; i++) {
                genfiguras.push(new Create_ci())
            }*/
            
            for (let b = 0; b < 100; b++) {
                gencuadrados.push(new Create_cu())
                console.log("entro a for gencuadrados")
                
            }
        }
        function draw(){
        background("sandybrown")
        /*for (let a = 0; a < genfiguras.length; a++) {
            genfiguras[a].display()
            genfiguras[a].move()
        }*/
        for (let c = 0; c < gencuadrados.length; c++) {
            gencuadrados[c].display()
            gencuadrados[c].move()
            
        }
        }   