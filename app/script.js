'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-05-22T23:36:17.929Z',
    '2022-05-28T10:51:36.790Z',
  ],
  currency: 'EGP',
  locale: 'ar-EG', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////////////////////
/////////////////////////////////////////////////
const logoutTimer = function () {
  let time = 60 * 5;
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}: ${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to start,${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
const formatMovementDate = function (date, locale) {
  const Calcdaypassed = (date2, date1) => {
    let re = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
    return Math.round(re);
  };
  const daysPassed = Calcdaypassed(new Date(), date);
  // console.log(daysPassed);
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed == 0) return 'Today';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  console.log(movs);
  movs.forEach((mov, i) => {
    let typeOfmovment;
    if (mov > 0) {
      typeOfmovment = 'deposit';
    } else {
      typeOfmovment = 'withdrawal';
    }
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);
    const fromattedMovements = formatCurrency(mov, acc.locale, acc.currency);
    // new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);
    const Element = `
  <div class="movements__row">
          <div class="movements__type movements__type--${typeOfmovment}">${
      i + 1
    }${typeOfmovment}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${fromattedMovements}</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', Element);
  });
};

const calcPrintBalance = (account) => {
  account.balance = account.movements.reduce((accumlator, current) => {
    return accumlator + current;
  }, 0);
  const fromattedMovements = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );

  labelBalance.textContent = `${fromattedMovements}`;
};

const displaySummry = (account) => {
  const incoms = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, currnet) => acc + currnet, 0);
  labelSumIn.textContent = formatCurrency(
    incoms,
    account.locale,
    account.currency
  );
  const outs = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, currnet) => acc + currnet, 0);
  labelSumOut.innerHTML = formatCurrency(
    Math.abs(outs),
    account.locale,
    account.currency
  );
  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((depsit) => depsit > 1)
    .reduce((acc, current) => acc + current, 0);
  labelSumInterest.innerHTML = formatCurrency(
    interest,
    account.locale,
    account.currency
  );
};

///////create user name

const craeteUserName = (accounts) => {
  accounts.forEach((accont) => {
    accont.username = accont.owner
      .toLocaleLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
craeteUserName(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  calcPrintBalance(acc);
  displaySummry(acc);
};

/**
 * turn euro to dollar with map method
 */
const movementsToUsd = movements.map((mov) => 1.1 * mov);
const deposits = movements.filter((mov) => mov > 0);
const withdrawals = movements.filter((mov) => mov < 0);

const totalDepostetoUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((accumlator, currnet) => accumlator + currnet, 0);

//////////////EVENT HANDLER
//LOGIN
let currentAccount, timer;
//Fake alway logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin == +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //currnet date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // let day = `${now.getDate()}`.padStart(2.0);
    // let month = `${now.getMonth() + 1}`.padStart(2, 0);
    // let year = now.getFullYear();
    // let hour = `${now.getHours()}`.padStart(2, 0);
    // let min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/ ${month}/${year} , ${hour}:${min}`;

    ///
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    displayMovements(currentAccount);
    if (timer) clearInterval(timer);
    calcPrintBalance(currentAccount);
    timer = logoutTimer();
    displaySummry(currentAccount);
  }
});
///////////////////CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value == currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
});

/////////////

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
    //reset timer
    clearInterval(timer);
    timer = logoutTimer();
  }
});

//////////////////////loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);
    }, 2500);
  }
  //reset timer
  clearInterval(timer);
  timer = logoutTimer();
  inputLoanAmount.value = '';

  //
});

///////////////////sort
let sortedState = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});
