
interface IExpressions{
    email:RegExp;
    ssn:RegExp;
    guid:RegExp;
    date: (str:string)=>boolean
}

const regExp:IExpressions = {
    email: new RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ssn: new RegExp(/(\d{3})-(\d{3})-(\d{4})/),
    guid: new RegExp(/('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i')/),
    date: isDate
}


export const expressions = regExp;