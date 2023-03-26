function CreateChampion(inpArr)
{
    outArr = [];
    inpArr.forEach((el) => {
        let champion = {"name" : "", "level" : "", "items": []};
        let chmpData = el.split(' / ');

        champion.name = chmpData[0];
        champion.level = Number(chmpData[1]);
        items = chmpData[2].split(', ');

        items.forEach((itm) => {
            champion.items.push(itm);
        })

        outArr.push(champion);
    })
    console.log(JSON.stringify(outArr));
}

/*
function heroicInventory(arr) {
    let res = []
    arr.map((x) => {
        let [name, level, items] = x.split(' / ')
        res.push({ name, level: Number(level), items: items ? items.split(', ') : [] })
    })
    console.log(JSON.stringify(res))
}
*/

CreateChampion(["Isacc / 25 / Apple, GravityGun",
                "Derek / 12 / BarrelVest, DestructionSword",
                "Hes / 1 / Desolator, Sentinel, Antara"]);