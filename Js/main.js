//sorting numbers array

const array = [90,6,1,87,23,55,43,4,-25];
function sortArray(arr){
    let temp = 0;
    for(var i = 0 ; i < arr.length ; i++){
        for(var j = i +1; j < arr.length ; j++){
            if(arr[i] > arr[j]){
                   temp = arr[i];
                   arr[i] = arr[j];
                   arr[j] =temp;                                            
            }
        }     
    } 
    return arr;
}

console.log(sortArray(array));



//check students degree function

const students = [ {name:'Rail',degree:95},{name:'Elnur',degree:70},{name:'Fagan',degree:82},{name:'Memmed',degree:40}];


const checkDiplomDegree = (point)=>{
    let diplomDegrees = [];
     for(let i = 0 ; i < students.length ; i++){
         if(students[i].degree <50 && point <50){
              return console.log(students[i].name + " Kəsilmiş")
         }
         else if(point > 50 && point <=80){
             if(students[i].degree>50 && students[i].degree <80){
             return console.log(students[i].name + " Sade diplom")
             }
         }
         else if(point > 80 && point <= 90){
             if(students[i].degree >80 && students[i].degree <90){
                 return console.log(students[i].name + " Sheref diplomu")
             }
         }
         else if(point > 90 && point <= 100){
             if(students[i].degree > 90 && students[i].degree <= 100){
              
                 return console.log(students[i].name + " Yuksek sheref diplomu")
             }
         }
        }
    }
 checkDiplomDegree(87);


        // let highDegreeStudent = students.filter(function (a){
//     if(a.degree>90&&a.degree<=100)
//     return a.name + "ela";
//     else if(a.degree>80&&a.degree<=90)
//     return a.name + "orta"
//     else if(a.degree>50&&a.degree<=80)
//     return a.name + "yaxshi"
//     else if (a.degree>0&& a.degree<=50)
//     return a.name + "kafi"

// })
// console.log(highDegreeStudent);
9




// console.log(students.filter(highDegree));
// function highDegree(value){
//     if(value>90 && value <=100){
//         return value;
//     }
// }

// //     }
//  const highStudents = students.filter(obj=>obj.degree>90);
//  console.log(highStudents);




//         else  if(students[i].degree>50 && students[i].degree<80 && point >50 && point < 80){
//               return console.log(students[i].name + "<br>"+ "Adi diplom")
//          }
//         else  if( students[i].degree>80 && students[i].degree<90 && point >80 && point < 90){
//                  return console.log(students[i].name + "<br>"+ "Şərəf Diplomu")
//          }

//         else if( students[i].degree>=90 && students[i].degree<=100 && point >=90 && point <= 100 ){
//              return console.log(students[i].name + "<br>"+ "Yüksək Şərəf Diplomu")
//          }
//          else
//          return console.log("Bele bir telebe yoxdur");
//      }
// }

// const studentDegrees = students.filter(checkDegree);

// function checkDegree(value,index){
//     return students[index].degree<value;
// }
// console.log(studentDegrees);

