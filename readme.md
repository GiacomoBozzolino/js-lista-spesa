Problema: Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


1- Creo un ul nel file html a cui assegno un id
2- Realizzo sul file js un array contenente gli ingredienti da comprare
3- Utilizzo un console.log per assicurarmi che l'array funzioni correttamente
4- Recupero l'elemento ul dal file html con la funzione getElementById
5- Imposto un ciclo while per poter stampare i componenti dell'array
    5.1- imposto una variabile esterna al ciclo while
    5.2- imposto il ciclo con la condizione che si ripeta per la lunghezza dell'array
    5.3- All'interno del ciclo imposto una variabile in modo che prenda il valore [i] dell'aray e ad ogni ciclo aumenti di 1
6- Utilizzo un console.log per stampare il risultato su console
7- Solo dopo aver verificato il corretto funzionamento in console aggiungo al ciclo la capacità di stampare il risultato sul DOM
8- Per stampare il contenuto dell'array posso utilizzare la funzione append oppure innerHTML