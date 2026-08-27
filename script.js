/* =========================================================
   VISTA / NOVA
   JavaScript
   Version 3.0
   完成版
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     基本
     ========================================================= */

  const $ = (id) => document.getElementById(id);

  const qsa = (selector) =>
    [...document.querySelectorAll(selector)];


  /* =========================================================
     Firebase設定
     ========================================================= */

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };


  /* =========================================================
     Firebase初期化
     ========================================================= */

  let auth = null;
  let db = null;
  let currentUser = null;

  try {

    if (typeof firebase !== "undefined") {

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      auth = firebase.auth();

      if (firebase.firestore) {
        db = firebase.firestore();
      }

    }

  } catch (error) {

    console.error(
      "Firebase initialization error:",
      error
    );

  }


  /* =========================================================
     アプリ状態
     ========================================================= */

  const state = {

    currentPage: "homePage",

    subject: "理科",

    grade: "全学年",

    unit: "おまかせ",

    mode: "choice",

    count: 30,

    questions: [],

    currentQuestionIndex: 0,

    correct: 0,

    answered: 0,

    currentStreak: 0,

    bestStreak: 0,

    timer: 30,

    timerInterval: null,

    answeredCurrent: false,

    quizStarted: false,

    lastResult: null,

    mistakeQuestions: [],

    laterQuestions: [],

    favoriteQuestions: []

  };


  /* =========================================================
     問題データ
     ========================================================= */

  const questionBank = [

    /* =======================================================
       理科・生物
       ======================================================= */

    {
      id: "SCI_BIO_001",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "植物の細胞にあり、光合成を行う細胞小器官は何？",
      answer: "葉緑体",
      choices: ["核", "葉緑体", "液胞", "細胞壁"],
      explanation: "葉緑体には葉緑素があり、光エネルギーを利用して光合成を行います。"
    },

    {
      id: "SCI_BIO_002",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "植物の根から吸収した水や無機物を運ぶ管を何という？",
      answer: "道管",
      choices: ["師管", "道管", "気孔", "形成層"],
      explanation: "道管は根から吸収した水や無機物を上の部分へ運びます。"
    },

    {
      id: "SCI_BIO_003",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "葉でつくられた養分を運ぶ管を何という？",
      answer: "師管",
      choices: ["道管", "師管", "気孔", "根毛"],
      explanation: "師管は葉でつくられた養分を植物体の各部分へ運びます。"
    },

    {
      id: "SCI_BIO_004",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "葉の表面にある気体の出入り口を何という？",
      answer: "気孔",
      choices: ["葉脈", "気孔", "根毛", "道管"],
      explanation: "気孔では二酸化炭素や酸素、水蒸気などの出入りが行われます。"
    },

    {
      id: "SCI_BIO_005",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "植物が光合成で取り入れる気体は何？",
      answer: "二酸化炭素",
      choices: ["酸素", "窒素", "二酸化炭素", "水素"],
      explanation: "光合成では二酸化炭素と水から養分をつくり、酸素を放出します。"
    },

    {
      id: "SCI_BIO_006",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "光合成で発生する気体は何？",
      answer: "酸素",
      choices: ["二酸化炭素", "酸素", "窒素", "水素"],
      explanation: "光合成では酸素が発生します。"
    },

    {
      id: "SCI_BIO_007",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "デンプンの有無を調べる液体は何？",
      answer: "ヨウ素液",
      choices: [
        "ベネジクト液",
        "ヨウ素液",
        "BTB溶液",
        "フェノールフタレイン液"
      ],
      explanation: "デンプンにヨウ素液を加えると青紫色になります。"
    },

    {
      id: "SCI_BIO_008",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "ヨウ素液によってデンプンがある部分は何色になる？",
      answer: "青紫色",
      choices: ["赤色", "黄色", "青紫色", "緑色"],
      explanation: "デンプンがある部分はヨウ素デンプン反応によって青紫色になります。"
    },

    {
      id: "SCI_BIO_009",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "根にある、水や無機物を吸収する細い毛のような部分は何？",
      answer: "根毛",
      choices: ["気孔", "根毛", "師管", "葉脈"],
      explanation: "根毛は土壌と接する表面積を大きくし、水や無機物を効率よく吸収します。"
    },

    {
      id: "SCI_BIO_010",
      subject: "理科",
      grade: "中1",
      unit: "生物",
      question: "植物の体内から水蒸気が出ていく現象を何という？",
      answer: "蒸散",
      choices: ["呼吸", "蒸散", "光合成", "消化"],
      explanation: "植物は主に気孔から水蒸気を放出します。これを蒸散といいます。"
    },


    /* =======================================================
       理科・化学
       ======================================================= */

    {
      id: "SCI_CHE_001",
      subject: "理科",
      grade: "中2",
      unit: "化学",
      question: "物質が酸素と結びつく化学変化を何という？",
      answer: "酸化",
      choices: ["還元", "酸化", "中和", "電離"],
      explanation: "酸素と結びつく化学変化を酸化といいます。"
    },

    {
      id: "SCI_CHE_002",
      subject: "理科",
      grade: "中2",
      unit: "化学",
      question: "酸化物から酸素を取り除く化学変化を何という？",
      answer: "還元",
      choices: ["酸化", "還元", "中和", "融解"],
      explanation: "酸化物から酸素が取り除かれる化学変化を還元といいます。"
    },

    {
      id: "SCI_CHE_003",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "酸とアルカリが反応して互いの性質を打ち消す反応を何という？",
      answer: "中和",
      choices: ["酸化", "還元", "中和", "電気分解"],
      explanation: "酸とアルカリが反応して互いの性質を打ち消す反応を中和といいます。"
    },

    {
      id: "SCI_CHE_004",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "水溶液中で水素イオンを生じる物質を何という？",
      answer: "酸",
      choices: ["酸", "アルカリ", "金属", "塩"],
      explanation: "酸は水溶液中で水素イオンを生じます。"
    },

    {
      id: "SCI_CHE_005",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "水溶液中で水酸化物イオンを生じる物質を何という？",
      answer: "アルカリ",
      choices: ["酸", "アルカリ", "金属", "非金属"],
      explanation: "アルカリは水溶液中で水酸化物イオンを生じます。"
    },

    {
      id: "SCI_CHE_006",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "電解質が水に溶けて陽イオンと陰イオンに分かれることを何という？",
      answer: "電離",
      choices: ["電離", "中和", "酸化", "還元"],
      explanation: "電解質が水に溶けてイオンに分かれる現象を電離といいます。"
    },

    {
      id: "SCI_CHE_007",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "亜鉛板が水溶液中に出しているイオンは何？",
      answer: "亜鉛イオン",
      choices: [
        "銅イオン",
        "亜鉛イオン",
        "水素イオン",
        "塩化物イオン"
      ],
      explanation: "亜鉛は電子を失ってZn²⁺となり、水溶液中へ出ていきます。"
    },

    {
      id: "SCI_CHE_008",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "Znが電子を失ってできるイオンは？",
      answer: "Zn²⁺",
      choices: ["Zn⁺", "Zn²⁺", "Zn⁻", "Zn²⁻"],
      explanation: "亜鉛原子は2個の電子を失ってZn²⁺になります。"
    },

    {
      id: "SCI_CHE_009",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "電子を失う変化を何という？",
      answer: "酸化",
      choices: ["酸化", "還元", "中和", "電離"],
      explanation: "電子を失う変化は酸化、電子を受け取る変化は還元です。"
    },

    {
      id: "SCI_CHE_010",
      subject: "理科",
      grade: "中3",
      unit: "化学",
      question: "電子を受け取る変化を何という？",
      answer: "還元",
      choices: ["酸化", "還元", "中和", "燃焼"],
      explanation: "電子を受け取る変化を還元といいます。"
    },


    /* =======================================================
       理科・物理
       ======================================================= */

    {
      id: "SCI_PHY_001",
      subject: "理科",
      grade: "中2",
      unit: "物理",
      question: "電流の単位は何？",
      answer: "A",
      choices: ["V", "A", "Ω", "W"],
      explanation: "電流の単位はアンペア(A)です。"
    },

    {
      id: "SCI_PHY_002",
      subject: "理科",
      grade: "中2",
      unit: "物理",
      question: "電圧の単位は何？",
      answer: "V",
      choices: ["A", "V", "Ω", "J"],
      explanation: "電圧の単位はボルト(V)です。"
    },

    {
      id: "SCI_PHY_003",
      subject: "理科",
      grade: "中2",
      unit: "物理",
      question: "電気抵抗の単位は何？",
      answer: "Ω",
      choices: ["A", "V", "Ω", "W"],
      explanation: "電気抵抗の単位はオーム(Ω)です。"
    },

    {
      id: "SCI_PHY_004",
      subject: "理科",
      grade: "中2",
      unit: "物理",
      question: "オームの法則を表す式は？",
      answer: "V = IR",
      choices: ["V = IR", "I = VR", "R = VI", "V = I/R"],
      explanation: "電圧V、電流I、抵抗Rの関係はV=IRです。"
    },

    {
      id: "SCI_PHY_005",
      subject: "理科",
      grade: "中3",
      unit: "物理",
      question: "物体が力を受けて移動したとき、力が物体にしたことを何という？",
      answer: "仕事",
      choices: ["圧力", "仕事", "電力", "熱量"],
      explanation: "力の向きに物体を移動させたとき、力は仕事をしたといいます。"
    },

    {
      id: "SCI_PHY_006",
      subject: "理科",
      grade: "中3",
      unit: "物理",
      question: "仕事の単位は何？",
      answer: "J",
      choices: ["N", "J", "W", "Pa"],
      explanation: "仕事の単位はジュール(J)です。"
    },

    {
      id: "SCI_PHY_007",
      subject: "理科",
      grade: "中3",
      unit: "物理",
      question: "圧力の単位は何？",
      answer: "Pa",
      choices: ["N", "J", "Pa", "W"],
      explanation: "圧力の単位はパスカル(Pa)です。"
    },

    {
      id: "SCI_PHY_008",
      subject: "理科",
      grade: "中3",
      unit: "物理",
      question: "物体にはたらく重力の向きはどちら？",
      answer: "地球の中心方向",
      choices: [
        "上向き",
        "地球の中心方向",
        "水平方向",
        "北向き"
      ],
      explanation: "重力は地球の中心に向かってはたらきます。"
    },


    /* =======================================================
       理科・地学
       ======================================================= */

    {
      id: "SCI_EAR_001",
      subject: "理科",
      grade: "中1",
      unit: "地学",
      question: "地震が発生した地下の場所を何という？",
      answer: "震源",
      choices: ["震央", "震源", "断層", "震度"],
      explanation: "地震が発生した地下の地点を震源といいます。"
    },

    {
      id: "SCI_EAR_002",
      subject: "理科",
      grade: "中1",
      unit: "地学",
      question: "震源の真上の地表の地点を何という？",
      answer: "震央",
      choices: ["震源", "震央", "震度", "マグニチュード"],
      explanation: "震源の真上にあたる地表の地点を震央といいます。"
    },

    {
      id: "SCI_EAR_003",
      subject: "理科",
      grade: "中3",
      unit: "地学",
      question: "地震そのものの規模を表す値は何？",
      answer: "マグニチュード",
      choices: ["震度", "マグニチュード", "震源", "震央"],
      explanation: "マグニチュードは地震そのものの規模を表します。"
    },

    {
      id: "SCI_EAR_004",
      subject: "理科",
      grade: "中3",
      unit: "地学",
      question: "ある場所での揺れの強さを表すものは何？",
      answer: "震度",
      choices: ["震度", "マグニチュード", "震源", "震央"],
      explanation: "震度は各地点での揺れの強さを表します。"
    },

    {
      id: "SCI_EAR_005",
      subject: "理科",
      grade: "中3",
      unit: "地学",
      question: "空気中の水蒸気が水滴になって雲ができる変化を何という？",
      answer: "凝結",
      choices: ["蒸発", "凝結", "融解", "凝固"],
      explanation: "水蒸気が冷やされて水滴になる変化を凝結といいます。"
    },


    /* =======================================================
       社会・地理
       ======================================================= */

    {
      id: "SOC_GEO_001",
      subject: "社会",
      grade: "中1",
      unit: "地理",
      question: "日本で最も北にある都道府県は？",
      answer: "北海道",
      choices: ["青森県", "北海道", "岩手県", "秋田県"],
      explanation: "北海道が日本で最も北に位置します。"
    },

    {
      id: "SOC_GEO_002",
      subject: "社会",
      grade: "中1",
      unit: "地理",
      question: "日本で最も面積が大きい都道府県は？",
      answer: "北海道",
      choices: ["北海道", "岩手県", "長野県", "福島県"],
      explanation: "北海道は日本で最も面積が大きい都道府県です。"
    },

    {
      id: "SOC_GEO_003",
      subject: "社会",
      grade: "中1",
      unit: "地理",
      question: "日本で最も長い川は？",
      answer: "信濃川",
      choices: ["利根川", "信濃川", "石狩川", "木曽川"],
      explanation: "信濃川は日本で最も長い川です。"
    },

    {
      id: "SOC_GEO_004",
      subject: "社会",
      grade: "中1",
      unit: "地理",
      question: "日本で最も広い湖は？",
      answer: "琵琶湖",
      choices: ["霞ヶ浦", "琵琶湖", "浜名湖", "猪苗代湖"],
      explanation: "琵琶湖は日本最大の湖です。"
    },

    {
      id: "SOC_GEO_005",
      subject: "社会",
      grade: "中1",
      unit: "地理",
      question: "日本の標準時子午線が通る兵庫県の市は？",
      answer: "明石市",
      choices: ["神戸市", "明石市", "姫路市", "西宮市"],
      explanation: "東経135度の標準時子午線は兵庫県明石市付近を通ります。"
    },


    /* =======================================================
       社会・歴史
       ======================================================= */

    {
      id: "SOC_HIS_001",
      subject: "社会",
      grade: "中1",
      unit: "歴史",
      question: "鎌倉幕府を開いた人物は？",
      answer: "源頼朝",
      choices: ["源頼朝", "足利尊氏", "徳川家康", "平清盛"],
      explanation: "源頼朝は鎌倉に幕府を開きました。"
    },

    {
      id: "SOC_HIS_002",
      subject: "社会",
      grade: "中2",
      unit: "歴史",
      question: "室町幕府を開いた人物は？",
      answer: "足利尊氏",
      choices: ["源頼朝", "足利尊氏", "織田信長", "豊臣秀吉"],
      explanation: "足利尊氏は室町幕府を開きました。"
    },

    {
      id: "SOC_HIS_003",
      subject: "社会",
      grade: "中2",
      unit: "歴史",
      question: "江戸幕府を開いた人物は？",
      answer: "徳川家康",
      choices: ["徳川家康", "織田信長", "豊臣秀吉", "徳川吉宗"],
      explanation: "徳川家康は1603年に江戸幕府を開きました。"
    },

    {
      id: "SOC_HIS_004",
      subject: "社会",
      grade: "中2",
      unit: "歴史",
      question: "江戸幕府が鎖国政策の中で貿易を行ったオランダ商館が置かれた場所は？",
      answer: "長崎の出島",
      choices: ["横浜", "長崎の出島", "函館", "堺"],
      explanation: "オランダ商館は長崎の出島に置かれました。"
    },

    {
      id: "SOC_HIS_005",
      subject: "社会",
      grade: "中3",
      unit: "歴史",
      question: "日清戦争後、日本が清から得た領土は？",
      answer: "台湾",
      choices: ["朝鮮", "台湾", "樺太全島", "満州全域"],
      explanation: "下関条約によって清から台湾などを得ました。"
    },

    {
      id: "SOC_HIS_006",
      subject: "社会",
      grade: "中3",
      unit: "歴史",
      question: "日露戦争後に結ばれた条約は？",
      answer: "ポーツマス条約",
      choices: [
        "下関条約",
        "ポーツマス条約",
        "日米修好通商条約",
        "サンフランシスコ平和条約"
      ],
      explanation: "日露戦争後、ポーツマス条約が結ばれました。"
    },

    {
      id: "SOC_HIS_007",
      subject: "社会",
      grade: "中3",
      unit: "歴史",
      question: "1910年、日本が朝鮮を併合したことを何という？",
      answer: "韓国併合",
      choices: [
        "韓国併合",
        "満州事変",
        "日韓基本条約",
        "三国干渉"
      ],
      explanation: "1910年、日本は韓国併合を行いました。"
    },

    {
      id: "SOC_HIS_008",
      subject: "社会",
      grade: "中3",
      unit: "歴史",
      question: "第一次世界大戦後に設立された国際平和機構は？",
      answer: "国際連盟",
      choices: ["国際連合", "国際連盟", "NATO", "EU"],
      explanation: "第一次世界大戦後、国際連盟が設立されました。"
    },

    {
      id: "SOC_HIS_009",
      subject: "社会",
      grade: "中3",
      unit: "歴史",
      question: "1931年に起こった出来事は？",
      answer: "満州事変",
      choices: ["日露戦争", "満州事変", "日清戦争", "太平洋戦争"],
      explanation: "1931年、満州事変が起こりました。"
    },

    {
      id: "SOC_HIS_010",
      subject: "社会",
      grade: "中3",
      unit: "歴史",
      question: "1941年、日本がアメリカなどと戦争を始めた戦争は？",
      answer: "太平洋戦争",
      choices: [
        "日清戦争",
        "日露戦争",
        "太平洋戦争",
        "第一次世界大戦"
      ],
      explanation: "1941年、日本はアメリカ・イギリスなどに宣戦布告し、太平洋戦争が始まりました。"
    },


    /* =======================================================
       社会・公民
       ======================================================= */

    {
      id: "SOC_CIV_001",
      subject: "社会",
      grade: "中3",
      unit: "公民",
      question: "日本国憲法の基本原理の一つは？",
      answer: "基本的人権の尊重",
      choices: [
        "基本的人権の尊重",
        "身分制度",
        "鎖国",
        "軍国主義"
      ],
      explanation: "日本国憲法の基本原理は国民主権、基本的人権の尊重、平和主義です。"
    },

    {
      id: "SOC_CIV_002",
      subject: "社会",
      grade: "中3",
      unit: "公民",
      question: "日本国憲法で主権があるのは誰？",
      answer: "国民",
      choices: ["天皇", "国民", "内閣", "裁判所"],
      explanation: "日本国憲法では国民主権が採用されています。"
    },

    {
      id: "SOC_CIV_003",
      subject: "社会",
      grade: "中3",
      unit: "公民",
      question: "日本の国会は何をする機関？",
      answer: "立法",
      choices: ["行政", "司法", "立法", "外交"],
      explanation: "国会は国の唯一の立法機関です。"
    },

    {
      id: "SOC_CIV_004",
      subject: "社会",
      grade: "中3",
      unit: "公民",
      question: "行政の中心となる機関は？",
      answer: "内閣",
      choices: ["国会", "内閣", "裁判所", "最高裁判所"],
      explanation: "内閣は行政権を担当します。"
    },

    {
      id: "SOC_CIV_005",
      subject: "社会",
      grade: "中3",
      unit: "公民",
      question: "司法権を担当する機関は？",
      answer: "裁判所",
      choices: ["国会", "内閣", "裁判所", "地方議会"],
      explanation: "裁判所が司法権を担当します。"
    }

  ];


  /* =========================================================
     問題データ整形
     ========================================================= */

  function normalizeQuestion(q, index) {

    return {
      ...q,

      id: q.id || `AUTO_${index}`,

      choices: Array.isArray(q.choices)
        ? [...q.choices]
        : [q.answer],

      explanation:
        q.explanation ||
        "この問題のポイントを確認しましょう。"

    };

  }

  const allQuestions =
    questionBank.map(normalizeQuestion);


  /* =========================================================
     シャッフル
     ========================================================= */

  function shuffle(array) {

    const arr = [...array];

    for (
      let i = arr.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [arr[i], arr[j]] =
        [arr[j], arr[i]];

    }

    return arr;

  }


  /* =========================================================
     問題取得
     ========================================================= */

  function getFilteredQuestions() {

    return allQuestions.filter(q => {

      if (q.subject !== state.subject) {
        return false;
      }

      if (
        state.grade !== "全学年" &&
        q.grade !== state.grade
      ) {
        return false;
      }

      if (
        state.unit !== "おまかせ" &&
        state.unit !== "すべて" &&
        q.unit !== state.unit
      ) {
        return false;
      }

      return true;

    });

  }


  /* =========================================================
     クイズ問題作成
     ========================================================= */

  function createQuizQuestions() {

    const pool =
      getFilteredQuestions();

    if (!pool.length) {

      alert(
        `${state.subject}・${state.grade}・${state.unit} の問題がありません。\n\n範囲や学年を変更してください。`
      );

      return false;

    }

    state.questions = [];

    /*
       問題数より問題データが少ない場合は
       ランダムに繰り返して指定問題数まで作る
    */

    while (
      state.questions.length <
      state.count
    ) {

      const shuffled =
        shuffle(pool);

      for (const q of shuffled) {

        if (
          state.questions.length >=
          state.count
        ) {
          break;
        }

        state.questions.push({
          ...q,
          choices: shuffle(q.choices)
        });

      }

    }

    return true;

  }


  /* =========================================================
     ページ切り替え
     ========================================================= */

  function showPage(pageId) {

    const pages =
      qsa(".page");

    pages.forEach(page => {

      page.classList.add("hidden");

    });

    const target =
      $(pageId);

    if (target) {

      target.classList.remove(
        "hidden"
      );

    } else {

      console.warn(
        `ページが見つかりません: ${pageId}`
      );

    }

    state.currentPage =
      pageId;

    qsa(".nav-item")
      .forEach(item => {

        item.classList.toggle(
          "active",
          item.dataset.page === pageId
        );

      });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* =========================================================
     ログイン画面
     ========================================================= */

  function openLogin() {

    const login =
      $("loginPage");

    if (!login) {
      return;
    }

    login.style.display =
      "block";

    login.classList.remove(
      "hidden"
    );

    document.body.classList.add(
      "login-open"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  function closeLogin() {

    const login =
      $("loginPage");

    if (!login) {
      return;
    }

    login.style.display =
      "none";

    login.classList.add(
      "hidden"
    );

    document.body.classList.remove(
      "login-open"
    );

  }


  /* =========================================================
     ログイン必須
     ========================================================= */

  function requireLogin(callback) {

    if (currentUser) {

      callback();

      return;

    }

    const ok =
      confirm(
        "この機能を使うにはログインが必要です。\n\nログイン画面を開きますか？"
      );

    if (ok) {
      openLogin();
    }

  }


  /* =========================================================
     Firebase Auth監視
     ========================================================= */

  if (auth) {

    auth.onAuthStateChanged(
      async user => {

        currentUser =
          user || null;

        updateLoginUI();

        if (currentUser) {

          await loadUserData();

        } else {

          clearPrivateData();

        }

      }
    );

  }


  /* =========================================================
     ログインUI
     ========================================================= */

  function updateLoginUI() {

    const message =
      $("loginMessage");

    if (currentUser) {

      if (message) {

        message.textContent =
          `ログイン中：${
            currentUser.email ||
            "Googleアカウント"
          }`;

      }

    } else {

      if (message) {
        message.textContent = "";
      }

    }

  }


  /* =========================================================
     メールログイン
     ========================================================= */

  async function loginWithEmail() {

    if (!auth) {

      alert(
        "Firebaseが初期化されていません。"
      );

      return;

    }

    const email =
      $("loginEmail")?.value.trim();

    const password =
      $("loginPassword")?.value;

    if (!email || !password) {

      alert(
        "メールアドレスとパスワードを入力してください。"
      );

      return;

    }

    try {

      await auth.signInWithEmailAndPassword(
        email,
        password
      );

      alert(
        "ログインしました。"
      );

      closeLogin();

    } catch (error) {

      console.error(error);

      alert(
        "ログインできませんでした。\n" +
        firebaseErrorMessage(error)
      );

    }

  }


  /* =========================================================
     新規登録
     ========================================================= */

  async function registerUser() {

    if (!auth) {

      alert(
        "Firebaseが初期化されていません。"
      );

      return;

    }

    const email =
      $("loginEmail")?.value.trim();

    const password =
      $("loginPassword")?.value;

    if (!email || !password) {

      alert(
        "新規登録するメールアドレスとパスワードを入力してください。"
      );

      return;

    }

    if (password.length < 6) {

      alert(
        "パスワードは6文字以上にしてください。"
      );

      return;

    }

    try {

      await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      alert(
        "アカウントを作成しました。"
      );

      closeLogin();

    } catch (error) {

      console.error(error);

      alert(
        "新規登録できませんでした。\n" +
        firebaseErrorMessage(error)
      );

    }

  }


  /* =========================================================
     Googleログイン
     ========================================================= */

  async function loginWithGoogle() {

    if (!auth) {

      alert(
        "Firebaseが初期化されていません。"
      );

      return;

    }

    try {

      const provider =
        new firebase.auth.GoogleAuthProvider();

      await auth.signInWithPopup(
        provider
      );

      alert(
        "Googleでログインしました。"
      );

      closeLogin();

    } catch (error) {

      console.error(error);

      alert(
        "Googleログインに失敗しました。\n" +
        firebaseErrorMessage(error)
      );

    }

  }


  /* =========================================================
     Firebaseエラー
     ========================================================= */

  function firebaseErrorMessage(error) {

    const code =
      error?.code || "";

    const messages = {

      "auth/invalid-email":
        "メールアドレスの形式が正しくありません。",

      "auth/user-not-found":
        "アカウントが見つかりません。",

      "auth/wrong-password":
        "パスワードが違います。",

      "auth/invalid-credential":
        "メールアドレスまたはパスワードが違います。",

      "auth/email-already-in-use":
        "このメールアドレスはすでに登録されています。",

      "auth/weak-password":
        "パスワードが弱すぎます。",

      "auth/popup-closed-by-user":
        "ログイン画面が閉じられました。",

      "auth/operation-not-allowed":
        "Firebase側でこのログイン方法が有効になっていません。",

      "auth/popup-blocked":
        "ポップアップがブロックされています。",

      "auth/network-request-failed":
        "ネットワーク接続を確認してください。"

    };

    return (
      messages[code] ||
      error?.message ||
      "不明なエラーです。"
    );

  }


  /* =========================================================
     ログアウト
     ========================================================= */

  async function logout() {

    if (!auth) {
      return;
    }

    try {

      await auth.signOut();

      alert(
        "ログアウトしました。"
      );

    } catch (error) {

      console.error(error);

    }

  }


  /* =========================================================
     統計キー
     ========================================================= */

  function getStatsKey() {

    if (!currentUser) {
      return null;
    }

    return `vista_stats_${currentUser.uid}`;

  }


  /* =========================================================
     ローカル統計
     ========================================================= */

  function getLocalStats() {

    const key =
      getStatsKey();

    const empty = {
      solved: 0,
      correct: 0,
      bestStreak: 0,
      totalAnswered: 0
    };

    if (!key) {
      return empty;
    }

    try {

      return (
        JSON.parse(
          localStorage.getItem(key)
        ) || empty
      );

    } catch {

      return empty;

    }

  }


  /* =========================================================
     統計表示
     ========================================================= */

  function updateStatsUI() {

    if (!currentUser) {

      if ($("homeSolved"))
        $("homeSolved").textContent = "0";

      if ($("homeAccuracy"))
        $("homeAccuracy").textContent = "--%";

      if ($("homeStreak"))
        $("homeStreak").textContent = "0";

      if ($("previewSolved"))
        $("previewSolved").textContent = "0";

      if ($("previewAccuracy"))
        $("previewAccuracy").textContent = "--%";

      if ($("previewBest"))
        $("previewBest").textContent = "0";

      if ($("totalSolved"))
        $("totalSolved").textContent = "0";

      if ($("totalAccuracy"))
        $("totalAccuracy").textContent = "--%";

      if ($("bestStreak"))
        $("bestStreak").textContent = "0";

      return;

    }

    const stats =
      getLocalStats();

    const accuracy =
      stats.totalAnswered > 0
        ? Math.round(
            stats.correct /
            stats.totalAnswered *
            100
          )
        : 0;

    if ($("homeSolved")) {
      $("homeSolved").textContent =
        stats.solved;
    }

    if ($("homeAccuracy")) {
      $("homeAccuracy").textContent =
        `${accuracy}%`;
    }

    if ($("homeStreak")) {
      $("homeStreak").textContent =
        stats.bestStreak;
    }

    if ($("previewSolved")) {
      $("previewSolved").textContent =
        stats.solved;
    }

    if ($("previewAccuracy")) {
      $("previewAccuracy").textContent =
        `${accuracy}%`;
    }

    if ($("previewBest")) {
      $("previewBest").textContent =
        stats.bestStreak;
    }

    if ($("totalSolved")) {
      $("totalSolved").textContent =
        stats.solved;
    }

    if ($("totalAccuracy")) {
      $("totalAccuracy").textContent =
        `${accuracy}%`;
    }

    if ($("bestStreak")) {
      $("bestStreak").textContent =
        stats.bestStreak;
    }

  }


  /* =========================================================
     統計更新
     ========================================================= */

  function updateStats(stats) {

    if (!currentUser) {
      return;
    }

    const current =
      getLocalStats();

    current.solved +=
      Number(stats.solved || 0);

    current.correct +=
      Number(stats.correct || 0);

    current.totalAnswered +=
      Number(stats.totalAnswered || 0);

    current.bestStreak =
      Math.max(
        current.bestStreak,
        Number(stats.bestStreak || 0)
      );

    localStorage.setItem(
      getStatsKey(),
      JSON.stringify(current)
    );

    updateStatsUI();

    saveUserData();

  }


  /* =========================================================
     Firestore統計保存
     ========================================================= */

  async function saveUserData() {

    if (!currentUser || !db) {
      return;
    }

    try {

      const stats =
        getLocalStats();

      await db
        .collection("users")
        .doc(currentUser.uid)
        .set({

          stats: {

            solved:
              stats.solved,

            correct:
              stats.correct,

            bestStreak:
              stats.bestStreak,

            totalAnswered:
              stats.totalAnswered

          },

          updatedAt:
            firebase.firestore
              .FieldValue
              .serverTimestamp()

        }, {
          merge: true
        });

    } catch (error) {

      console.error(
        "Firestore save error:",
        error
      );

    }

  }


  /* =========================================================
     Firestore統計読み込み
     ========================================================= */

  async function loadUserStats() {

    if (!currentUser || !db) {
      return;
    }

    try {

      const ref =
        db
          .collection("users")
          .doc(currentUser.uid);

      const snap =
        await ref.get();

      if (!snap.exists) {
        return;
      }

      const data =
        snap.data();

      if (data.stats) {

        localStorage.setItem(
          getStatsKey(),
          JSON.stringify({
            solved:
              Number(
                data.stats.solved || 0
              ),
            correct:
              Number(
                data.stats.correct || 0
              ),
            bestStreak:
              Number(
                data.stats.bestStreak || 0
              ),
            totalAnswered:
              Number(
                data.stats.totalAnswered || 0
              )
          })
        );

      }

      updateStatsUI();

    } catch (error) {

      console.error(
        "Firestore load error:",
        error
      );

    }

  }


  /* =========================================================
     個人データ
     ========================================================= */

  function clearPrivateData() {

    state.mistakeQuestions = [];

    state.laterQuestions = [];

    state.favoriteQuestions = [];

    updateStatsUI();

    updateReviewCounts();

  }


  /* =========================================================
     復習リストキー
     ========================================================= */

  function getPrivateKey(type) {

    if (!currentUser) {
      return null;
    }

    return `vista_${type}_${currentUser.uid}`;

  }


  /* =========================================================
     復習リスト保存
     ========================================================= */

  function savePrivateLists() {

    if (!currentUser) {
      return;
    }

    localStorage.setItem(
      getPrivateKey("mistakes"),
      JSON.stringify(
        state.mistakeQuestions
      )
    );

    localStorage.setItem(
      getPrivateKey("later"),
      JSON.stringify(
        state.laterQuestions
      )
    );

    localStorage.setItem(
      getPrivateKey("favorites"),
      JSON.stringify(
        state.favoriteQuestions
      )
    );

    updateReviewCounts();

  }


  /* =========================================================
     復習リスト読み込み
     ========================================================= */

  function loadPrivateLists() {

    if (!currentUser) {
      return;
    }

    try {

      state.mistakeQuestions =
        JSON.parse(
          localStorage.getItem(
            getPrivateKey("mistakes")
          )
        ) || [];

      state.laterQuestions =
        JSON.parse(
          localStorage.getItem(
            getPrivateKey("later")
          )
        ) || [];

      state.favoriteQuestions =
        JSON.parse(
          localStorage.getItem(
            getPrivateKey("favorites")
          )
        ) || [];

    } catch {

      state.mistakeQuestions = [];

      state.laterQuestions = [];

      state.favoriteQuestions = [];

    }

    updateReviewCounts();

  }


  /* =========================================================
     復習数表示
     ========================================================= */

  function updateReviewCounts() {

    if ($("mistakeCount")) {

      $("mistakeCount").textContent =
        `${state.mistakeQuestions.length}問`;

    }

    if ($("laterCount")) {

      $("laterCount").textContent =
        `${state.laterQuestions.length}問`;

    }

    if ($("favoriteCount")) {

      $("favoriteCount").textContent =
        `${state.favoriteQuestions.length}問`;

    }

  }


  /* =========================================================
     ログイン後データ読み込み
     ※ここを1つに統合
     ========================================================= */

  async function loadUserData() {

    loadPrivateLists();

    await loadUserStats();

    await loadFirestoreHistory();

    updateStatsUI();

  }


  /* =========================================================
     問題設定
     ========================================================= */

  qsa(".subject-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.subject =
            button.dataset.value;

          qsa(".subject-option")
            .forEach(btn => {

              btn.classList.remove(
                "active"
              );

            });

          button.classList.add(
            "active"
          );

          updateUnitOptions();

        }
      );

    });


  qsa(".grade-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.grade =
            button.dataset.value;

          qsa(".grade-option")
            .forEach(btn => {

              btn.classList.remove(
                "active"
              );

            });

          button.classList.add(
            "active"
          );

        }
      );

    });


  qsa(".mode-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.mode =
            button.dataset.value;

          qsa(".mode-option")
            .forEach(btn => {

              btn.classList.remove(
                "active"
              );

            });

          button.classList.add(
            "active"
          );

        }
      );

    });


  qsa(".question-count")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.count =
            Number(
              button.dataset.count
            );

          qsa(".question-count")
            .forEach(btn => {

              btn.classList.remove(
                "active"
              );

            });

          button.classList.add(
            "active"
          );

        }
      );

    });


  /* =========================================================
     単元選択
     ========================================================= */

  function updateUnitOptions() {

    const select =
      $("unitSelect");

    if (!select) {
      return;
    }

    const units =
      state.subject === "理科"
        ? [
            "おまかせ",
            "すべて",
            "生物",
            "化学",
            "物理",
            "地学"
          ]
        : [
            "おまかせ",
            "すべて",
            "地理",
            "歴史",
            "公民"
          ];

    select.innerHTML = "";

    units.forEach(unit => {

      const option =
        document.createElement(
          "option"
        );

      option.value =
        unit;

      option.textContent =
        unit === "おまかせ"
          ? "🎲 おまかせ"
          : unit === "すべて"
            ? "すべての範囲"
            : unit;

      select.appendChild(
        option
      );

    });

    state.unit =
      "おまかせ";

  }


  $("unitSelect")
    ?.addEventListener(
      "change",
      () => {

        state.unit =
          $("unitSelect").value;

      }
    );


  /* =========================================================
     クイズ開始
     ========================================================= */

  function startQuiz() {

    if (!createQuizQuestions()) {
      return;
    }

    state.currentQuestionIndex =
      0;

    state.correct =
      0;

    state.answered =
      0;

    state.currentStreak =
      0;

    state.bestStreak =
      0;

    state.answeredCurrent =
      false;

    state.quizStarted =
      true;

    showPage(
      "quizPage"
    );

    displayQuestion();

  }


  /* =========================================================
     問題表示
     ========================================================= */

  function displayQuestion() {

    stopTimer();

    const question =
      state.questions[
        state.currentQuestionIndex
      ];

    if (!question) {

      finishQuiz();

      return;

    }

    state.answeredCurrent =
      false;

    if ($("quizNumber")) {

      $("quizNumber").textContent =
        `${state.currentQuestionIndex + 1} / ${state.questions.length}`;

    }

    if ($("progressBar")) {

      $("progressBar").style.width =
        `${(
          state.currentQuestionIndex /
          state.questions.length
        ) * 100}%`;

    }

    if ($("questionSubject")) {

      $("questionSubject").textContent =
        question.subject;

    }

    if ($("questionCategory")) {

      $("questionCategory").textContent =
        question.unit;

    }

    if ($("questionType")) {

      $("questionType").textContent =
        state.mode === "choice"
          ? "4択"
          : "一問一答";

    }

    if ($("questionText")) {

      $("questionText").textContent =
        question.question;

    }

    $("answerResult")
      ?.classList.add("hidden");

    $("explanation")
      ?.classList.add("hidden");

    $("correctAnswerBox")
      ?.classList.add("hidden");

    $("nextQuestionButton")
      ?.classList.add("hidden");

    $("inputAnswer")
      ?.classList.add("hidden");

    $("writtenAnswer")
      ?.classList.add("hidden");


    if ($("answerField")) {
      $("answerField").value = "";
    }

    if ($("writtenField")) {
      $("writtenField").value = "";
    }


    if (state.mode === "choice") {

      renderChoices(question);

    } else {

      $("inputAnswer")
        ?.classList.remove(
          "hidden"
        );

      setTimeout(
        () => {

          $("answerField")
            ?.focus();

        },
        100
      );

    }

    startTimer();

  }


  /* =========================================================
     4択
     ========================================================= */

  function renderChoices(question) {

    const container =
      $("choiceAnswers");

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const choices =
      shuffle(
        question.choices
      );

    choices.forEach(choice => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.className =
        "answer-button";

      button.textContent =
        choice;

      button.addEventListener(
        "click",
        () => {

          submitAnswer(
            choice
          );

        }
      );

      container.appendChild(
        button
      );

    });

  }


  /* =========================================================
     一問一答
     ========================================================= */

  function submitInputAnswer() {

    if (
      state.mode !== "input"
    ) {
      return;
    }

    const field =
      $("answerField");

    if (!field) {
      return;
    }

    const answer =
      field.value.trim();

    if (!answer) {

      alert(
        "答えを入力してください。"
      );

      return;

    }

    submitAnswer(answer);

  }


  /* =========================================================
     答え正規化
     ========================================================= */

  function normalizeAnswer(value) {

    return String(value)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/　/g, "")
      .replace(/＋/g, "+")
      .replace(/−/g, "-");

  }


  /* =========================================================
     答え判定
     ========================================================= */

  function isCorrectAnswer(
    userAnswer,
    correctAnswer
  ) {

    const user =
      normalizeAnswer(
        userAnswer
      );

    const correct =
      normalizeAnswer(
        correctAnswer
      );

    if (user === correct) {
      return true;
    }


    const alternatives = {

      "亜鉛イオン": [
        "zn2+",
        "zn²+",
        "zn2＋",
        "zn²＋",
        "亜鉛"
      ],

      "Zn²⁺": [
        "zn2+",
        "zn²+",
        "zn2＋",
        "zn²＋"
      ],

      "マグネシウムイオン": [
        "mg2+",
        "mg²+",
        "mg2＋",
        "mg²＋"
      ],

      "酸化": [
        "電子を失う",
        "電子を失う変化"
      ],

      "還元": [
        "電子を受け取る",
        "電子を受け取る変化"
      ]

    };


    if (
      alternatives[correctAnswer]
    ) {

      return alternatives[
        correctAnswer
      ]
        .map(normalizeAnswer)
        .includes(user);

    }

    return false;

  }


  /* =========================================================
     答え送信
     ========================================================= */

  function submitAnswer(
    userAnswer
  ) {

    if (
      state.answeredCurrent
    ) {
      return;
    }

    state.answeredCurrent =
      true;

    stopTimer();

    const question =
      state.questions[
        state.currentQuestionIndex
      ];

    if (!question) {
      return;
    }

    const correct =
      isCorrectAnswer(
        userAnswer,
        question.answer
      );

    state.answered++;


    if (correct) {

      state.correct++;

      state.currentStreak++;

      state.bestStreak =
        Math.max(
          state.bestStreak,
          state.currentStreak
        );

    } else {

      state.currentStreak =
        0;

      addMistake(
        question
      );

    }


    showAnswerResult(
      correct,
      question
    );

  }


  /* =========================================================
     結果表示
     ========================================================= */

  function showAnswerResult(
    correct,
    question
  ) {

    const result =
      $("answerResult");

    const label =
      $("answerResultLabel");

    const text =
      $("answerResultText");

    if (!result) {
      return;
    }

    result.classList.remove(
      "hidden"
    );


    if (correct) {

      if (label) {
        label.textContent =
          "⭕ 正解！";
      }

      if (text) {
        text.textContent =
          "その調子！";
      }

    } else {

      if (label) {
        label.textContent =
          "❌ 不正解";
      }

      if (text) {
        text.textContent =
          "正しい答えを確認しましょう。";
      }

    }


    $("explanation")
      ?.classList.remove(
        "hidden"
      );

    if ($("explanationText")) {

      $("explanationText")
        .textContent =
        question.explanation;

    }


    $("correctAnswerBox")
      ?.classList.remove(
        "hidden"
      );

    if ($("correctAnswerText")) {

      $("correctAnswerText")
        .textContent =
        question.answer;

    }


    $("nextQuestionButton")
      ?.classList.remove(
        "hidden"
      );

  }


  /* =========================================================
     次の問題
     ========================================================= */

  function nextQuestion() {

    state.currentQuestionIndex++;

    if (
      state.currentQuestionIndex >=
      state.questions.length
    ) {

      finishQuiz();

      return;

    }

    displayQuestion();

  }


  /* =========================================================
     タイマー
     ========================================================= */

  function startTimer() {

    stopTimer();

    state.timer =
      30;

    if ($("timer")) {

      $("timer").textContent =
        state.timer;

    }

    state.timerInterval =
      setInterval(
        () => {

          state.timer--;

          if ($("timer")) {

            $("timer").textContent =
              state.timer;

          }

          if (
            state.timer <= 0
          ) {

            stopTimer();

            if (
              !state.answeredCurrent
            ) {

              submitAnswer("");

            }

          }

        },
        1000
      );

  }


  function stopTimer() {

    if (
      state.timerInterval
    ) {

      clearInterval(
        state.timerInterval
      );

      state.timerInterval =
        null;

    }

  }


  /* =========================================================
   クイズ終了
   ========================================================= */

async function finishQuiz() {

  console.log("finishQuiz() 開始");

  stopTimer();

  state.quizStarted = false;

  const accuracy =
    state.answered > 0
      ? Math.round(
          (state.correct / state.answered) * 100
        )
      : 0;

  const wrong =
    Math.max(
      0,
      state.answered - state.correct
    );

  const score =
    state.correct * 100;


  /* =========================
     結果データを表示
     ========================= */

  const resultScore =
    $("resultScore");

  const resultCorrect =
    $("resultCorrect");

  const resultWrong =
    $("resultWrong");

  const resultAccuracy =
    $("resultAccuracy");

  const resultStreak =
    $("resultStreak");


  if (resultScore) {
    resultScore.textContent =
      score;
  }

  if (resultCorrect) {
    resultCorrect.textContent =
      state.correct;
  }

  if (resultWrong) {
    resultWrong.textContent =
      wrong;
  }

  if (resultAccuracy) {
    resultAccuracy.textContent =
      `${accuracy}%`;
  }

  if (resultStreak) {
    resultStreak.textContent =
      state.bestStreak;
  }


  /* =========================
     結果画面へ移動
     ========================= */

  console.log("resultPageへ移動");

  showPage("resultPage");


  /* =========================
     ログイン中なら保存
     ========================= */

  if (currentUser) {

    try {

      updateStats({
        solved: state.answered,
        correct: state.correct,
        totalAnswered: state.answered,
        bestStreak: state.bestStreak
      });

    } catch (error) {

      console.error(
        "updateStats error:",
        error
      );

    }


    saveQuizHistory()
      .catch(error => {

        console.error(
          "History save error:",
          error
        );

      });

  }


  console.log("finishQuiz() 完了");

}


  /* =========================================================
     間違えた問題
     ========================================================= */

  function addMistake(
    question
  ) {

    if (!currentUser) {
      return;
    }

    if (
      !state.mistakeQuestions.some(
        q =>
          q.id === question.id
      )
    ) {

      state.mistakeQuestions.push(
        question
      );

    }

    savePrivateLists();

  }


  /* =========================================================
     後で解く
     ========================================================= */

  function addLater(
    question
  ) {

    requireLogin(
      () => {

        if (
          !state.laterQuestions.some(
            q =>
              q.id === question.id
          )
        ) {

          state.laterQuestions.push(
            question
          );

          savePrivateLists();

          alert(
            "「後で解く」に登録しました。"
          );

        } else {

          alert(
            "この問題はすでに登録されています。"
          );

        }

      }
    );

  }


  /* =========================================================
     苦手登録
     ========================================================= */

  function addFavorite(
    question
  ) {

    requireLogin(
      () => {

        if (
          !state.favoriteQuestions.some(
            q =>
              q.id === question.id
          )
        ) {

          state.favoriteQuestions.push(
            question
          );

          savePrivateLists();

          alert(
            "苦手問題に登録しました。"
          );

        } else {

          alert(
            "この問題はすでに登録されています。"
          );

        }

      }
    );

  }


  /* =========================================================
     復習開始
     ========================================================= */

  function startReview(
    list
  ) {

    requireLogin(
      () => {

        if (!list.length) {

          alert(
            "登録されている問題がありません。"
          );

          return;

        }

        state.questions =
          shuffle(list)
            .slice(
              0,
              state.count
            )
            .map(q => ({
              ...q,
              choices:
                shuffle(q.choices || [])
            }));

        state.currentQuestionIndex =
          0;

        state.correct =
          0;

        state.answered =
          0;

        state.currentStreak =
          0;

        state.bestStreak =
          0;

        state.answeredCurrent =
          false;

        state.quizStarted =
          true;

        showPage(
          "quizPage"
        );

        displayQuestion();

      }
    );

  }


  /* =========================================================
     Firestore履歴保存
     ========================================================= */

  async function saveQuizHistory() {

    if (
      !currentUser ||
      !db
    ) {
      return;
    }

    try {

      await db
        .collection("users")
        .doc(currentUser.uid)
        .collection("history")
        .add({

          subject:
            state.subject,

          grade:
            state.grade,

          unit:
            state.unit,

          mode:
            state.mode,

          count:
            state.questions.length,

          correct:
            state.correct,

          answered:
            state.answered,

          accuracy:
            state.answered
              ? Math.round(
                  state.correct /
                  state.answered *
                  100
                )
              : 0,

          bestStreak:
            state.bestStreak,

          createdAt:
            firebase.firestore
              .FieldValue
              .serverTimestamp()

        });

    } catch (error) {

      console.error(
        "History save error:",
        error
      );

    }

  }


  /* =========================================================
     Firestore履歴読み込み
     ========================================================= */

  async function loadFirestoreHistory() {

    if (
      !currentUser ||
      !db
    ) {
      return;
    }

    const list =
      $("historyList");

    if (!list) {
      return;
    }

    try {

      const snapshot =
        await db
          .collection("users")
          .doc(currentUser.uid)
          .collection("history")
          .orderBy(
            "createdAt",
            "desc"
          )
          .limit(20)
          .get();

      list.innerHTML = "";


      if (snapshot.empty) {

        list.innerHTML =
          `<p class="empty-history">
             まだ学習記録がありません。
           </p>`;

        return;

      }


      snapshot.forEach(
        doc => {

          const data =
            doc.data();

          const item =
            document.createElement(
              "div"
            );

          item.className =
            "history-item";

          item.innerHTML = `
            <strong>
              ${escapeHTML(
                data.subject || ""
              )}
            </strong>

            <span>
              ${escapeHTML(
                data.unit || ""
              )}
            </span>

            <b>
              ${Number(
                data.accuracy || 0
              )}%
            </b>
          `;

          list.appendChild(
            item
          );

        }
      );

    } catch (error) {

      console.error(
        "History load error:",
        error
      );

    }

  }


  /* =========================================================
     HTMLエスケープ
     ========================================================= */

  function escapeHTML(
    value
  ) {

    return String(value)
      .replaceAll(
        "&",
        "&amp;"
      )
      .replaceAll(
        "<",
        "&lt;"
      )
      .replaceAll(
        ">",
        "&gt;"
      )
      .replaceAll(
        '"',
        "&quot;"
      )
      .replaceAll(
        "'",
        "&#039;"
      );

  }


  /* =========================================================
     ナビゲーション
     ========================================================= */

  qsa(".nav-item")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const page =
            button.dataset.page;

          if (!page) {
            return;
          }


          if (
            page === "historyPage"
          ) {

            requireLogin(
              async () => {

                showPage(
                  page
                );

                await loadFirestoreHistory();

              }
            );

            return;

          }


          if (
            page === "novaPage"
          ) {

            requireLogin(
              () => {

                showPage(
                  page
                );

              }
            );

            return;

          }


          showPage(page);

        }
      );

    });


  /* =========================================================
     ホーム → 問題設定
     ========================================================= */

  $("quickStartButton")
    ?.addEventListener(
      "click",
      () => {

        showPage(
          "setupPage"
        );

      }
    );


  /* =========================================================
     教科カード
     ========================================================= */

  qsa(".subject-card")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          if (
            button.classList.contains(
              "disabled-subject"
            )
          ) {

            alert(
              "英語は現在準備中です。"
            );

            return;

          }

          state.subject =
            button.dataset.subject;

          updateUnitOptions();


          qsa(".subject-option")
            .forEach(option => {

              option.classList.toggle(
                "active",
                option.dataset.value ===
                state.subject
              );

            });


          showPage(
            "setupPage"
          );

        }
      );

    });


  /* =========================================================
     セットアップ開始
     ========================================================= */

  $("startQuizButton")
    ?.addEventListener(
      "click",
      startQuiz
    );


  /* =========================================================
     戻るボタン
     ========================================================= */

  $("setupBack")
    ?.addEventListener(
      "click",
      () => {

        showPage(
          "homePage"
        );

      }
    );


  $("quizBack")
    ?.addEventListener(
      "click",
      () => {

        const ok =
          confirm(
            "問題を終了してホームへ戻りますか？"
          );

        if (!ok) {
          return;
        }

        stopTimer();

        state.quizStarted =
          false;

        state.answeredCurrent =
          false;

        showPage(
          "homePage"
        );

      }
    );


  $("historyBack")
    ?.addEventListener(
      "click",
      () => {

        showPage(
          "homePage"
        );

      }
    );


  $("novaBack")
    ?.addEventListener(
      "click",
      () => {

        showPage(
          "homePage"
        );

      }
    );


  $("resultHome")
    ?.addEventListener(
      "click",
      () => {

        showPage(
          "homePage"
        );

      }
    );


  /* =========================================================
     ログイン画面
     ========================================================= */

  $("closeLoginButton")
    ?.addEventListener(
      "click",
      closeLogin
    );


  $("loginButton")
    ?.addEventListener(
      "click",
      loginWithEmail
    );


  $("registerButton")
    ?.addEventListener(
      "click",
      registerUser
    );


  $("googleLoginButton")
    ?.addEventListener(
      "click",
      loginWithGoogle
    );


  /* =========================================================
     結果画面
     ========================================================= */

  $("resultAgain")
    ?.addEventListener(
      "click",
      () => {

        startQuiz();

      }
    );


  $("resultReview")
    ?.addEventListener(
      "click",
      () => {

        startReview(
          state.mistakeQuestions
        );

      }
    );


  /* =========================================================
     次の問題
     ========================================================= */

  $("nextQuestionButton")
    ?.addEventListener(
      "click",
      nextQuestion
    );


  $("submitAnswer")
    ?.addEventListener(
      "click",
      submitInputAnswer
    );


  $("answerField")
    ?.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          submitInputAnswer();

        }

      }
    );


  /* =========================================================
     後で解く
     ========================================================= */

  $("laterQuizButton")
    ?.addEventListener(
      "click",
      () => {

        const question =
          state.questions[
            state.currentQuestionIndex
          ];

        if (question) {

          addLater(
            question
          );

        }

      }
    );


  /* =========================================================
     苦手登録
     ========================================================= */

  $("favoriteQuizButton")
    ?.addEventListener(
      "click",
      () => {

        const question =
          state.questions[
            state.currentQuestionIndex
          ];

        if (question) {

          addFavorite(
            question
          );

        }

      }
    );


  /* =========================================================
     ホーム復習
     ========================================================= */

  $("mistakeButton")
    ?.addEventListener(
      "click",
      () => {

        startReview(
          state.mistakeQuestions
        );

      }
    );


  $("laterButton")
    ?.addEventListener(
      "click",
      () => {

        startReview(
          state.laterQuestions
        );

      }
    );


  $("favoriteButton")
    ?.addEventListener(
      "click",
      () => {

        startReview(
          state.favoriteQuestions
        );

      }
    );


  /* =========================================================
     学習記録
     ========================================================= */

  $("historyButton")
    ?.addEventListener(
      "click",
      () => {

        requireLogin(
          async () => {

            showPage(
              "historyPage"
            );

            await loadFirestoreHistory();

          }
        );

      }
    );


  /* =========================================================
     NOVAホーム
     ========================================================= */

  $("novaHomeButton")
    ?.addEventListener(
      "click",
      () => {

        requireLogin(
          () => {

            showPage(
              "novaPage"
            );

          }
        );

      }
    );


  /* =========================================================
     NOVA問題生成
     ========================================================= */

  $("novaGenerateButton")
    ?.addEventListener(
      "click",
      () => {

        requireLogin(
          () => {

            const input =
              $("novaInput");

            if (input) {

              input.value =
                "中学生向けの一問一答問題を作ってください。";

              input.focus();

            }

          }
        );

      }
    );


  /* =========================================================
     NOVA解説
     ========================================================= */

  $("novaExplainButton")
    ?.addEventListener(
      "click",
      () => {

        requireLogin(
          () => {

            const input =
              $("novaInput");

            if (input) {

              input.value =
                "この問題の解き方を中学生にも分かりやすく説明してください。";

              input.focus();

            }

          }
        );

      }
    );


  /* =========================================================
     NOVA送信
     ========================================================= */

  $("novaSendButton")
    ?.addEventListener(
      "click",
      sendNova
    );


  async function sendNova() {

    if (!currentUser) {

      requireLogin(
        () => {}
      );

      return;

    }


    const input =
      $("novaInput");

    const response =
      $("novaResponse");

    const responseText =
      $("novaResponseText");


    if (
      !input ||
      !response ||
      !responseText
    ) {
      return;
    }


    const text =
      input.value.trim();


    if (!text) {

      alert(
        "質問を入力してください。"
      );

      return;

    }


    response.classList.remove(
      "hidden"
    );

    responseText.textContent =
      "NOVAが考えています……";


    try {

      const res =
        await fetch(
          "/api/nova",
          {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({

                message:
                  text,

                uid:
                  currentUser.uid

              })

          }
        );


      if (!res.ok) {

        throw new Error(
          "NOVA API error"
        );

      }


      const data =
        await res.json();


      responseText.textContent =
        data.answer ||
        "回答を取得できませんでした。";


    } catch (error) {

      console.error(error);

      responseText.textContent =
        "NOVAとの接続に失敗しました。\n" +
        "AIサーバー側の設定を確認してください。";

    }

  }


  /* =========================================================
     設定ボタン
     ========================================================= */

  $("settingsButton")
    ?.addEventListener(
      "click",
      () => {

        if (currentUser) {

          const ok =
            confirm(
              `ログイン中：${
                currentUser.email ||
                "Google"
              }\n\nログアウトしますか？`
            );

          if (ok) {

            logout();

          }

        } else {

          openLogin();

        }

      }
    );


  /* =========================================================
     Enterキー
     ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !== "Enter" ||
        state.currentPage !==
        "quizPage"
      ) {
        return;
      }

      if (
        state.mode === "input" &&
        !state.answeredCurrent
      ) {

        /*
           inputAnswerの中ですでに
           Enter処理をしているので、
           ここでは二重送信を防ぐ
        */

      }

    }
  );


  /* =========================================================
     初期化
     ========================================================= */

  function initialize() {

    updateUnitOptions();

    updateStatsUI();

    updateReviewCounts();

    showPage(
      "homePage"
    );

    console.log(
      "VISTA / NOVA initialized."
    );

    console.log(
      `Question bank: ${allQuestions.length} questions`
    );

  }


  initialize();

});