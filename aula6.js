
    let pessoa1 = {
        nome: "Aysha",
        idade: 18,
        saudacao: function() {
            console.log("Oi, eu sou a " + this.nome);
        }
    }
    
    let pessoa2 = {
        nome: "Carlos",
        idade: 30,
        saudacao: function() {
            console.log("Oi, eu sou o " + this.nome);
        }
    }
    
    pessoa1.saudacao();
    pessoa2.saudacao();