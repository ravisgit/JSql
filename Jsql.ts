export module Ravi.Plugin{

export class Jsql{


static isNullOrUndefined(query:string):boolean{

   return !query || query.length === 0 ;

}

static cleanQuery(query:string):string{

   if(Jsql.isNullOrUndefined(query))
       throw new Error('Invalid string passed');

   return query.replace(/\s+/gi,' ');

}

/**
 *
 */
constructor(public query:string) {

}

init = ()=>{

}

parse(query:string){
    return query;

}


}

}