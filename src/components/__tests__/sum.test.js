import { sum } from "../sum";

test("sum of two numbers", ()=>{
    const res = sum(3,4);

    expect(res).toBe(7);
})

