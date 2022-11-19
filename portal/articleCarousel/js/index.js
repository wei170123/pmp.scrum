$(document).ready(function () {
    var articles = [
        // {
        //     title: "不斷負回饋的肩頸痠痛，圓肩的拔河賽！",
        //     subTitle: "早上的鬧鐘是肩頸痠痛歸零的時刻，微開的眼皮、盥洗的開始，宣告一整天肩頸痠痛的開始。",
        //     img: "../plugins/images/articles/article1.jpg",
        //     data: "2019.05.01",
        //     link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E4%B8%8D%E6%96%B7%E8%B2%A0%E5%9B%9E%E9%A5%8B%E7%9A%84%E8%82%A9%E9%A0%B8%E7%97%A0%E7%97%9B-%E5%9C%93%E8%82%A9%E7%9A%84%E6%8B%94%E6%B2%B3%E8%B3%BD-891b35163a77"
        // },
        {
            title: "羽球人限定-運動按摩（一）",
            subTitle: "身為羽球人的你，是不是常常打完球隔天早上起床這裡痠那裡痛呢？",
            img: "https://i.imgur.com/69Kmdg4.jpg",
            data: "2019.05.03",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E7%BE%BD%E7%90%83%E4%BA%BA%E9%99%90%E5%AE%9A-%E9%81%8B%E5%8B%95%E6%8C%89%E6%91%A9-%E4%B8%80-92a26054446c"
        },
        {
            title: "羽球人限定-運動按摩(二)",
            subTitle: "撰文: Chun物理治療師",
            img: "https://i.imgur.com/NU6Jx4L.jpg",
            data: "2019.05.06",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E7%BE%BD%E7%90%83%E4%BA%BA%E9%99%90%E5%AE%9A-%E9%81%8B%E5%8B%95%E6%8C%89%E6%91%A9-%E4%BA%8C-feb91be6e43e"
        },
        {
            title: "阿朗壹古道的白色故事",
            subTitle: "柴聯自強號在大武車站緩緩駛入，我步出火車的剎那，嗅到有別於都市濃郁的碳粒空氣，取而代之的是...",
            img: "https://i.imgur.com/UEYhyrc.jpg",
            data: "2019.05.05",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E9%98%BF%E6%9C%97%E5%A3%B9%E5%8F%A4%E9%81%93%E7%9A%84%E7%99%BD%E8%89%B2%E6%95%85%E4%BA%8B-%E9%99%BD%E5%85%89%E4%B8%8B%E7%9A%84%E7%88%BA%E7%88%BA-d90add6c71ff"
        },
        {
            title: "運動傷害怎麼吃？",
            subTitle: "許多運動員在受傷期間可能會降低訓練量甚至停止訓練，為了避免體重或體脂增加而減少熱量攝取，但在傷癒過程的能量消耗其實比預期的還要高，因此...",
            img: "https://i.imgur.com/Kh7hoce.jpg",
            data: "2019.05.13",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E9%81%8B%E5%8B%95%E5%82%B7%E5%AE%B3%E6%80%8E%E9%BA%BC%E5%90%83-%E8%82%8C%E8%82%89%E7%AF%87-f0cacf5f9859"
        },
        {
            title: "止痛藥的都市傳說",
            subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/Y3HyJO9.jpg",
            data: "2019.05.14",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E6%AD%A2%E7%97%9B%E8%97%A5%E7%9A%84%E9%83%BD%E5%B8%82%E5%82%B3%E8%AA%AA-3ccd31e642da"
        },
        {
            title: "跑步、單車愛好者的痛",
            // subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/Aus5s3V.jpg",
            data: "2019.05.20",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E8%B7%91%E6%AD%A5-%E5%96%AE%E8%BB%8A%E6%84%9B%E5%A5%BD%E8%80%85%E7%9A%84%E7%97%9B-dfd343d634f3"
        },
        {
            title: "運動傷害怎麼吃？ -肌腱與韌帶篇-",
            // subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/B3My9PS.jpg",
            data: "2019.05.29",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E9%81%8B%E5%8B%95%E5%82%B7%E5%AE%B3%E6%80%8E%E9%BA%BC%E5%90%83-%E8%82%8C%E8%85%B1%E8%88%87%E9%9F%8C%E5%B8%B6%E7%AF%87-72b6d19fde33"
        },
        {
            title: "運動傷害怎麼吃？ -骨骼篇-",
            // subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/8AVADL6.jpg",
            data: "2019.05.29",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E9%81%8B%E5%8B%95%E5%82%B7%E5%AE%B3%E6%80%8E%E9%BA%BC%E5%90%83-%E9%AA%A8%E9%AA%BC%E7%AF%87-8920d2cc7af5"
        },
        {
            title: "慢性腳踝不穩定",
            // subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/P4NsdPc.jpg",
            data: "2019.05.29",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E6%85%A2%E6%80%A7%E8%85%B3%E8%B8%9D%E4%B8%8D%E7%A9%A9%E5%AE%9A-d1dce434a761"
        },
        {
            title: "運動禁藥的秘辛",
            // subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/TQ2XSCz.jpg",
            data: "2019.06.10",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E9%81%8B%E5%8B%95%E7%A6%81%E8%97%A5%E7%9A%84%E7%A7%98%E8%BE%9B-fdf7a2420d7d"
        },
        {
            title: "肌肉鬆弛劑真的這麼可怕嗎？",
            // subTitle: "窗外艷陽高照，又是一個出門運動的好天氣，但昨天打球扭傷的地方還隱隱作痛，只能鬱悶的待在家裡，哪也去不了。本想吃個止痛藥讓自己舒服些，但...",
            img: "https://i.imgur.com/kZHA7vW.jpg",
            data: "2019.06.10",
            link: "https://medium.com/gangkong%E5%81%A5%E5%BA%B7/%E8%82%8C%E8%82%89%E9%AC%86%E5%BC%9B%E5%8A%91%E7%9C%9F%E7%9A%84%E9%80%99%E9%BA%BC%E5%8F%AF%E6%80%95%E5%97%8E-519c4b49a1"
        }
    ]

    var carouselItem = $('#carousel-item-tmp').clone();
    $('#carousel-item-tmp').remove();

    for (var article of articles) {
        carouselItem.find('img').attr("src", article.img);
        // carouselItem.find('h4').text(article.title);
        carouselItem.find('a').attr("href", article.link);
        $('.carousel-inner').append(carouselItem.clone());
    }

    $('.carousel').carousel({
        interval: 3000
    })
});