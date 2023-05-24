"use strict";

// creazione array per contenuto lista
let list = [
    'Pomodoro',
    'Farina',
    'Lievito',
    'Basilico',
    'Mozzarella',
    'Olio',
    'Salame piccante',
    'Acqua',
    'Sale'
    ]

    console.log(list)

// recupero l'elemento ul dove successivamente andrò a stampare i dati dell'array
    let shopping = document.getElementById('lista-spesa')

    // dichiaro la variabile per il ciclo for, fuori dal ciclo stesso
    let i = 0
    
    while (i < list.length){
        let item = list[i];
        i++;
        console.log(item)
        //funzione append per stampare i risultati nella pagina web
        let listItem = document.createElement('li')
        listItem.innerText= item;
        shopping.append(listItem)

    };



    