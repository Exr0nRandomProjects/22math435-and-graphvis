export function makeEnum(...values) {
    // from https://masteringjs.io/tutorials/fundamentals/enum
    const enumObject = {};
    for (const val of values) {
        enumObject[val] = val;
    }
    return Object.freeze(enumObject);
}

export function kselect(...keys) {
    return obj => Object.fromEntries(keys.map(k => [k, obj[k]]));
}
export function kcensor(...keys) {
    return obj => Object.fromEntries(Object.entries(obj).filter(([k, _]) => !keys.includes(k)));
}

/// assign an object recursively, without overwriting subobject keys
export function recursiveDeepAssign(base, obj, level=1) {
    //console.log("helooooooooooooooooooooooooooooooooooooooooooooo??????????????????????????????????????/////")
    //let s = "."; for (let i=0; i<level; i++) s += '    '; console.log(s, base, obj);// this is literally so cringe

    for (let [k, v] of Object.entries(obj)) {
        if (typeof v === 'undefined') continue;
        //console.log(s, k, v)
        if (!base.hasOwnProperty(k)) {    // if we would overwrite nothing
            base[k] = v;
        } else if (Array.isArray(base[k]) && Array.isArray(v)) { // might overwrite something. should we append?
            base[k] = base[k] + v;
        } else if (base[k] !== null && typeof base[k] === 'object') {
            //base[k] = { ...base[k], ...v };
            base[k] = recursiveDeepAssign(base[k], v, level + 1);
        } else {    // directly assign (we are overwriting something but ah well)
            base[k] = v;    // cant combine branches with above bc we need to check that property k exists first
        }
    }
    return base;
}

