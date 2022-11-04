const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const people = [1, 5, 3, 7, 2, 6, 4, 10, 4, 2];

function calcTip(bills) {
  const tips = [];
  for (let i = 0; i < bills.length; i++) {
    let tip = 0.2;
    if (bills[i] >= 50 && bills[i] <= 300) {
      tip = 0.15;
    }
    tips.push(tip);
  }
  return tips;
}

function Calctotalnodiscount(bills, calcTip) {
  const totalbill = [];
  for (let i = 0; i < bills.length; i++) {
    const total = bills[i] * (1 + calcTip);
    totalbill.push(total.toFixed(2));
  }
}

function CalcDis(people) {
  const dis = [];
  for (let i of people) {
    let discount = 0;
    if ((people[i] = 1 || people[i] >= 5)) {
      discount = 0.1;
    }
    dis.push(discount);
  }
  return dis;
}

function CalcTotal(bills, dis) {
  const total = 0;
  for (let i = 0; i < bills.length; i++) {
    total += bills[i] * (1 * dis[i]);
  }
  return total.toFixed(2);
}

function CalAverage(people, total) {
  let totalofPeople = 0;
  for (let i = 0; i < people.length; i++) {
    totalofPeople += people[i];
  }
  return (total / totalofPeople).toFixed(2);
}

const tipss = calcTip(bills);
const totalbillwithoutdiscount = Calctotalnodiscount(tipss,bills);
const discount = CalcDis(people);
const totalbill = CalcTotal(bills,discount);

console.log('Total bill today is ' + totalbill);
