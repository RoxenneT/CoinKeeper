<script>
export default {
    data() {
        return {
            categories:
                [
                    {
                        category: 'Дом',
                        img: 'https://cdn-icons-png.flaticon.com/512/3884/3884831.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Продукты',
                        img: 'https://cdn-icons-png.flaticon.com/512/6805/6805578.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Транспорт',
                        img: 'https://icon-library.com/images/transportation-icon-png/transportation-icon-png-20.jpg',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Одежда',
                        img: 'https://cdn-icons-png.flaticon.com/512/3531/3531744.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Обувь',
                        img: 'https://cdn-icons-png.flaticon.com/512/866/866692.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Здоровье',
                        img: 'https://cdn-icons-png.flaticon.com/512/883/883360.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Доставка еды',
                        img: 'https://cdn-icons-png.flaticon.com/512/2947/2947511.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Красота',
                        img: 'https://cdn-icons-png.flaticon.com/512/1997/1997108.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Отдых',
                        img: 'https://cdn-icons-png.flaticon.com/512/2906/2906609.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Налоги',
                        img: 'https://cdn-icons-png.flaticon.com/512/2943/2943235.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Техника',
                        img: 'https://cdn-icons-png.flaticon.com/512/448/448887.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Дети',
                        img: 'https://www.pngkey.com/png/full/64-647780_keep-away-from-children-icon-.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                         category: 'Подписки',
                        img: 'https://cdn-icons-png.flaticon.com/512/3187/3187902.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Долги',
                        img: 'https://cdn-icons-png.flaticon.com/512/1086/1086830.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                    {
                        category: 'Питомцы',
                        img: 'https://cdn-icons-png.flaticon.com/512/107/107777.png',
                        purchase: null,
                        originalPurchase: 0,
                        comment: ''
                    },
                ],
        }
    },
    mounted() {
        this.categories.forEach((category) => {
            const savedPurchase = localStorage.getItem(category.category);
            console.log(savedPurchase);
            const savedComment = localStorage.getItem(category.category + 'Comment');
            if (savedPurchase) {
                category.originalPurchase = savedPurchase;
            }
            if (savedComment) {
                category.comment = savedComment;
            }
        });
    },
    methods: {
        addMoneyInCategory(category) {
            category.originalPurchase = parseInt(category.originalPurchase) + parseInt(category.purchase)
            localStorage.setItem(category.category, category.originalPurchase);
            localStorage.setItem(category.category + 'Comment', category.comment);

            let objsLikeStrings = []
            for (let index = 0; index < this.categories.length; index++) {
                const element = JSON.stringify(this.categories[index]);
                objsLikeStrings.push(element)
            }

            localStorage.setItem('categories', JSON.stringify(objsLikeStrings))

            let transactions = localStorage.getItem('transactions')
            if (transactions) {
                transactions = JSON.parse(transactions)
            } else {
                transactions = []
            }
            transactions.push(
                JSON.stringify({
                    'category': category.category,
                    'purchase': category.purchase
                })
            )
            localStorage.setItem('transactions', JSON.stringify(transactions))

            category.purchase = '';
        },

    },
};
</script>

<template>
    <div class="containCard">
        <div class="categories" v-for="item in categories" :key="item.category">
            <h3>{{ item.category }}</h3>
            <img :src="item.img">
            <h3 v-if="item.originalPurchase" style="font-size: 20px;">{{ item.originalPurchase }}</h3>
            <h3 v-else style="font-size: 20px;">0</h3>
            <input type="number" v-model="item.purchase">
            <textarea v-model="item.comment" style="font-size: 15px; width: 90%; height: 50px;"></textarea>
            <button style="font-size: 20px;" @click="addMoneyInCategory(item)">Добавить</button>
        </div>
    </div>
</template>

<style scoped>
.containCard {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.categories {
    width: 300px;
    height: 400px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
}

img {
    width: 120px;
    height: 120px;
}

h3 {
    color: rgb(159, 81, 192);
    font-weight: lighter;

}

button {
    width: 35%;
    height: 10%;
    border: none;
    background-color: #5c5470;
    color: #dbd8e3;
}
</style>