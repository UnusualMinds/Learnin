function getCard(pack){
    return firebase.database().ref('Packs/' + pack).once('value');
}