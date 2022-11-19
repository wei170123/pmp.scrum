jQuery(function ($) {

    'use strict';

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    };

    var id = $.urlParam("id");
    // console.log(id);

    var info = {
        "Henry": {
            name: "Henry",
            job: "藥師",
            pImg: "../plugins/images/team/Henry.jpg",
            info: "生長於台灣，卻充滿著好奇心，想走遍世界各個角落、遇見各種人的藥師。期望自己能把所學，用大家熟悉的語言分享給更多的人，並致力於撕除身體不適者被眾人貼上生活習慣差的標籤，了解他們背後的生命故事，是什麼樣的因子造就他們現在的健康狀態，並共思健康促進的方案。",
            expertise: [
                "國家考試藥師",
                "台北市家庭藥師",
                "全國藥師聯合會居家藥師",
                "年輕藥師協會理事",
                "運動禁藥諮詢計畫主持人",
                "台大全球衛生課程講師"
            ],
            skill: [
                {
                    name: "用藥安全衛教",
                    pert: "90%"
                },
                {
                    name: "運動禁藥諮詢",
                    pert: "80%"
                },
                {
                    name: "藥物整合諮詢",
                    pert: "90%"
                },
                {
                    name: "用藥相關演講",
                    pert: "90%"
                },
                {
                    name: "藥物流行病學研究",
                    pert: "85%"
                }
            ],
            work: [
                {
                    workYear: "2019 - 現在",
                    workName: "台灣大學附設癌醫中心醫院藥師"
                },
                {
                    workYear: "2018-現在",
                    workName: "年輕藥師協會理事"
                },
                {
                    workYear: "2018 - 現在",
                    workName: "禁藥諮詢計畫主持人"
                },
                {
                    workYear: "2017 - 2019",
                    workName: "揚德健康診所藥師"
                }
            ],
            education: "國立台灣大學 臨床藥學研究所 碩士",
            contactMethod: ""
        },
        "Gavin": {
            name: "Gavin",
            job: "物理治療師",
            pImg: "../plugins/images/team/Gavin.jpg",
            info: "喜歡跨界合作的物理治療師，相信除專業的深耕外，跨界的激盪更可以讓物理治療發揮深度價值，曾跟運動、紡織、科技領域與餐飲業合作，運動領域從大型賽事到個人選手的傷害處理與強化訓練; 智慧式穿戴紡織品開發; 餐飲職業傷害處理，從每個細節觀察需求，藉由所長讓生活或表現更好。",
            expertise: [
                "高等考試物理治療師及格證書",
                "衛福部國民健康署 運動保健師",
                "衛福部長期照顧醫事人員Level 1",
                "CMT徒手治療脊椎認證",
                "CKT Method軟組織療法認證",
                "EMT-1救護技術員訓練合格證書"
            ],
            skill: [
                {
                    name: "肩關節疼痛處理",
                    pert: "96%"
                },
                {
                    name: "骨科物理治療",
                    pert: "85%"
                },
                {
                    name: "運動傷害處理及動作分析",
                    pert: "93%"
                },
                {
                    name: "職業傷害處理",
                    pert: "90%"
                },
                {
                    name: "肌內效貼紮",
                    pert: "88%"
                },
                {
                    name: "健康衛教演講",
                    pert: "85%"
                },
                {
                    name: "跨領域產品開發",
                    pert: "80%"
                }
            ],
            work: [
                {
                    workYear: "",
                    workName: "台大醫院臨床研究人員"
                },
                {
                    workYear: "",
                    workName: "臺灣大學田徑校隊 隨隊物理治療師"
                },
                {
                    workYear: "",
                    workName: "世界大學運動會田徑場 場館經理暨物理治療師"
                },
                {
                    workYear: "",
                    workName: "世界跆拳道品勢錦標賽 場邊物理治療師"
                },
                {
                    workYear: "",
                    workName: "18th 亞洲青年田徑錦標賽中華隊 隨隊物理治療師"
                },
                {
                    workYear: "",
                    workName: "台北國賓大飯店廚師檢測 合作物理治療師"
                },
                {
                    workYear: "",
                    workName: "裙擺搖搖LPGA錦標賽 曾雅妮個人物理治療師"
                },
                {
                    workYear: "",
                    workName: "2019 Sydney track classic (澳洲田徑經典賽) 陳奎儒個人物理治療師"
                }
            ],
            education: "國立台灣大學 物理治療研究所 碩士",
            contactMethod: ""
        },
        "Ear": {
            name: "Ear",
            job: "物理治療師",
            pImg: "../plugins/images/team/Ear.jpg",
            info: "一位熱愛運動的物理治療師，尤其是羽球，過往曾接觸田徑、體操…等，分析與研究運動員的傷害，幫助他們能夠再次回到賽場上，再創佳績；以及讓熱愛運動的民眾了解預防和處理運動傷害的正確觀念是我長期專注的方向。",
            expertise: [
                "國家考試物理治療師",
                "Kinetic Control: Movement Solution level I-III",
                "Dynamic Tape level I-II",
                "衛福部國健署 運動保健師",
                "2017世大運場邊物理治療",
                "社團法人中華肌內效協會C級認證"
            ],
            skill: [
                {
                    name: "骨科物理治療",
                    pert: "90%"
                },
                {
                    name: "運動傷害防護",
                    pert: "85%"
                },
                {
                    name: "運動衛教講座",
                    pert: "80%"
                }
            ],
            work: [
                {
                    workYear: "2016-2017",
                    workName: "台北市立大同高中體操隊隨隊物理治療師、北市大運動防護室治療師"
                },
                {
                    workYear: "2017-2019",
                    workName: "台北市立大同高中田徑隊隨隊物理治療師"
                },
                {
                    workYear: "2018-現在",
                    workName: "中華肌內效協會羽球運動貼紮講師"
                },
                {
                    workYear: "2018-現在",
                    workName: "安德復 民生復健專科診所 兼職治療師"
                },
                {
                    workYear: "2019-現在",
                    workName: "佳德診所 物理治療師"
                }
            ],
            education: "國立陽明大學 物理治療暨輔助科技所 碩士",
            contactMethod: ""
        },
        "Yi": {
            name: "易",
            job: "營養師",
            pImg: "../plugins/images/team/Yi.jpg",
            info: "運動營養師，同時兼具運動員、營養師、教練的三重身分，致力於尋找讓運動員更有效率進步的方式，堅信擁有健康的身體才能有強大的運動表現，曾協助過田徑、健美、健力、舉重、格鬥等各種運動項目的選手榮獲佳績，甚至是國際比賽的獎牌。",
            expertise: [
                "國家考試合格營養師",
                "國家考試合格食品技師",
                "C級田徑教練",
                "C級重量訓練教練",
                "C級體適能健身教練",
                "ISSN SNS 運動營養學專家",
                "CSCS 肌力與體能訓練專家"
            ],
            skill: [
                {
                    name: "體態調整",
                    pert: "95%"
                },
                {
                    name: "增肌減脂",
                    pert: "95%"
                },
                {
                    name: "運動營養講座",
                    pert: "90%"
                },
                {
                    name: "增補劑應用",
                    pert: "85%"
                },
                {
                    name: "功能性訓練",
                    pert: "90%"
                },
                {
                    name: "重量訓練",
                    pert: "85%"
                },
                {
                    name: "運動員飲食規劃",
                    pert: "95%"
                }
            ],
            work: [
                {
                    workYear: "現",
                    workName: "力坊體適能營養 顧問"
                },
                {
                    workYear: "",
                    workName: "國立台灣海洋大學 田徑隊指導 教練"
                }
            ],
            education: "國立台灣大學 食品科技研究所 碩士",
            contactMethod: ""
        }
    }

    var changeInfo = function (id) {
        let data = info[id];
        if (data["expertise"]) {
            $("#pImg").attr("src", data["pImg"]);
            $("#name").text(data["name"]);
            $("#job").text(data["job"]);
            $("#info").text(data["info"]);

            for (let expName of data["expertise"]) {
                let exp = $('#expertiseItem').clone();
                exp.find("#name").text("* " + expName);
                $('#expDiv').append(exp);
            }

            for (let skill of data["skill"]) {
                let skillTmp = $("#skillItem").clone();
                skillTmp.find("#skillName").text(skill['name']);
                skillTmp.find("#skillProgess").text(skill['pert']);
                skillTmp.find("#skillWidth").width(skill['pert']);
                $('#skillDiv').append(skillTmp);
            }
            $("#skillItem").remove();

            for (let work of data["work"]) {
                let workTmp = $("#workItem").clone();
                workTmp.find("#workYear").text(work['workYear']);
                workTmp.find("#workName").text(work['workName']);
                $('#workDiv').append(workTmp);
            }

            $("#education").text(data["education"]);
        }

        // $("#contactMethod").text(data["contactMethod"]);
    }
    changeInfo(id);
    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

}); // JQuery end