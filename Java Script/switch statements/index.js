function switchStatement (a){
    switch (a){
        case 1:
            console.log("alpha");
            break;
            case 2:
                console.log("beta");
                break;
                case 3:
                    console.log("gamma");
                    break;
                    case 4:
                        console.log("theta");
                        break;
                        default:
                            console.log("default value");
    }
}
switchStatement(5);

// const user = {
//     uName: "Nauman",
//     age: 24,
//     education: "Software Engineering",
//     user2: {
//         uName: "hassan",
//         age: 23,
//         education: "BSCS",
//     }
// }
// let userValue = user.uName;
// console.log(userValue);

// const {uName, age, user2} = user
// console.log(user2.uName);

// destructuring

const nestedObject = {
    obj1:{
        a: 1,
        b: 2,
        obj2:{
            c:3,
            d:4,
            obj3:{
                e:5,
                f:6,
                obj4:{
                    g:7,
                    h:8,
                }
            }
        }
    }
}
// let uValue = nestedObject.obj1.obj2.a;
// console.log(uValue);

// let uValue1 = nestedObject['obj1'];
// console.log(uValue1);

const {obj1:a,b, obj2: { c,d , obj3:{e,f , obj4:{g,h}}}}  = nestedObject;
console.log(g);