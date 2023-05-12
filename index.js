const maximo_carros = 5;
const maximo_motos = 4;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('estacionamento','root','password', {
    host: 'localhost',
    dialect: 'mysql'
});



const Cadastro_carros = Sequelize.define('carros',{
    modelo: {
type:Sequelize.STRING
    },
    placa: {
        type:Sequelize.STRING
    }
  
})

const Cadastro_motos = sequelize.define('moto',{
    modelo: {
type:Sequelize.STRING
    },
    placa: {
        type:Sequelize.STRING
    }
  
})


//Cadastro_veiculos.sync({force:true})




Cadastro_carros.count().then((count) => {
     if(count < maximo_carros) {

        Cadastro_carros.create({modelo: 'Celta', placa:'SIQA-123'}).then((carros) =>{
            console.log('Carro cadastrado: Modelo:' + carros.modelo+'Placa: '+carros.placa);
        });

     } else{
        console.log('Número máximo de carros atingido.');
     }
});



    Cadastro_motos.count().then((count) => {
        if(count < maximo_motos) {
   
           Cadastro_motos.create({modelo: 'Harley', placa:'OLHY-232'}).then((motos) =>{
               console.log('Moto cadastrado: Modelo:' + motos.modelo+'Placa: '+motos.placa);
           });
   
        } else{
           console.log('Número máximo de motos atingido.');
        }
   });




