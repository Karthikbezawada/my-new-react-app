const data = [
    {
        id:'1',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zstvbdzd7wyn6zajoask',
        h: 'Mutton Biryani',
        rate: '₹450',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'2',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jr5j6htyvvhrimjhakls',
        h: 'Meghana Special Chicken Biryani',
        rate: '₹249',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'3',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/FOOD_CATALOG/IMAGES/CMS/2024/4/22/61ef4a59-3559-4901-b890-bfe5e19989f4_51cb9205-e582-4aae-b086-893cdc1ce0de.jpeg',
        h: 'Hoskote Biryani',
        rate: '₹199',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },{
        id:'4',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/stcwjsd9zpxnbi8nnq8t',
        h: 'Chicken Dum Biryani',
        rate: '₹178',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'5',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/0e93505deef23ae043d6284fd4bdad1d',
        h: 'Donne Chicken Biryani',
        rate: '₹170',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'6',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zbrpxvywfsrrb7os11jf',
        h: 'Chicken Biryani',
        rate: '₹315',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'7',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qfk9v4fkghtgoybpwtui',
        h: 'Chicken Biryani (Serves 1 (1 Leg + Egg))',
        rate: '₹329',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'8',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cf5e70d142f9eaed85cd64c5da59e435',
        h: 'Chicken Biryani (Kolkata stael) [2 Pieces]',
        rate: '₹310',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'9',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iivuhjc2mswi9lublktf',
        h: 'Chicken Boneless Biryani',
        rate: '₹325',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },{
        id:'10',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/FOOD_CATALOG/IMAGES/CMS/2024/4/22/af30541d-f748-4ae2-a747-933e6331513a_e111c758-48b5-44a6-b847-7df0176500f3.jpg',
        h: 'Thalassery Chicken Biryani',
        rate: '₹295',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'11',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/2719e0bf37ad47d5ecb192d80dc3c7b9',
        h: 'Chicken Biryani (Half)',
        rate: '₹229',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'12',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9e39b8027f6ad3fae89ecd587decd0dc',
        h: 'Chicken Biryani (pulav)',
        rate: '₹310',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },{
        id:'1',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zstvbdzd7wyn6zajoask',
        h: 'Mutton Biryani',
        rate: '₹450',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'2',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/jr5j6htyvvhrimjhakls',
        h: 'Meghana Special Chicken Biryani',
        rate: '₹249',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'3',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/FOOD_CATALOG/IMAGES/CMS/2024/4/22/61ef4a59-3559-4901-b890-bfe5e19989f4_51cb9205-e582-4aae-b086-893cdc1ce0de.jpeg',
        h: 'Hoskote Biryani',
        rate: '₹199',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },{
        id:'4',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/stcwjsd9zpxnbi8nnq8t',
        h: 'Chicken Dum Biryani',
        rate: '₹178',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'5',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/0e93505deef23ae043d6284fd4bdad1d',
        h: 'Donne Chicken Biryani',
        rate: '₹170',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'6',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/zbrpxvywfsrrb7os11jf',
        h: 'Chicken Biryani',
        rate: '₹315',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'7',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qfk9v4fkghtgoybpwtui',
        h: 'Chicken Biryani (Serves 1 (1 Leg + Egg))',
        rate: '₹329',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'8',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cf5e70d142f9eaed85cd64c5da59e435',
        h: 'Chicken Biryani (Kolkata stael) [2 Pieces]',
        rate: '₹310',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'9',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iivuhjc2mswi9lublktf',
        h: 'Chicken Boneless Biryani',
        rate: '₹325',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },{
        id:'10',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/FOOD_CATALOG/IMAGES/CMS/2024/4/22/af30541d-f748-4ae2-a747-933e6331513a_e111c758-48b5-44a6-b847-7df0176500f3.jpg',
        h: 'Thalassery Chicken Biryani',
        rate: '₹295',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'11',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/2719e0bf37ad47d5ecb192d80dc3c7b9',
        h: 'Chicken Biryani (Half)',
        rate: '₹229',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
    {
        id:'12',
        imgsrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9e39b8027f6ad3fae89ecd587decd0dc',
        h: 'Chicken Biryani (pulav)',
        rate: '₹310',
        link: 'https://www.flipkart.com/apple-iphone-15-blue-128-gb/p/itmbf14ef54f645d?pid=MOBGTAGPAQNVFZZY&lid=LSTMOBGTAGPAQNVFZZY7RHDU7&marketplace=FLIPKART&q=iphone+15&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_8_0_na_na_na&fm=search-autosuggest&iid=1c54e376-603b-4343-80f6-62babbbeaab4.MOBGTAGPAQNVFZZY.SEARCH&ppt=sp&ppn=sp&ssid=bslysl7by80000001711869560051&qH=2f54b45b321e3ae5',
        btn: 'Order Now',
    },
];

export default data;
