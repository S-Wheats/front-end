const korea_food = [
    { name: '된장찌개', imageUrl: './img/random/img1.png' },
    { name: '순두부찌개', imageUrl: './img/random/img2.png' },
    { name: '돌솥비빔밥', imageUrl: './img/random/img3.png' },
    { name: '들깨 순두부찌개', imageUrl: './img/random/img4.png' },
    { name: '치즈돌솥', imageUrl: './img/random/img5.png' },
    { name: '만두순두부', imageUrl: './img/random/img6.png' },
    { name: '떡만두국', imageUrl: './img/random/img7.png' },
    { name: '카레덮밥', imageUrl: './img/random/img8.png' },
    { name: '김치컵밥', imageUrl: './img/random/img9.png' },
    { name: '칼국수', imageUrl: './img/random/img10.png' },
    { name: '물냉면', imageUrl: './img/random/img11.png' },
    { name: '비빔냉면', imageUrl: './img/random/img12.png' },
    { name: '치즈라면', imageUrl: './img/random/img13.png' },
    { name: '계란라면', imageUrl: './img/random/img14.png' },  
    { name: '라면', imageUrl: './img/random/img15.png' }, 
    { name: '라볶이', imageUrl: './img/random/img16.png' },  
];


function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getRandomFood() {
    const randomIndex = getRandomIndex(korea_food.length);
    return korea_food[randomIndex];
}

function displayRecommendedFood() {
    const recommendedFood = getRandomFood();
    const foodImageElement = document.getElementById('food');
    const foodNameElement = document.getElementById('foodname');
    foodNameElement.innerHTML = recommendedFood.name;
    foodImageElement.src = recommendedFood.imageUrl;
}

function go() {
    //alert("HI");
    displayRecommendedFood();
    let i = 1;
    function recursive() {
        setTimeout(function() {
            displayRecommendedFood();
            i++;
            if (i <= 20) {
                recursive();
            }
        }, 50 + Math.pow(i, 2));
    }
    recursive();
}

// 버튼 클릭 이벤트 리스너 설정
const buttongo = document.getElementById('go');
buttongo.addEventListener('click', go);