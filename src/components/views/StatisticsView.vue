<script>
export default {
    data() {
        return {
            transactions: []
        }
    },
    mounted() {
        let data = localStorage.getItem('transactions')
        if (data) {
            data = JSON.parse(data)
            data.forEach(element => {
                this.transactions.push(
                    JSON.parse(element)
                )
            });
        }
    },
}
</script>

<template>
    <div class="transactions">
        <div class="card" v-for="transaction in transactions" :key="transaction.category">
            <div class="tranzName">
                {{ transaction.category }}:
            </div>
            <div class="tranzSum">
                {{ transaction.purchase }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.transactions {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tranzName {
    width: 200px;
}

.tranzSum {
    width: 500px;
}

.tranzName,
.tranzSum {
    border: 1px solid #5c5470;
    height: 50px;
    padding: 10px;
}
</style>