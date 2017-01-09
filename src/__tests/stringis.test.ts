import * as chai from "chai"
let should = chai.should();
import {stringIs} from "../stringIs"

describe("#stringIs",()=>{
    describe("should be available on the string object",()=>{
        it('should have the object stringIs assigned to string object',(done)=>{
            let str='abc123@adp.com';
            console.log(1,stringIs.email(str))
            done();
        })
    })
});