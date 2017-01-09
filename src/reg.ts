export interface IExpressions {
    email: IExpressionObj;
    ssn: IExpressionObj;
    guid: IExpressionObj;
    date?: (str: string) => boolean
}
export interface IExpressionObj{
    regexp:RegExp,
    method:(regExp:RegExp)=>(str:string)=>boolean
}
function simpleCompare(regExp:RegExp):(str:string)=>boolean{
    return function (str):boolean {
        let test=regExp.test(str);
        return test;
    }
}

const regExp: IExpressions = {
    email: {
        regexp: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        method: simpleCompare
    },
    ssn: {
        regexp: new RegExp(/(\d{3})-(\d{3})-(\d{4})/),
        method: simpleCompare
    },
    guid: {
        regexp: new RegExp(/('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i')/),
        method: simpleCompare
    }
};


export const expressions = regExp;
