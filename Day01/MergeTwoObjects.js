function mergeTwoObjects(object1, object2){
    object1Keys= Object.keys(object1)
    object2Keys= Object.keys(object2)
    newObject = {}

    for(key of object1Keys){
        let secondString  = object2[key]===undefined?"":" "+object2[key];
        newObject[key] = object1[key] + secondString;
        if(object2[key]!==undefined){
            object2Keys= object2Keys.filter(e=>e!==key);
        }
    }
    for(key of object2Keys){
        newObject[key] = object2[key];
    }

    return newObject;
}


console.log(mergeTwoObjects({ a: 'Hermione', b: 'Harry' }, { c: 'Ron', b: 'Potter', d: 'Draco' }))
