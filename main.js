//chiediamo all'utente la sua età //

const UsearName = prompt("Qual è il tuo nome ?")
const UsearSur = prompt("Qual è il tuo cognome ?")
const UsearColor = prompt("Qual è il tuo colore preferito ?")
const psw = UsearName + UsearSur + UsearColor + '21';

//e comunichiamo l'anno di nascita//

document.getElementById("password").innerHTML = psw;