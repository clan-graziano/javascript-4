    // Carica il magazzino dal file JSON
        fetch('magazzino.json')
        .then(response => response.json())
        .then(data => {
        magazzino = data;
        mostraPiatti();
        })
        .catch(error => console.error('Errore nel caricamento del magazzino:', error));

      // Funzione per visualizzare i Piatti disponibili
      function mostraPiatti() {
        let selectPiatti = document.getElementById("select-piatti");
        selectPiatti.innerHTML = '';
        magazzino.piatti.forEach(piatto => {
          let option = document.createElement("option");
          option.value = piatto.nome;
          option.textContent = `${piatto.nome} - Disponibili: ${piatto.disponibile}`;
          selectPiatti.appendChild(option);
        });
      }
  
      // Funzione per aggiungere un ordine
      function aggiungiOrdine() {
        let listaOrdini = document.getElementById("lista-ordini");
        let selectPiatti = document.getElementById("select-piatti");
        let quantita = parseInt(document.getElementById("quantita").value);
        let piattoSelezionato = magazzino.piatti.find(piatto => piatto.nome === selectPiatti.value);
  
        if (piattoSelezionato && quantita <= piattoSelezionato.disponibile) {
          let listItem = document.createElement("li");
          listItem.textContent = `${quantita} ${piattoSelezionato.nome}`;
          listaOrdini.appendChild(listItem);
        } else {
          alert("Quantità non valida o piatto non disponibile.");
        }
      }
  
      // Funzione per effettuare un ordine
      function effettuaOrdine() {
        let listaOrdini = document.getElementById("lista-ordini");
        listaOrdini.innerHTML = '';
  
        // Simula l'invio dell'ordine al server con una Promise
        let promessa = new Promise((resolve, reject) => {
            resolve("Ordine completato!");
        });
  
        // Visualizza il messaggio di completamento dell'ordine dopo che la Promise è risolta
        promessa.then((messaggio) => {
          alert(messaggio);
          mostraPiatti(); // Aggiorna il catalogo dopo l'ordine
        });
      }
  
      // Inizializza la visualizzazione dei piatti disponibili
      mostraPiatti();
  