var cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat (){
    cats.push("Ralph");
    console.log(cats);
}

function destructivelyPrependCat (){
    cats.unshift("Bob");
    console.log(cats);
}

function  destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
    
}

function destructivelyRemoveFirstCat() {

    cats.shift();

    return(cats);
    
}

function appendCat (Broom){

    return([...cats, Broom]);
}


function prependCat(Arnold) {

    return([Arnold , ...cats]);

}

function removeLastCat() {

    var Cats2 = cats.slice(0, cats.length-1)
    return(Cats2);
}

function removeFirstCat () {
    var Cats3 = cats.slice(1)
    return (Cats3);
}