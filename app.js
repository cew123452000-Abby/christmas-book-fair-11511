const rawBooks = `
褲子的聖誕節|上誼文化|幼兒共讀
聖誕老人送禮物|待實體書確認|幼兒共讀
聖誕樹驚喜|Nosy Crow|雙語閱讀
威洛比先生的耶誕樹|親子天下|經典故事
瑪格麗特的聖誕節|格林文化|溫暖分享
聖誕老公公不見了|小兵|任務冒險
耶誕快樂！貓咪雷弟|小天下|溫暖分享
莉塔和那個那個的聖誕節（新版）|阿布拉教育文化|幽默冒險
紅鬍子－耶誕節|康軒|經典故事
聖誕節的禮物|上誼文化|溫暖分享
小鼴鼠妙妙過耶誕節|青林國際|幼兒共讀
奇普的下雪天|青林國際|冬日故事
等待耶誕節的24個故事|小天下|經典故事
雪地裡的腳印|三之三文化|冬日故事
葛莉兒的聖誕襪|道聲出版社|溫暖分享
大頭 最棒的聖誕禮物|廣智文化|溫暖分享
寄信給耶誕老公公|天衛文化|互動想像
冬日的舞會|大好書屋|冬日故事
真的有聖誕老公公嗎？|英文漢聲|互動想像
聖誕夜：分享的喜悅|異想風|溫暖分享
智慧的聖誕禮物|聯經出版|品格成長
空空的聖誕襪|水滴文化|溫暖分享
瘋狂樹屋156層：搶救聖誕節大作戰|小麥田|任務冒險
蘋果樹小女巫3：特別的聖誕節|上誼文化|奇幻冒險
你能找到聖誕老公公的內褲嗎?|東雨文化|找找遊戲
小馴鹿的超級聖誕任務|幼福文化|立體遊戲
我想守護小小聖誕樹|碁峰資訊|品格成長
7歲名偵探小福爾摩斯:誰偷走聖誕樹?|東雨文化|推理解謎
善良，聖誕節最好的禮物|大穎文化|品格成長
土地爺爺過聖誕|楓葉社文化|臺灣原創
千千萬萬個聖誕老公公|野人文化|想像故事
小熊聖誕大尋寶|格林文化|找找遊戲
我與暴龍與聖誕節|青林國際|幽默冒險
聖誕老人的第一個聖誕節|維京國際|溫暖分享
我想當聖誕樹|重版文化|品格成長
聖誕小鼠出任務|采實文化|任務冒險
聖誕老公公是怎麼鑽進煙囪的？|上誼文化|互動想像
來不及啦聖誕節|巴巴文化|幽默冒險
好小好小的聖誕禮物|道聲出版社|溫暖分享
我是聖誕樹|步步出版|品格成長
都市傳說8：聖誕老人（十周年機密檔案限量典藏版＋番外篇）|奇幻基地|奇幻冒險
小兔彼得過聖誕：聖誕節倒數月曆|青林國際|互動遊戲
聖誕老婆婆|小兵出版社|臺灣原創
鱷魚愛上長頸鹿5：好忙好忙的聖誕節|采實文化|幽默冒險
下雪日的約定|水滴文化|冬日故事
小小人兒來幫忙：耶誕節來了|小魯文化|合作任務
100個耶誕老公公|小天下|找找遊戲
耶誕快樂,工程車!|小天下|合作任務
和耶誕老人一起跳舞|小果文創|互動遊戲
露露菈菈的美味聖誕節|東雨文化|自主閱讀
雪人|上誼文化|冬日故事
一個不能沒有禮物的日子|和英文化|品格成長
大聖誕老公公和小聖誕老公公|台灣東方|合作任務
好餓好餓的聖誕老公公|采實文化|幽默想像
100個耶誕老公公的12個月|小天下|找找遊戲
小雞過耶誕節|小魯文化|幼兒共讀
聖誕老公公要罷工！|聯經出版|幽默冒險
分享手作禮物的聖誕節|奧林|溫暖分享
恐龍男孩迪倫救了聖誕節|碁峰|幽默冒險
誰吃掉了聖誕節！？|東雨文化|幽默冒險
魯奇歐與呼哩呼哩：第一次過聖誕節耶！|時報出版|幽默冒險
達摩小小倒數聖誕節|小小和言|幼兒共讀
搶救聖誕節：解謎故事大冒險|小木馬出版|推理解謎
搶救聖誕節|世一文化|互動遊戲
小老鼠的聖誕節|宇宙光|經典故事
星星女孩與森林裡的聖誕節|采實文化|溫暖分享
巫婆阿妮過聖誕節|青林|幽默冒險
聖誕節，藏在小事裡|大好書屋|溫暖分享
傑琪的聖誕節|愛米粒|溫暖分享
小毛，聖誕節到了！|維京國際|幽默冒險`;

const verified = {
  "褲子的聖誕節": { author: "林明子（文／圖）", cover: "assets/covers-new/pants-christmas.jpg", summary: "大家準備到外婆家過聖誕，小毛卻還在家玩玩具。沒想到他的褲子等不及了，竟自己飛出門，小毛只好一路追趕。充滿想像力的情節，很適合幼兒親子共讀。", source: "https://www.eslite.com/product/1003117071819203" },
  "聖誕老人送禮物": { cover: "assets/covers-new/0010529694.webp", summary: "已依您提供的商品頁放入正確封面；因公開頁面無法可靠辨識此版作者與出版社，請以館藏實體書版權頁補登。", source: "https://www.books.com.tw/products/0010529694", verified: false },
  "聖誕樹驚喜": { author: "Ekaterina Trukhan", cover: "assets/covers-new/F019882847.webp", summary: "北極熊四處尋找閃亮的聖誕樹裝飾，翻開機關後，發現最珍貴的驚喜。適合親子一起找一找、猜一猜。", source: "https://www.books.com.tw/products/F019882847" },
  "奇普的下雪天": { author: "米克．英克潘（文／圖）", cover: "assets/covers-new/kidsbook-8120.jpg", summary: "奇普一早發現下雪，興奮地邀好朋友小虎一起打雪仗。活潑的冬日遊戲，帶孩子感受友情與探索的樂趣。", source: "https://www.kidsbook.com.tw/books/view_book.asp?id=8120" },
  "大頭 最棒的聖誕禮物": { author: "姚詠中／謝俐希（圖）", cover: "assets/covers-new/0010807029.webp", summary: "大頭在聖誕節前尋找心中最棒的禮物，透過一段溫暖的節慶經歷，重新思考禮物與關心的真正價值。", source: "https://www.books.com.tw/products/0010807029" },
  "威洛比先生的耶誕樹": { author: "羅勃．巴利（文／圖）", cover: "assets/covers-new/0011006248.webp", summary: "豪宅放不下太高的耶誕樹，剪下的樹梢卻一再被不同家庭接手。愈來愈小的樹，將分享與幸福傳得愈來愈遠。", source: "https://www.books.com.tw/products/0011006248" },
  "瑪格麗特的聖誕節": { author: "德佳丹／布蘭雪（圖）", cover: "assets/covers-new/marguerite-christmas.jpg", summary: "年老的瑪格麗特因對未知感到不安，逐漸把自己關在熟悉的家中。聖誕夜，一輛陌生車子停在門外；這場意外來訪，悄悄打開她長久封閉的心房。", source: "https://www.eslite.com/product/1003128672369538" },
  "聖誕老公公不見了": { author: "可白／達姆（圖）", cover: "assets/covers-new/0011060537.webp", summary: "聖誕節將近，聖誕老公公卻失蹤，最後還宣布今年不送禮物。孩子將在誤會與尋找中，看見感恩與心意的價值。", source: "https://www.books.com.tw/products/0011060537" },
  "耶誕快樂！貓咪雷弟": { author: "羅伯．史卡頓（文／圖）", cover: "assets/covers-new/0010800230.webp", summary: "貓咪雷弟期待耶誕節，也努力確認自己是不是好孩子。幽默日常陪孩子理解期待、情緒與家人的愛。", source: "https://www.books.com.tw/products/0010800230" },
  "莉塔和那個那個的聖誕節（新版）": { author: "尚－菲利普．阿胡－維諾／奧立維．塔列克（圖）", cover: "assets/covers-new/rita-christmas.jpg", summary: "莉塔和那個那個寫信給聖誕老公公、布置聖誕樹、準備晚餐和唱歌。漫長等待後，聖誕夜終於出現意想不到的訪客，帶來逗趣又溫暖的驚喜。", source: "https://www.eslite.com/product/1001165442682103389008" },
  "聖誕節的禮物": { author: "五味太郎（文／圖）", cover: "assets/covers-new/0010525711.webp", summary: "小女孩在床頭掛好聖誕襪，也悄悄為聖誕老公公準備一份禮物。當聖誕老公公發現襪子裡的心意，送禮的人也體會到被關心的喜悅。", source: "https://www.books.com.tw/products/0010525711" },
  "小鼴鼠妙妙過耶誕節": { author: "漢娜．杜斯克挈洛娃／茲特尼克．米勒爾（圖）", cover: "assets/covers-new/little-mole-christmas.jpg", summary: "妙妙想替大耳鼠和森林朋友安排一場耶誕慶祝會，烏鴉卻一再破壞精心布置。小鼴鼠要如何解決困難，送給朋友一個充滿愛與關懷的驚喜？", source: "https://www.eslite.com/product/1003114731960759" },
  "聖誕夜：分享的喜悅": { author: "江學瀅、翁文信／陳明佳（譯）", cover: "assets/covers-new/joy-of-sharing.jpg", summary: "聖誕節傍晚，嘟瑪把自己的禮物送給街上的乞丐，即使發現對方可能一再假扮，他仍真誠關心需要幫助的人。故事引導孩子討論分享、同理與善意。", source: "https://www.eslite.com/product/1003268652276734" },
  "智慧的聖誕禮物": { author: "歐．亨利／莉絲白．茨維格（圖）", cover: "assets/covers-new/wise-christmas-gift.jpg", summary: "一對生活並不富裕的夫妻，各自賣掉最珍貴的物品，只為替對方準備聖誕禮物。看似失去用途的禮物，卻讓彼此無私的愛與付出更加清楚。", source: "https://store.linkingbooks.com.tw/product/100-216" },
  "紅鬍子－耶誕節": { author: "王文華／BO2（圖）", cover: "assets/covers-new/0010407494.webp", summary: "惡名昭彰的大盜紅鬍子受到懲罰，必須學會把搶來的財物分享給窮人，才能再次品嘗美食。", source: "https://www.books.com.tw/products/0010407494" },
  "等待耶誕節的24個故事": { author: "思爾薇．波樂威／艾希克．葛斯戴（圖）", cover: "assets/covers-new/0010566161.webp", summary: "麻雀阿捷和小不點伯爵每天說一個故事，和朋友一起度過等待耶誕節的二十四天，練習期待與耐心。", source: "https://www.books.com.tw/products/0010566161" },
  "雪地裡的腳印": { author: "松岡芽衣（文／圖）", cover: "assets/covers-new/0010387974.webp", summary: "雪地裡一串串腳印，帶出好狼想改變大家印象的故事，引導孩子思考自我認同與對他人的刻板印象。", source: "https://www.books.com.tw/products/0010387974" },
  "葛莉兒的聖誕襪": { author: "伊莉莎白．溫若瑟／劉清彥（譯）", cover: "assets/covers-new/0010385774.webp", summary: "葛莉兒辛苦織好自己的襪子，卻在雪地遇見更需要溫暖的男孩。故事把聖誕襪化為給予與關懷的象徵。", source: "https://www.books.com.tw/products/0010385774" },
  "寄信給耶誕老公公": { author: "方素珍／郝洛玟（圖）", cover: "assets/covers-new/0011066307.webp", summary: "哥哥和妹妹從搶蠟筆的小衝突出發，一起畫畫、寫信給耶誕老公公，也在相處中學會分享與陪伴。", source: "https://www.books.com.tw/products/0011066307" },
  "冬日的舞會": { author: "林以維／魏敬學（圖）", cover: "assets/covers-new/0010524030.webp", summary: "蟲蟲村舉辦冬日舞會，怕被嘲笑的蜻蜓胖胖躲在家裡。朋友的關心與鼓勵，陪他找回參與的勇氣。", source: "https://www.books.com.tw/products/0010524030" },
  "真的有聖誕老公公嗎？": { author: "暉峻淑子", cover: "assets/covers-new/0010505386.webp", summary: "孩子在洗澡時連珠炮似地提問：聖誕老公公從哪裡來、夏天在做什麼？親子對話保留了好奇與想像。", source: "https://www.books.com.tw/products/0010505386" },
  "空空的聖誕襪": { author: "理察．柯提斯／蕾貝卡．寇柏（圖）", cover: "assets/covers-new/0011035818.webp", summary: "一對雙胞胎的聖誕襪被弄錯，頑皮的孩子發現姊妹的襪子空空如也，必須做出關於分享與手足之愛的選擇。", source: "https://www.books.com.tw/products/0011035818" },
  "瘋狂樹屋156層：搶救聖誕節大作戰": { author: "安迪．格里菲斯／泰瑞．丹頓（圖）", cover: "assets/covers-new/0010970740.webp", summary: "安迪和泰瑞正準備歡度聖誕，神祕包裹卻讓雪人、馴鹿與聖誕老人接連出狀況，展開一場失控又爆笑的搶救任務。", source: "https://www.books.com.tw/products/0010970740" },
  "蘋果樹小女巫3：特別的聖誕節": { author: "薩比娜・斯塔丁／薩比娜・比希納（圖）", cover: "assets/covers-new/0010906168.webp", summary: "蘋果樹小女巫佩特羅妮拉和雙胞胎準備迎接聖誕節，卻遇上一連串意外。奇幻又熱鬧的故事，帶孩子看見友情、勇氣與合作的力量。", source: "https://www.books.com.tw/products/0010906168" },
  "你能找到聖誕老公公的內褲嗎?": { author: "貝琪．戴維斯／艾力克斯．威爾莫（圖）", cover: "assets/covers/underwear.png", summary: "聖誕夜出發前，聖誕老公公竟然找不到內褲！孩子一邊觀察熱鬧圖畫，一邊幫忙搜尋，也看見朋友合作解決問題的力量。", source: "https://www.sanmin.com.tw/product/index/009791643" },
  "小馴鹿的超級聖誕任務": { author: "Helen Graper（繪）", cover: "assets/covers-new/0010939493.webp", summary: "跟著小馴鹿走進大場景立體書，在層層展開的節慶場景裡完成任務，感受互助合作的樂趣。", source: "https://www.books.com.tw/products/0010939493" },
  "我想守護小小聖誕樹": { author: "Thomas Meyer", cover: "assets/covers-new/0010972481.webp", summary: "一則關於接納、相信與愛的品格故事。孩子會從守護小樹的行動中，思考關心與陪伴的意義。", source: "https://www.books.com.tw/products/0010972481" },
  "7歲名偵探小福爾摩斯:誰偷走聖誕樹?": { author: "帕斯卡．普雷沃／赫魯特方丹．阿特（圖）", cover: "assets/covers-new/0010967986.webp", summary: "聖誕樹不見了！小讀者要跟著七歲名偵探觀察線索、排除疑點，在互動遊戲中一步步找出答案。", source: "https://www.books.com.tw/products/0010967986" },
  "善良，聖誕節最好的禮物": { author: "伊莎貝拉．芭亞／保羅．伯耶蒂（圖）", cover: "assets/covers-new/0011001348.webp", summary: "小老鼠霍莉趕著寄信給聖誕老公公，途中仍停下來幫助需要的人。故事帶孩子看見，分享與善良比物質禮物更能帶來喜悅。", source: "https://www.books.com.tw/products/0011001348" },
  "土地爺爺過聖誕": { author: "鐘穎／莊予瀞（圖）", cover: "assets/covers/landgod.jpg", summary: "土地爺爺與聖誕老公公原本是好朋友，卻在節日前夕鬧起彆扭。充滿臺灣味的故事，溫柔談友情、誤會與彼此在乎。", source: "https://www.books.com.tw/products/0010971462" },
  "千千萬萬個聖誕老公公": { author: "母袋裕子／瑪麗卡．邁亞拉（圖）", summary: "世界上的孩子愈來愈多，一位聖誕老公公怎麼來得及送完禮物？故事用充滿想像力的方式，回答聖誕老人如何變成千千萬萬個。", source: "https://www.bookrep.com.tw/?at=bookcontent&cl=book&id=14126&md=gwindex" },
  "小熊聖誕大尋寶": { author: "格格里．杜達", cover: "assets/covers/bear-hunt.jpg", summary: "跟著小熊準備聖誕派對，在熱鬧畫面中尋找拐杖糖、裝飾品與各種小驚喜，練習觀察力與專注力。", source: "https://www.littlebookproject.com/en/products/9789861898308" },
  "聖誕老人的第一個聖誕節": { author: "麥克．巴奈特／席尼．史密斯（圖）", cover: "assets/covers/first-christmas.jpg", summary: "總是替別人準備節日的聖誕老人，第一次成為被祝福的主角。朋友為他布置、準備餐點，一起感受分享與感謝。", source: "https://www.pccr.tw/%E6%89%80%E6%9C%89%E6%9B%B8%E7%B1%8D/gvgwe7mdgsrgvanu5hauegl9" },
  "聖誕老公公是怎麼鑽進煙囪的？": { author: "麥克．巴奈特／雍．卡拉森（圖）", cover: "assets/covers-new/0010971703.webp", summary: "聖誕老公公究竟怎麼通過窄窄的煙囪？這本書把孩子最愛問的問題，變成一連串幽默又天馬行空的猜想。", source: "https://www.books.com.tw/products/0010971703" },
  "100個耶誕老公公": { author: "谷口智則（文／圖）", cover: "assets/covers/hundred-santas.png", summary: "一百位各有特色的耶誕老公公，春夏秋冬都在忙些什麼？孩子可以一邊數、一邊找，發現送禮物前的祕密準備。", source: "https://www.eslite.com/product/1003264122549776" },
  "耶誕快樂,工程車!": { author: "雪莉．達斯基．林克／AG．福特（圖）", cover: "assets/covers/construction.jpg", summary: "工程車在耶誕夜前完成最後一項大工程。忙碌的工作、互相幫忙與溫暖驚喜，陪孩子迎接節日。", source: "https://tw.bid.yahoo.com/item/100773461934" },
  "露露菈菈的美味聖誕節": { author: "安晝安子", summary: "露露和菈菈第一次裝飾店裡的聖誕樹，也用甜點和故事款待朋友。適合已能自行閱讀的孩子。", source: "https://www.sanmin.com.tw/product/index/004810122" },
  "一個不能沒有禮物的日子": { author: "陳致元（文／圖）", cover: "assets/covers/no-gift-day.webp", summary: "熊爸爸失業後，家裡沒有多餘的錢買禮物。小熊悄悄找回家人遺失的舊物，重新包成充滿回憶與關心的聖誕禮物。", source: "https://www.sanmin.com.tw/product/index/000749245" },
  "千千萬萬個聖誕老公公": { author: "母袋裕子／瑪麗卡．邁亞拉（圖）", cover: "assets/covers-new/0011064359.webp", summary: "孩子愈來愈多，一位聖誕老公公怎麼送得完禮物？故事用充滿想像力的變化，回答聖誕老人如何成為千千萬萬個。", source: "https://www.books.com.tw/products/0011064359" },
  "我與暴龍與聖誕節": { author: "慶惠媛（文／圖）", cover: "assets/covers-new/0011003637.webp", summary: "喜愛恐龍的小男孩與爸爸一起生活，聖誕節前出現一連串小恐龍般的驚喜，溫柔描繪親子間不說出口的愛。", source: "https://www.books.com.tw/products/0011003637" },
  "聖誕小鼠出任務": { author: "喬瑟夫．科爾賀（文／圖）", cover: "assets/covers-new/0011004801.webp", summary: "聖誕小鼠努力確保禮物能順利送達，在忙碌任務中展現勇氣、合作與不放棄的精神。", source: "https://www.books.com.tw/products/0011004801" },
  "來不及啦聖誕節": { author: "劉思源／王書曼（圖）", cover: "assets/covers-new/0010939910.webp", summary: "十二月二十四日到了，山上的貓咪們卻什麼都還沒準備好！一場手忙腳亂又溫暖的聖誕節就此展開。", source: "https://www.books.com.tw/products/0010939910" },
  "好小好小的聖誕禮物": { author: "彼得．雷諾茲（文／圖）", cover: "assets/covers-new/0010611914.webp", summary: "男孩一心想要愈來愈大的禮物，最後才發現，家與家人的陪伴，才是最珍貴也最巨大的聖誕禮物。", source: "https://www.books.com.tw/products/0010611914" },
  "我是聖誕樹": { author: "佐野洋子（文／圖）", cover: "assets/covers-new/0010804115.webp", summary: "一棵小樅樹渴望成為聖誕樹，甚至鼓起勇氣踏上追夢旅程。故事陪孩子思考夢想、堅持與被支持的力量。", source: "https://www.books.com.tw/products/0010804115" },
  "都市傳說8：聖誕老人（十周年機密檔案限量典藏版＋番外篇）": { author: "笭菁", cover: "assets/covers-new/0011050375.webp", summary: "以校園聖誕節與神祕的收禮名單為背景，將熟悉的聖誕老人傳說改寫成奇幻驚悚小說，較適合高年級以上讀者。", source: "https://www.books.com.tw/products/0011050375" },
  "小兔彼得過聖誕：聖誕節倒數月曆": { author: "瑞秋．波登／奈爾．佛克納（圖）", cover: "assets/covers-new/0010905657.webp", summary: "用二十四篇彼此相連的故事，陪小兔彼得和朋友從十二月一路倒數到聖誕夜，並搭配手作與尋寶活動。", source: "https://www.books.com.tw/products/0010905657" },
  "聖誕老婆婆": { author: "李光福／徐建國（圖）", cover: "assets/covers-new/0010766098.webp", summary: "聖誕老婆婆認為禮物應送給真正懂得珍惜的孩子，於是親自展開送禮任務，帶出責任、選擇與感恩。", source: "https://www.books.com.tw/products/0010766098" },
  "鱷魚愛上長頸鹿5：好忙好忙的聖誕節": { author: "達妮拉．庫洛特（文／圖）", cover: "assets/covers-new/0010911904.webp", summary: "鱷魚與長頸鹿一家準備聖誕樹、薑餅和雪人，卻一路狀況連連。全家透過討論與分工，一起解決難題。", source: "https://www.books.com.tw/products/0010911904" },
  "下雪日的約定": { author: "理察．柯提斯／蕾貝卡．寇柏（圖）", cover: "assets/covers-new/0010870961.webp", summary: "停課的下雪日裡，原本互不欣賞的老師與學生意外成為彼此的陪伴，在雪地遊戲中建立新的理解。", source: "https://www.books.com.tw/products/0010870961" },
  "小小人兒來幫忙：耶誕節來了": { author: "中川千尋／古寄純嗣（圖）", cover: "assets/covers-new/0010938771.webp", summary: "小小人兒接到耶誕老公公的祕密任務，出動工程車分工合作。豐富細節很適合觀察、找線索與共讀。", source: "https://www.books.com.tw/products/0010938771" },
  "和耶誕老人一起跳舞": { author: "李妍朱", cover: "assets/covers-new/0010838702.webp", summary: "不靠馴鹿與大禮物袋，耶誕老人用舞蹈和魔法咒語送出歡樂。小女孩和黑貓也偷偷加入，展開唱跳驚喜。", source: "https://www.books.com.tw/products/0010838702" },
  "露露菈菈的美味聖誕節": { author: "安晝安子", cover: "assets/covers-new/0010656894.webp", summary: "露露和菈菈第一次裝飾店裡的聖誕樹，也用甜點與故事款待朋友，適合已能自行閱讀的孩子。", source: "https://www.books.com.tw/products/0010656894" },
  "雪人": { author: "雷蒙．布力格（文／圖）", cover: "assets/covers-new/0010972342.webp", summary: "男孩堆出的雪人在夜裡活了起來，兩人共享一段沒有文字、充滿想像與感動的冬夜奇遇。", source: "https://www.books.com.tw/products/0010972342" },
  "大聖誕老公公和小聖誕老公公": { author: "谷口智則（文／圖）", cover: "assets/covers-new/0011065711.webp", summary: "住在隔壁卻從未交談的大小聖誕老公公，各自收到不合尺寸的願望。為了趕在天亮前完成任務，他們學會跨出第一步、互相合作。", source: "https://www.books.com.tw/products/0011065711" },
  "好餓好餓的聖誕老公公": { author: "咕嚕嚕眼鏡（文／圖）", cover: "assets/covers-new/0011066184.webp", summary: "餓著肚子送禮物的聖誕老公公，把雪山、湖泊與岩石都看成美味料理。孩子可以一邊猜食物，一邊認識節慶餐點。", source: "https://www.books.com.tw/products/0011066184" },
  "100個耶誕老公公的12個月": { author: "谷口智則（文／圖）", cover: "assets/covers-new/0011065670.webp", summary: "送完禮物後，一百位耶誕老公公從一月到十二月仍各自忙碌。細節豐富的畫面，藏著一位總在睡覺的老公公的祕密任務。", source: "https://www.books.com.tw/products/0011065670" },
  "小雞過耶誕節": { author: "工藤紀子（文／圖）", cover: "assets/covers-new/0010905871.webp", summary: "小雞們努力當乖寶寶，期待耶誕老公公帶來驚喜。故事以市集、布置、餐點與禮物，陪幼兒認識節慶。", source: "https://www.books.com.tw/products/0010905871" },
  "聖誕老公公要罷工！": { author: "蘿拉．邦廷", cover: "assets/covers-new/0010970592.webp", summary: "聖誕老公公突然罷工，孩子們只好發揮創意與行動力，一起想辦法拯救今年的聖誕節。", source: "https://www.books.com.tw/products/0010970592" },
  "我想當聖誕樹": { author: "奧利維耶．塔列克（文／圖）", cover: "assets/covers-new/0011003994.webp", summary: "路邊苗圃裡的小冷杉薩皮，夢想有一天成為閃閃發亮的聖誕樹。追夢的路並不如想像順利，幽默故事陪孩子思考夢想、挫折與生命的不同可能。", source: "https://www.books.com.tw/products/0011003994" },
  "100個耶誕老公公": { author: "谷口智則（文／圖）", cover: "assets/covers/hundred-santas.png", summary: "一百位各有特色的耶誕老公公，春夏秋冬都在忙些什麼？孩子可以一邊數、一邊找，發現送禮物前的祕密準備。", source: "https://www.books.com.tw/products/0010733433" },
  "分享手作禮物的聖誕節": { author: "大衛．卡利／里喬利‧羅薩札（圖）", cover: "assets/covers-new/0011063471.webp", summary: "麋鹿先生和布魯諾原想在熱鬧市集盛大過節，卻發現採買讓人疲憊。最後，他們用手作餅乾、溫蘋果汁與安靜陪伴，體會簡單相聚就是最幸福的聖誕禮物。", source: "https://www.books.com.tw/products/0011063471" },
  "恐龍男孩迪倫救了聖誕節": { author: "安迪・戴／艾力克斯・派翠克（圖）", cover: "assets/covers-new/0011068721.webp", summary: "迪倫只要一打噴嚏就會變成恐龍，偏偏在聖誕節前夕感冒了！一連串失控意外讓聖誕節面臨危機，他必須接納自己的獨特，找出拯救節日的方法。", source: "https://www.books.com.tw/products/0011068721" },
  "誰吃掉了聖誕節！？": { author: "露．卡特／妮吉．迪森（圖）", cover: "assets/covers-new/0010935841.webp", summary: "聖誕夜，麋鹿的魔法飼料竟被貪吃的獨角獸奧斯卡吃光了！大家必須發揮創意、靈活應變，才能讓聖誕老人順利出發送禮物。", source: "https://www.books.com.tw/products/0010935841" },
  "魯奇歐與呼哩呼哩：第一次過聖誕節耶！": { author: "庄野菜穗子（文／圖）", cover: "assets/covers-new/0010805858.webp", summary: "黑貓魯奇歐和呼哩呼哩第一次布置松樹、掛上襪子，滿心期待聖誕老公公帶來貓罐罐。兩隻憨貓的節慶準備，充滿傻氣又可愛的驚喜。", source: "https://www.books.com.tw/products/0010805858" },
  "達摩小小倒數聖誕節": { author: "KAYO（文／圖）", cover: "assets/covers-new/0011004709.webp", summary: "可愛的達摩們在雪花飄落的日子裡，布置聖誕樹、製作卡片和餅乾、堆雪人，一起倒數等待聖誕老人。中日雙語設計也能延伸簡單的語言學習。", source: "https://www.books.com.tw/products/0011004709" },
  "搶救聖誕節：解謎故事大冒險": { author: "蘿倫．布伊蘇／梅蘭妮．胡比諾（圖）", cover: "assets/covers-new/0011065940.webp", summary: "聖誕老人的馴鹿累壞了！小讀者要完成五大任務與二十多道觀察、迷宮和邏輯謎題，找出神奇配方，讓送禮隊伍及時恢復精神。", source: "https://www.books.com.tw/products/0011065940" },
  "搶救聖誕節": { author: "Campbell Books／Yujin Shin（圖）", cover: "assets/covers-new/0010877916.webp", summary: "聖誕老人的雪橇壞了，快來看看雪人如何幫忙修復！推、拉、轉的操作機關，讓幼兒在冒險故事中鍛鍊手指靈活度與手眼協調。", source: "https://www.books.com.tw/products/0010877916" },
  "小老鼠的聖誕節": { author: "陸可鐸", cover: "assets/covers-new/0010806667.webp", summary: "小老鼠貝貝和小不點覺得自己又小又平凡，聽說有一位君王即將在伯利恆降生，便四處尋找。溫暖故事讓孩子看見，每個微小生命都有獨特價值。", source: "https://www.books.com.tw/products/0010806667" },
  "星星女孩與森林裡的聖誕節": { author: "茉知直美／布川愛子（圖）", cover: "assets/covers-new/0011063317.webp", summary: "森林動物們裝飾樹木、準備點心，等待神祕的小星子到來。星星女孩帶來點亮森林的魔法，也讓大家在歌聲、禮物與相聚中感受節日溫暖。", source: "https://www.books.com.tw/products/0011063317" },
  "巫婆阿妮過聖誕節": { author: "韋樂莉．湯瑪士／柯奇．保羅（圖）", cover: "assets/covers-new/0010873458.webp", summary: "巫婆阿妮和黑貓阿寶迎接聖誕節，魔法卻讓節慶準備變得比想像中更熱鬧。熟悉的幽默情節，陪孩子感受驚喜與歡樂。", source: "https://www.books.com.tw/products/0010873458" },
  "聖誕節，藏在小事裡": { author: "史黛拉．J．瓊斯／珍．梅西（圖）", cover: "assets/covers-new/0011069572.webp", summary: "烘焙時把木勺當麥克風、一起唱歌、與森林動物分享歡樂……故事邀請孩子發現，聖誕魔法就藏在家人相聚、共同創造回憶的每一件小事裡。", source: "https://www.books.com.tw/products/0011069572" },
  "傑琪的聖誕節": { author: "相原博之／足立奈實（圖）", cover: "assets/covers-new/0010771626.webp", summary: "傑琪和十一個小熊哥哥準備過聖誕節，也在節日裡遇見一位孤單的老婆婆。小熊們用陪伴和行動，讓寒冷的冬日多了一份家的溫暖。", source: "https://www.books.com.tw/products/0010771626" },
  "小毛，聖誕節到了！": { author: "大衛．夏儂（文／圖）", cover: "assets/covers-new/0010734911.webp", summary: "小毛非常期待聖誕節，列出長長的禮物清單，卻還是爬高、偷看禮物，差點弄倒聖誕樹。調皮的他最後仍收到一份意想不到的驚喜。", source: "https://www.books.com.tw/products/0010734911" }
};

const ageGroups = {
  "幼兒": ["褲子的聖誕節", "聖誕老人送禮物", "聖誕樹驚喜", "耶誕快樂！貓咪雷弟", "聖誕節的禮物", "小鼴鼠妙妙過耶誕節", "奇普的下雪天", "寄信給耶誕老公公", "真的有聖誕老公公嗎？", "你能找到聖誕老公公的內褲嗎?", "小馴鹿的超級聖誕任務", "小熊聖誕大尋寶", "聖誕老公公是怎麼鑽進煙囪的？", "小兔彼得過聖誕：聖誕節倒數月曆", "鱷魚愛上長頸鹿5：好忙好忙的聖誕節", "小小人兒來幫忙：耶誕節來了", "100個耶誕老公公", "耶誕快樂,工程車!", "和耶誕老人一起跳舞", "雪人", "好餓好餓的聖誕老公公", "100個耶誕老公公的12個月", "小雞過耶誕節", "誰吃掉了聖誕節！？", "魯奇歐與呼哩呼哩：第一次過聖誕節耶！", "達摩小小倒數聖誕節", "搶救聖誕節", "聖誕節，藏在小事裡", "傑琪的聖誕節", "小毛，聖誕節到了！"],
  "低年級": ["威洛比先生的耶誕樹", "聖誕老公公不見了", "莉塔和那個那個的聖誕節（新版）", "紅鬍子－耶誕節", "雪地裡的腳印", "葛莉兒的聖誕襪", "大頭 最棒的聖誕禮物", "冬日的舞會", "聖誕夜：分享的喜悅", "空空的聖誕襪", "我想守護小小聖誕樹", "7歲名偵探小福爾摩斯:誰偷走聖誕樹?", "善良，聖誕節最好的禮物", "土地爺爺過聖誕", "千千萬萬個聖誕老公公", "我與暴龍與聖誕節", "聖誕老人的第一個聖誕節", "我想當聖誕樹", "聖誕小鼠出任務", "來不及啦聖誕節", "好小好小的聖誕禮物", "聖誕老婆婆", "一個不能沒有禮物的日子", "大聖誕老公公和小聖誕老公公", "聖誕老公公要罷工！", "分享手作禮物的聖誕節", "恐龍男孩迪倫救了聖誕節", "搶救聖誕節：解謎故事大冒險", "小老鼠的聖誕節", "星星女孩與森林裡的聖誕節", "巫婆阿妮過聖誕節"],
  "中年級": ["瑪格麗特的聖誕節", "等待耶誕節的24個故事", "蘋果樹小女巫3：特別的聖誕節", "我是聖誕樹", "下雪日的約定", "露露菈菈的美味聖誕節"],
  "高年級": ["智慧的聖誕禮物", "瘋狂樹屋156層：搶救聖誕節大作戰"],
  "國中以上": ["都市傳說8：聖誕老人（十周年機密檔案限量典藏版＋番外篇）"]
};
const ageByTitle = Object.fromEntries(Object.entries(ageGroups).flatMap(([age, titles]) => titles.map(title => [title, age])));

const books = rawBooks.trim().split("\n").map((line, index) => {
  const [title, publisher, theme] = line.split("|");
  const detail = verified[title] || {};
  return { id: index + 1, title, publisher, theme, ageGroup: ageByTitle[title] || "待確認", author: detail.author || "待實體書版權頁確認", summary: detail.summary || "館藏清單僅提供書名或分類資料，目前無法可靠確認版本。請查看實體書版權頁的 ISBN、作者與出版社後補充。", cover: detail.cover || "", source: detail.source || "", verified: detail.verified ?? Boolean(detail.author && detail.summary) };
});

const quizQuestions = [
  {
    question: "如果有一個自由的聖誕午後，你最想做什麼？",
    options: [
      ["warm", "和朋友一起做小禮物，送給想感謝的人"],
      ["adventure", "把校園變成任務基地，完成一場救援行動"],
      ["puzzle", "尋找藏在各處的線索，解開神祕寶箱"],
      ["humor", "玩一個會讓大家笑到停不下來的遊戲"],
      ["wonder", "安靜看雪、聽音樂，想像遠方的奇妙世界"]
    ]
  },
  {
    question: "翻開故事書時，你最期待遇見哪一種主角？",
    options: [
      ["warm", "總會發現別人需要，願意伸出手的朋友"],
      ["adventure", "遇到危機也敢向前衝的行動派英雄"],
      ["puzzle", "觀察細節、一步步找出答案的小偵探"],
      ["humor", "常常闖禍，卻讓人又好氣又好笑的角色"],
      ["wonder", "能看見星光、魔法和祕密世界的夢想家"]
    ]
  },
  {
    question: "聖誕樹下出現一份神祕禮物，你希望裡面是什麼？",
    options: [
      ["warm", "一封寫滿家人與朋友回憶的感謝信"],
      ["adventure", "一張邀請你立刻出發的冒險地圖"],
      ["puzzle", "一盒必須破解機關才能打開的禮物"],
      ["humor", "一個出乎意料、打開就會讓大家大笑的玩具"],
      ["wonder", "一顆能點亮夜空、實現想像的星星"]
    ]
  },
  {
    question: "讀完一本好書後，你最想留下哪一種感覺？",
    options: [
      ["warm", "心裡暖暖的，更想珍惜身邊的人"],
      ["adventure", "充滿勇氣，想馬上挑戰一件新鮮事"],
      ["puzzle", "腦袋亮起來，忍不住想再找一遍線索"],
      ["humor", "心情變輕鬆，還想把笑點分享給同學"],
      ["wonder", "安靜又滿足，好像做了一場美麗的夢"]
    ]
  }
];

const quizProfiles = {
  warm: { title: "暖心分享家", text: "你很會留意身邊人的感受，也相信陪伴與心意比昂貴禮物更珍貴。溫柔、有情感轉折的故事，最容易走進你的心裡。", book: "分享手作禮物的聖誕節" },
  adventure: { title: "勇氣行動派", text: "你喜歡迎接挑戰，遇到困難時會想辦法讓事情繼續前進。節奏明快、充滿任務與成長的故事，正適合現在的你。", book: "恐龍男孩迪倫救了聖誕節" },
  puzzle: { title: "線索觀察家", text: "你享受仔細觀察、整理線索，再靠自己的力量找出答案。能邊讀邊想、動手破解關卡的書，會讓你讀得特別投入。", book: "搶救聖誕節：解謎故事大冒險" },
  humor: { title: "歡樂笑聲王", text: "你喜歡用幽默替生活加一點亮光，也很會把快樂分享給大家。情節出乎意料、角色可愛逗趣的故事，最合你的閱讀口味。", book: "好餓好餓的聖誕老公公" },
  wonder: { title: "星光想像家", text: "你的想像力像冬夜星光一樣閃亮，喜歡安靜感受畫面與故事留下的餘韻。溫柔又帶著魔法感的書，會陪你走得很遠。", book: "星星女孩與森林裡的聖誕節" }
};

const state = { search: "", status: "all", age: "all", theme: "全部", list: new Set(JSON.parse(localStorage.getItem("christmasReadingList") || "[]")) };
const els = {
  grid: document.querySelector("#bookGrid"), featured: document.querySelector("#featuredGrid"), result: document.querySelector("#resultCount"), empty: document.querySelector("#emptyState"),
  search: document.querySelector("#searchInput"), status: document.querySelector("#statusFilter"), age: document.querySelector("#ageFilter"), themes: document.querySelector("#themeFilters"),
  dialog: document.querySelector("#bookDialog"), dialogContent: document.querySelector("#dialogContent"), readingDialog: document.querySelector("#readingDialog"), readingItems: document.querySelector("#readingListItems"), listCount: document.querySelector("#listCount")
};
const quizEls = {
  start: document.querySelector("#quizStart"), question: document.querySelector("#quizQuestion"), result: document.querySelector("#quizResult"),
  progressText: document.querySelector("#quizProgressText"), progressBar: document.querySelector("#quizProgressBar"), questionTitle: document.querySelector("#quizQuestionTitle"), options: document.querySelector("#quizOptions"),
  profileTitle: document.querySelector("#quizProfileTitle"), profileText: document.querySelector("#quizProfileText"), book: document.querySelector("#quizBook"),
  detailButton: document.querySelector("#quizDetailButton"), addButton: document.querySelector("#quizAddButton")
};
let quizIndex = 0;
let quizAnswers = [];
let quizRecommendedBook = null;

function escapeHTML(value) { return value.replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char])); }
function coverMarkup(book, dialog = false) {
  if (book.cover) return `<img src="${book.cover}" alt="《${escapeHTML(book.title)}》書籍封面" loading="${dialog ? "eager" : "lazy"}">`;
  return `<div class="placeholder-cover" role="img" aria-label="《${escapeHTML(book.title)}》封面待確認"><span>❄</span><strong>${escapeHTML(book.title)}</strong><small>封面待館藏確認</small></div>`;
}
function bookCard(book) {
  const saved = state.list.has(book.id);
  return `<article class="book-card">
    <div class="cover-wrap">${coverMarkup(book)}<span class="status-badge">${book.verified ? "資料已查證" : (book.cover ? "封面已核對" : "待確認")}</span>
      <button class="favorite-button ${saved ? "active" : ""}" data-favorite="${book.id}" type="button" aria-label="${saved ? "從" : "加入"}閱讀清單" aria-pressed="${saved}">${saved ? "★" : "☆"}</button>
    </div>
    <div class="book-body"><p class="age-label">${escapeHTML(book.ageGroup)}</p><h3>${escapeHTML(book.title)}</h3><p class="book-meta">${escapeHTML(book.author)}</p><p class="book-meta">${escapeHTML(book.publisher)}</p></div>
    <div class="book-actions"><button class="detail-button" data-detail="${book.id}" type="button">看書籍簡介</button></div>
  </article>`;
}
function filteredBooks() {
  const q = state.search.toLowerCase();
  return books.filter(book => {
    const haystack = `${book.title} ${book.author} ${book.publisher}`.toLowerCase();
    const statusMatch = state.status === "all" || (state.status === "verified" && book.verified) || (state.status === "cover" && book.cover) || (state.status === "pending" && !book.verified);
    const ageMatch = state.age === "all" || book.ageGroup === state.age;
    return haystack.includes(q) && statusMatch && ageMatch && (state.theme === "全部" || book.theme === state.theme);
  });
}
function renderBooks() {
  const current = filteredBooks();
  els.grid.innerHTML = current.map(bookCard).join("");
  els.result.textContent = `顯示 ${current.length}／${books.length} 本`;
  els.empty.hidden = current.length !== 0;
  els.grid.hidden = current.length === 0;
}
function renderFeatured() {
  const titles = ["大聖誕老公公和小聖誕老公公", "空空的聖誕襪", "好餓好餓的聖誕老公公", "小雞過耶誕節", "威洛比先生的耶誕樹"];
  const picks = titles.map(title => books.find(book => book.title === title)).filter(Boolean);
  els.featured.innerHTML = picks.map(book => `<article class="featured-card" data-detail="${book.id}" tabindex="0" role="button" aria-label="查看《${escapeHTML(book.title)}》簡介">${coverMarkup(book)}<div><h3>${escapeHTML(book.title)}</h3><p>${escapeHTML(book.author)}</p></div></article>`).join("");
}
function renderThemes() {
  const topThemes = ["全部", "溫暖分享", "品格成長", "任務冒險", "找找遊戲", "冬日故事", "幼兒共讀"];
  els.themes.innerHTML = topThemes.map(theme => `<button class="chip ${state.theme === theme ? "active" : ""}" type="button" data-theme="${theme}" aria-pressed="${state.theme === theme}">${theme}</button>`).join("");
}
function openBook(id) {
  const book = books.find(item => item.id === Number(id)); if (!book) return;
  els.dialogContent.innerHTML = `<div class="dialog-layout"><div class="dialog-cover">${coverMarkup(book, true)}</div><div class="dialog-info">
    <p class="section-kicker">${escapeHTML(book.theme)}</p><h2 id="dialogTitle">${escapeHTML(book.title)}</h2>
    <dl class="dialog-meta"><dt>作者</dt><dd>${escapeHTML(book.author)}</dd><dt>出版社</dt><dd>${escapeHTML(book.publisher)}</dd><dt>建議年段</dt><dd>${escapeHTML(book.ageGroup)}</dd><dt>資料狀態</dt><dd>${book.verified ? "已由公開資料查證" : "待實體書確認"}</dd></dl>
    <div class="dialog-summary"><h3>書籍簡介</h3><p>${escapeHTML(book.summary)}</p></div>
    ${book.source ? `<a class="source-link" href="${book.source}" target="_blank" rel="noopener">查看資料來源</a>` : ""}
    ${book.verified ? "" : `<p class="pending-note">同名書或不同版本可能有不同作者與出版社，為避免誤配，請以館藏實體書版權頁為準。</p>`}
  </div></div>`;
  els.dialog.showModal();
}
function toggleList(id) {
  const num = Number(id); state.list.has(num) ? state.list.delete(num) : state.list.add(num);
  localStorage.setItem("christmasReadingList", JSON.stringify([...state.list])); updateListCount(); renderBooks();
}
function showQuizView(view) {
  quizEls.start.hidden = view !== "start";
  quizEls.question.hidden = view !== "question";
  quizEls.result.hidden = view !== "result";
}
function startQuiz() {
  quizIndex = 0;
  quizAnswers = [];
  quizRecommendedBook = null;
  showQuizView("question");
  renderQuizQuestion();
}
function renderQuizQuestion() {
  const item = quizQuestions[quizIndex];
  quizEls.progressText.textContent = `第 ${quizIndex + 1} 題，共 ${quizQuestions.length} 題`;
  quizEls.progressBar.style.width = `${((quizIndex + 1) / quizQuestions.length) * 100}%`;
  quizEls.questionTitle.textContent = item.question;
  quizEls.options.innerHTML = item.options.map(([type, label], index) => `<button class="quiz-option" type="button" data-quiz-answer="${type}"><span class="quiz-option-mark" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(label)}</span></button>`).join("");
  quizEls.questionTitle.focus();
}
function chooseQuizAnswer(type) {
  quizAnswers.push(type);
  quizIndex += 1;
  if (quizIndex < quizQuestions.length) renderQuizQuestion();
  else finishQuiz();
}
function finishQuiz() {
  const scores = Object.keys(quizProfiles).reduce((result, key) => ({ ...result, [key]: quizAnswers.filter(answer => answer === key).length }), {});
  const highest = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter(key => scores[key] === highest);
  const profileKey = [...quizAnswers].reverse().find(key => tied.includes(key)) || tied[0];
  const profile = quizProfiles[profileKey];
  quizRecommendedBook = books.find(book => book.title === profile.book);
  if (!quizRecommendedBook) return;
  quizEls.profileTitle.textContent = profile.title;
  quizEls.profileText.textContent = profile.text;
  quizEls.book.innerHTML = `${coverMarkup(quizRecommendedBook)}<div><p class="section-kicker">推薦你讀</p><h3>${escapeHTML(quizRecommendedBook.title)}</h3><p>${escapeHTML(quizRecommendedBook.author)}｜${escapeHTML(quizRecommendedBook.publisher)}</p></div>`;
  updateQuizAddButton();
  showQuizView("result");
  quizEls.profileTitle.focus();
}
function updateQuizAddButton() {
  if (!quizRecommendedBook) return;
  const saved = state.list.has(quizRecommendedBook.id);
  quizEls.addButton.textContent = saved ? "已加入閱讀清單" : "加入閱讀清單";
  quizEls.addButton.setAttribute("aria-pressed", String(saved));
}
function updateListCount() { els.listCount.textContent = state.list.size; }
function openReadingList() {
  const selected = books.filter(book => state.list.has(book.id));
  els.readingItems.innerHTML = selected.length ? selected.map(book => `<li><strong>${escapeHTML(book.title)}</strong><br><small>${escapeHTML(book.author)}｜${escapeHTML(book.publisher)}</small></li>`).join("") : "<li>還沒有加入書籍。回到書目按下星星，就能建立清單。</li>";
  els.readingDialog.showModal();
}

document.addEventListener("click", event => {
  const detail = event.target.closest("[data-detail]"); if (detail) openBook(detail.dataset.detail);
  const favorite = event.target.closest("[data-favorite]"); if (favorite) toggleList(favorite.dataset.favorite);
  const theme = event.target.closest("[data-theme]"); if (theme) { state.theme = theme.dataset.theme; renderThemes(); renderBooks(); }
});
document.addEventListener("keydown", event => { const card = event.target.closest(".featured-card"); if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openBook(card.dataset.detail); } });
els.search.addEventListener("input", event => { state.search = event.target.value.trim(); renderBooks(); });
els.status.addEventListener("change", event => { state.status = event.target.value; renderBooks(); });
els.age.addEventListener("change", event => { state.age = event.target.value; renderBooks(); });
document.querySelector("#clearFilters").addEventListener("click", () => { state.search = ""; state.status = "all"; state.age = "all"; state.theme = "全部"; els.search.value = ""; els.status.value = "all"; els.age.value = "all"; renderThemes(); renderBooks(); });
document.querySelector("#closeDialog").addEventListener("click", () => els.dialog.close());
document.querySelector("#openReadingList").addEventListener("click", openReadingList);
document.querySelector("#closeReadingList").addEventListener("click", () => els.readingDialog.close());
document.querySelector("#clearReadingList").addEventListener("click", () => { state.list.clear(); localStorage.removeItem("christmasReadingList"); updateListCount(); renderBooks(); openReadingList(); });
document.querySelector("#printReadingList").addEventListener("click", () => window.print());
document.querySelector("#randomBook").addEventListener("click", () => openBook(books[Math.floor(Math.random() * books.length)].id));
document.querySelector("#startQuiz").addEventListener("click", startQuiz);
document.querySelector("#restartQuiz").addEventListener("click", startQuiz);
document.querySelector("#restartQuizTop").addEventListener("click", startQuiz);
quizEls.options.addEventListener("click", event => { const answer = event.target.closest("[data-quiz-answer]"); if (answer) chooseQuizAnswer(answer.dataset.quizAnswer); });
quizEls.detailButton.addEventListener("click", () => { if (quizRecommendedBook) openBook(quizRecommendedBook.id); });
quizEls.addButton.addEventListener("click", () => { if (quizRecommendedBook) { toggleList(quizRecommendedBook.id); updateQuizAddButton(); } });
[els.dialog, els.readingDialog].forEach(dialog => dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); }));

document.querySelector("#uniqueCount").textContent = books.length;
document.querySelector("#coverCount").textContent = books.filter(book => book.cover).length;
document.querySelector("#verifiedCount").textContent = books.filter(book => book.verified).length;
renderFeatured(); renderThemes(); renderBooks(); updateListCount();
