/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
In un'applicazione Vue, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. 
(per testare il funzionamento di questo bonus, provate a rallentare la connessione col tab network, 
    mettendo lo slow 3g)


*/

console.log ('Vue on', Vue)

const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';


const app = createApp ({
    data: () => ({
        emails: [],
    }),
    created(){
       // if(!this.emails.length < 10 ) return;
       for(let i = 0; i < 10; i++){
            axios.get(endpoint).then(res => {
            console.log(res.data.response)

            this.emails.push(res.data.response)
        })
       }
    }

});

app.mount('#root');