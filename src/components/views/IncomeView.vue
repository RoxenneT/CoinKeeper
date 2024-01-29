<script>
export default {
    data() {
        return {
            inputValue: null,
            inputText: '',
            moneyArray: [],
            categories: []
        }
    },
    mounted() {
        const savedData = localStorage.getItem('money');
        const categoriesStings = localStorage.getItem('categories')

        if (categoriesStings) {
            let array = JSON.parse(categoriesStings)
            array.forEach(element => {
                this.categories.push(
                    JSON.parse(element)
                )
            });
        }
        if (savedData) {
            this.moneyArray = JSON.parse(savedData);
        }
    },
    methods: {
        writeMoneyCame() {
            if (this.inputValue) {
                const newBalance = {
                    date: new Date().toLocaleDateString(),
                    list: this.inputValue,
                    source: this.inputText
                }
                this.moneyArray.push(newBalance);
                localStorage.setItem('money', JSON.stringify(this.moneyArray));

                let transactions = localStorage.getItem('transactions')
                if (transactions) {
                    transactions = JSON.parse(transactions)
                } else {
                    transactions = []
                }
                transactions.push(
                    JSON.stringify({
                        'category': 'Пополнение',
                        'purchase': this.inputValue
                    })
                )
                localStorage.setItem('transactions', JSON.stringify(transactions))
                this.inputValue = '';
                this.inputText = '';
            }
        },
        deleteMoney(index) {
            this.moneyArray.splice(index, 1);
            localStorage.setItem('money', JSON.stringify(this.moneyArray));
        },
        findBalance(listMoney) {
            let positiveBalance = listMoney.reduce((partialSum, a) => partialSum + a.list, 0)
            this.categories.forEach(element => {
                console.log(element);
                positiveBalance = parseInt(positiveBalance) - parseInt(element.originalPurchase)
            });
            return positiveBalance
        },
    }
}
</script>

<template>
    <div class="gap">
        <div class="profile">
            <div class="picture"></div>
            <div class="info">
                <h3>Баланс: {{ findBalance(moneyArray) }}</h3>
            </div>
        </div>

        <div class="inp">
            <input v-model="inputValue" type="number" placeholder="Доход">
            <input v-model="inputText" type="text" placeholder="Источник дохода">
            <button @click="writeMoneyCame">ОК</button>
        </div>

        <div class="incomeHistory">
            <ul>
                <li v-for="(money, index) in moneyArray" :key="index">
                    {{ money.date + ': \n' + money.source + '\n - \n' + money.list }}
                    <button class="del" @click="deleteMoney">Удалить</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.gap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.profile,
.inp {
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.picture {
    width: 150px;
    height: 150px;
    background-image: url("https://www.success.com/wp-content/uploads/2017/05/motivatingquotesaboutbecomingrich.jpg");
    background-size: 100% 100%;
}

.info {
    width: 80%;
    height: 100%;
    border: 1px solid #dbd8e3;
    display: flex;
    align-items: center;
    padding-left: 10px;
}

input {
    width: 85%;
    height: 50%;
    border: 1px solid #dbd8e3;
    text-align: center;
    outline: 8px ridge rgba(57, 17, 74, 0.6);
}

button {
    width: 8%;
    height: 50%;
    border: none;
    background-color: #5c5470;
    color: #dbd8e3;
}

.del {
    width: 17%;
    height: 70%;
}

ul {
    width: 100%;
    list-style: none;
}

.incomeHistory {
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
}

li {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #dbd8e3;
}
</style>