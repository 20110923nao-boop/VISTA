const sciencePhysicsQuestions = [

  // =========================================================
  // 電流・電圧・抵抗 001〜040
  // =========================================================

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
    choices: ["V = IR", "V = I/R", "I = VR", "R = V + I"],
    explanation: "電圧V、電流I、抵抗Rの関係はV=IRです。"
  },
  {
    id: "SCI_PHY_005",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧6V、抵抗3Ωのとき電流は何A？",
    answer: "2A",
    choices: ["1A", "2A", "3A", "18A"],
    explanation: "I=V/Rより、6÷3=2Aです。"
  },
  {
    id: "SCI_PHY_006",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流2A、抵抗5Ωのとき電圧は何V？",
    answer: "10V",
    choices: ["2.5V", "7V", "10V", "20V"],
    explanation: "V=IRより、2×5=10Vです。"
  },
  {
    id: "SCI_PHY_007",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧12V、電流3Aのとき抵抗は何Ω？",
    answer: "4Ω",
    choices: ["3Ω", "4Ω", "9Ω", "36Ω"],
    explanation: "R=V/Iより、12÷3=4Ωです。"
  },
  {
    id: "SCI_PHY_008",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "直列回路で各部分を流れる電流の大きさはどうなる？",
    answer: "どこでも等しい",
    choices: ["どこでも等しい", "電源に近いほど大きい", "抵抗の大きい所だけ大きい", "0になる"],
    explanation: "直列回路では回路のどの部分でも電流は等しくなります。"
  },
  {
    id: "SCI_PHY_009",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "直列回路では各抵抗にかかる電圧の合計は何に等しい？",
    answer: "電源の電圧",
    choices: ["電流", "電源の電圧", "抵抗の合計", "電力"],
    explanation: "各部分の電圧の合計は電源電圧に等しくなります。"
  },
  {
    id: "SCI_PHY_010",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "並列回路で各枝にかかる電圧はどうなる？",
    answer: "等しい",
    choices: ["等しい", "すべて0", "枝ごとに必ず異なる", "電流と等しい"],
    explanation: "並列回路では各枝にかかる電圧は電源電圧と等しくなります。"
  },
  {
    id: "SCI_PHY_011",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "並列回路で電源を流れる電流は各枝の電流とどういう関係？",
    answer: "各枝の電流の和",
    choices: ["各枝の電流の差", "各枝の電流の和", "最小の電流と等しい", "必ず0"],
    explanation: "電源を流れる電流は各枝を流れる電流の和です。"
  },
  {
    id: "SCI_PHY_012",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗が大きくなると、同じ電圧では電流はどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "必ず0になる"],
    explanation: "I=V/Rなので、電圧が同じなら抵抗が大きいほど電流は小さくなります。"
  },
  {
    id: "SCI_PHY_013",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "同じ抵抗で電圧を2倍にすると電流はどうなる？",
    answer: "2倍",
    choices: ["半分", "2倍", "4倍", "変わらない"],
    explanation: "I=V/Rより、抵抗が一定なら電流は電圧に比例します。"
  },
  {
    id: "SCI_PHY_014",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流計は回路にどのようにつなぐ？",
    answer: "直列",
    choices: ["直列", "並列", "どちらでもよい", "接続しない"],
    explanation: "電流計は測定したい部分に直列につなぎます。"
  },
  {
    id: "SCI_PHY_015",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧計は回路にどのようにつなぐ？",
    answer: "並列",
    choices: ["直列", "並列", "必ず直列と並列の両方", "接続しない"],
    explanation: "電圧計は測定する部分に並列につなぎます。"
  },
  {
    id: "SCI_PHY_016",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流計を回路に並列につなぐと危険なのはなぜ？",
    answer: "大きな電流が流れるおそれがあるから",
    choices: ["電圧が0になるから", "大きな電流が流れるおそれがあるから", "抵抗が無限になるから", "電池が逆になるから"],
    explanation: "電流計は内部抵抗が小さいため、並列につなぐと大きな電流が流れるおそれがあります。"
  },
  {
    id: "SCI_PHY_017",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧計を測定する部分に並列につなぐ理由は？",
    answer: "その部分の電圧を測定するため",
    choices: ["電流を増やすため", "その部分の電圧を測定するため", "抵抗を0にするため", "電力を消すため"],
    explanation: "電圧は2点間の電位差なので、測定部分に並列につなぎます。"
  },
  {
    id: "SCI_PHY_018",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電力を表す式は？",
    answer: "P = VI",
    choices: ["P = VI", "P = V/I", "P = I/R", "P = V+I"],
    explanation: "電力Pは電圧Vと電流Iの積で求められます。"
  },
  {
    id: "SCI_PHY_019",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電力の単位は何？",
    answer: "W",
    choices: ["V", "A", "W", "J"],
    explanation: "電力の単位はワット(W)です。"
  },
  {
    id: "SCI_PHY_020",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "100Vで2Aの電流が流れる電気器具の電力は？",
    answer: "200W",
    choices: ["50W", "100W", "200W", "500W"],
    explanation: "P=VIより100×2=200Wです。"
  },

  {
    id: "SCI_PHY_021",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電力量の単位としてよく使われるものは？",
    answer: "J",
    choices: ["A", "V", "J", "Ω"],
    explanation: "電力量の基本単位はジュール(J)です。"
  },
  {
    id: "SCI_PHY_022",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電力100Wの器具を10秒使用したときの電力量は？",
    answer: "1000J",
    choices: ["10J", "100J", "1000J", "10000J"],
    explanation: "電力量=電力×時間なので100×10=1000Jです。"
  },
  {
    id: "SCI_PHY_023",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "1kWは何W？",
    answer: "1000W",
    choices: ["10W", "100W", "1000W", "10000W"],
    explanation: "k(キロ)は1000倍を表します。"
  },
  {
    id: "SCI_PHY_024",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電気器具の消費電力が大きいほど、同じ時間では電力量はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "必ず0になる"],
    explanation: "電力量=電力×時間なので、時間が同じなら電力が大きいほど電力量も大きくなります。"
  },
  {
    id: "SCI_PHY_025",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗によって電気エネルギーが主に熱に変わる現象を何という？",
    answer: "ジュール熱",
    choices: ["電磁誘導", "ジュール熱", "放射", "浮力"],
    explanation: "電流が抵抗を流れると熱が発生します。これをジュール熱といいます。"
  },
  {
    id: "SCI_PHY_026",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "同じ電流を流したとき、抵抗が大きいほど発生するジュール熱はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "一定時間なら発生する熱量は電流の2乗と抵抗に関係し、抵抗が大きいほど大きくなります。"
  },
  {
    id: "SCI_PHY_027",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流の向きと電子の移動方向はどういう関係？",
    answer: "反対",
    choices: ["同じ", "反対", "必ず直角", "関係ない"],
    explanation: "金属中では自由電子が電流の向きとは反対方向に移動します。"
  },
  {
    id: "SCI_PHY_028",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "金属中を移動して電流を担う粒子は何？",
    answer: "自由電子",
    choices: ["陽子", "中性子", "自由電子", "原子核"],
    explanation: "金属では自由電子の移動によって電流が流れます。"
  },
  {
    id: "SCI_PHY_029",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電池は主にどのようなエネルギーを電気エネルギーに変換する？",
    answer: "化学エネルギー",
    choices: ["光エネルギー", "化学エネルギー", "位置エネルギー", "音エネルギー"],
    explanation: "電池では化学反応によって化学エネルギーが電気エネルギーに変換されます。"
  },
  {
    id: "SCI_PHY_030",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "乾電池を直列につなぐと、同じ向きなら電圧はどうなる？",
    answer: "合計になる",
    choices: ["小さくなる", "合計になる", "必ず0になる", "変化しない"],
    explanation: "同じ向きに直列につなぐと、それぞれの電圧の和になります。"
  },
  {
    id: "SCI_PHY_031",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "乾電池を並列につないだ場合、同じ電圧の電池なら電圧は基本的にどうなる？",
    answer: "1個の電池と同じ",
    choices: ["2倍", "1個の電池と同じ", "半分", "0になる"],
    explanation: "同じ電圧の電池を同じ向きに並列につないでも、電圧は基本的に1個分です。"
  },
  {
    id: "SCI_PHY_032",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流を測定する器具は何？",
    answer: "電流計",
    choices: ["電圧計", "電流計", "電力計", "ばねばかり"],
    explanation: "電流の大きさは電流計で測定します。"
  },
  {
    id: "SCI_PHY_033",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧を測定する器具は何？",
    answer: "電圧計",
    choices: ["電流計", "電圧計", "電力計", "温度計"],
    explanation: "電圧は電圧計で測定します。"
  },
  {
    id: "SCI_PHY_034",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流計の端子をつなぐとき、最初はどの測定端子を使うのが安全？",
    answer: "大きい電流を測れる端子",
    choices: ["最小の端子", "大きい電流を測れる端子", "どの端子でも同じ", "端子を使わない"],
    explanation: "測定範囲を超えないよう、まず大きい範囲の端子から測定します。"
  },
  {
    id: "SCI_PHY_035",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧計の針が振り切れるとき、まず何を確認する？",
    answer: "測定範囲",
    choices: ["電池の色", "測定範囲", "導線の長さだけ", "スイッチの形"],
    explanation: "測定範囲を超える電圧を加えていないか確認します。"
  },
  {
    id: "SCI_PHY_036",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗器の抵抗値を大きくすると、同じ電圧では電流はどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "逆向きになる"],
    explanation: "オームの法則I=V/Rより、抵抗が大きいほど電流は小さくなります。"
  },
  {
    id: "SCI_PHY_037",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧と電流の関係が比例する抵抗器では、V-Iグラフはどのようになる？",
    answer: "原点を通る直線",
    choices: ["原点を通る直線", "円", "水平な直線", "曲線だけ"],
    explanation: "オームの法則が成り立つ場合、電圧と電流は比例します。"
  },
  {
    id: "SCI_PHY_038",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "V-Iグラフの傾きが大きいほど抵抗はどうなる？",
    answer: "大きい",
    choices: ["小さい", "大きい", "必ず0", "関係ない"],
    explanation: "V=IRより、Vを縦軸、Iを横軸にすると傾きは抵抗Rを表します。"
  },
  {
    id: "SCI_PHY_039",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗が2Ωと4Ωの抵抗器を直列につないだ合成抵抗は？",
    answer: "6Ω",
    choices: ["2Ω", "4Ω", "6Ω", "8Ω"],
    explanation: "直列回路の合成抵抗はそれぞれの抵抗の和なので2+4=6Ωです。"
  },
  {
    id: "SCI_PHY_040",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗2Ωと4Ωを並列につないだとき、合成抵抗はどちらよりも小さくなる？",
    answer: "2Ω",
    choices: ["2Ω", "4Ω", "6Ω", "必ず10Ω以上"],
    explanation: "並列回路の合成抵抗は、最も小さい抵抗よりさらに小さくなります。"
  },

  // =========================================================
  // 磁界・電磁誘導 041〜070
  // =========================================================

  {
    id: "SCI_PHY_041",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流が流れる導線のまわりにできるものは何？",
    answer: "磁界",
    choices: ["電圧", "磁界", "音波", "圧力"],
    explanation: "電流が流れる導線の周囲には磁界ができます。"
  },
  {
    id: "SCI_PHY_042",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "磁界の向きを調べる代表的な道具は何？",
    answer: "方位磁針",
    choices: ["電圧計", "方位磁針", "温度計", "ばねばかり"],
    explanation: "方位磁針のN極の向きなどから磁界の向きを調べられます。"
  },
  {
    id: "SCI_PHY_043",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "磁界の中に電流を流すと、導線は磁界から何という力を受ける？",
    answer: "電磁力",
    choices: ["浮力", "電磁力", "摩擦力", "重力"],
    explanation: "磁界中の電流は磁界から力を受けます。"
  },
  {
    id: "SCI_PHY_044",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流の向きや磁界の向きを変えると、導線が受ける力の向きはどうなる？",
    answer: "変わる",
    choices: ["必ず同じ", "変わる", "必ず0", "関係ない"],
    explanation: "力の向きは電流の向きと磁界の向きによって決まります。"
  },
  {
    id: "SCI_PHY_045",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "コイルの中の磁界が変化すると、コイルに電流を流そうとする電圧が生じる現象は？",
    answer: "電磁誘導",
    choices: ["静電気", "電磁誘導", "放電", "中和"],
    explanation: "磁界の変化によって誘導電流が生じる現象を電磁誘導といいます。"
  },
  {
    id: "SCI_PHY_046",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電磁誘導によって流れる電流を何という？",
    answer: "誘導電流",
    choices: ["交流電流", "誘導電流", "漏電流", "静電流"],
    explanation: "電磁誘導によって流れる電流を誘導電流といいます。"
  },
  {
    id: "SCI_PHY_047",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "コイルに磁石を速く近づけると、ゆっくり近づける場合と比べ誘導電流はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "必ず0"],
    explanation: "磁界の変化が速いほど誘導電流は大きくなります。"
  },
  {
    id: "SCI_PHY_048",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "コイルの巻き数を増やすと、電磁誘導による電流は一般にどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "必ず0"],
    explanation: "同じ条件ならコイルの巻き数が多いほど誘導される電圧が大きくなります。"
  },
  {
    id: "SCI_PHY_049",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "発電機は主に何のエネルギーを電気エネルギーに変換する？",
    answer: "運動エネルギー",
    choices: ["運動エネルギー", "化学エネルギーだけ", "音エネルギー", "核エネルギーだけ"],
    explanation: "発電機ではコイルなどを回転させる運動エネルギーから電気エネルギーを得ます。"
  },
  {
    id: "SCI_PHY_050",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "モーターは電気エネルギーを主に何に変換する？",
    answer: "運動エネルギー",
    choices: ["化学エネルギー", "運動エネルギー", "位置エネルギーだけ", "光エネルギーだけ"],
    explanation: "モーターは電気エネルギーを回転などの運動エネルギーに変換します。"
  },

  // =========================================================
  // 力・圧力 051〜090
  // =========================================================

  {
    id: "SCI_PHY_051",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "力の大きさの単位は何？",
    answer: "N",
    choices: ["N", "J", "Pa", "W"],
    explanation: "力の単位はニュートン(N)です。"
  },
  {
    id: "SCI_PHY_052",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "力の三要素は何？",
    answer: "力の大きさ・向き・作用点",
    choices: [
      "大きさ・温度・時間",
      "大きさ・向き・作用点",
      "質量・速さ・時間",
      "長さ・面積・体積"
    ],
    explanation: "力は大きさ、向き、作用点の3つで表します。"
  },
  {
    id: "SCI_PHY_053",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体にはたらく重力の向きはどちら？",
    answer: "地球の中心方向",
    choices: ["上向き", "地球の中心方向", "水平方向", "北向き"],
    explanation: "重力は地球の中心に向かってはたらきます。"
  },
  {
    id: "SCI_PHY_054",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "質量100gの物体にはたらく重力を約1Nとする場合、200gでは約何N？",
    answer: "2N",
    choices: ["0.5N", "1N", "2N", "20N"],
    explanation: "100gあたり約1Nなので、200gでは約2Nです。"
  },
  {
    id: "SCI_PHY_055",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "ばねに加える力を大きくすると、ばねののびはどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "必ず0"],
    explanation: "弾性限度内では、力が大きいほどばねののびも大きくなります。"
  },
  {
    id: "SCI_PHY_056",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "ばねののびが力に比例する法則を何という？",
    answer: "フックの法則",
    choices: ["オームの法則", "フックの法則", "慣性の法則", "作用反作用の法則"],
    explanation: "弾性限度内ではばねののびは加えた力に比例します。"
  },
  {
    id: "SCI_PHY_057",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が面から受ける、面に垂直な力を何という？",
    answer: "垂直抗力",
    choices: ["摩擦力", "垂直抗力", "浮力", "重力"],
    explanation: "接触面から面に垂直な方向にはたらく力を垂直抗力といいます。"
  },
  {
    id: "SCI_PHY_058",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体の運動を妨げる向きにはたらく力は何？",
    answer: "摩擦力",
    choices: ["重力", "摩擦力", "浮力", "電磁力"],
    explanation: "接触面では運動を妨げる向きに摩擦力がはたらきます。"
  },
  {
    id: "SCI_PHY_059",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "水中の物体にはたらく、上向きの力を何という？",
    answer: "浮力",
    choices: ["重力", "摩擦力", "浮力", "弾性力"],
    explanation: "液体中の物体には上向きの浮力がはたらきます。"
  },
  {
    id: "SCI_PHY_060",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "圧力を表す式は？",
    answer: "圧力 = 力 ÷ 面積",
    choices: [
      "圧力 = 力 × 面積",
      "圧力 = 力 ÷ 面積",
      "圧力 = 面積 ÷ 力",
      "圧力 = 力 + 面積"
    ],
    explanation: "圧力は単位面積あたりにはたらく力です。"
  },

  // =========================================================
  // 圧力・水圧・浮力 061〜090
  // =========================================================

  {
    id: "SCI_PHY_061",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "圧力の単位は何？",
    answer: "Pa",
    choices: ["N", "Pa", "J", "W"],
    explanation: "圧力の単位はパスカル(Pa)です。"
  },
  {
    id: "SCI_PHY_062",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ力をより小さい面積に加えると圧力はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "圧力=力÷面積なので、面積が小さいほど圧力は大きくなります。"
  },
  {
    id: "SCI_PHY_063",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ力を加える場合、面積を2倍にすると圧力はどうなる？",
    answer: "半分になる",
    choices: ["2倍", "半分", "4倍", "変わらない"],
    explanation: "圧力は面積に反比例するので半分になります。"
  },
  {
    id: "SCI_PHY_064",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "水圧は水中で深くなるほどどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "水圧は水深が深いほど大きくなります。"
  },
  {
    id: "SCI_PHY_065",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ深さの水中では、水圧はどの向きにもどうはたらく？",
    answer: "同じ大きさではたらく",
    choices: ["下向きだけ", "上向きだけ", "同じ大きさではたらく", "横向きにはたらかない"],
    explanation: "液体の圧力は同じ深さなら方向によらず同じです。"
  },
  {
    id: "SCI_PHY_066",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "大気が物体にはたらかせている圧力を何という？",
    answer: "大気圧",
    choices: ["水圧", "大気圧", "静電気", "弾性力"],
    explanation: "空気の重さなどによって生じる圧力を大気圧といいます。"
  },
  {
    id: "SCI_PHY_067",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "標高が高くなると大気圧は一般にどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "必ず0"],
    explanation: "標高が高いほど上にある空気の量が少なくなるため大気圧は小さくなります。"
  },
  {
    id: "SCI_PHY_068",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "浮力は物体が押しのけた液体の何と関係する？",
    answer: "重さ",
    choices: ["温度", "重さ", "色", "透明度"],
    explanation: "浮力は押しのけた液体にはたらく重力と関係します。"
  },
  {
    id: "SCI_PHY_069",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が水に浮いて静止しているとき、浮力と重力はどういう関係？",
    answer: "等しい",
    choices: ["浮力が大きい", "重力が大きい", "等しい", "どちらも0"],
    explanation: "静止しているので力がつり合い、浮力と重力は等しくなります。"
  },
  {
    id: "SCI_PHY_070",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が水中に完全に沈んでいるとき、深さを変えても押しのける水の体積が同じなら浮力はどうなる？",
    answer: "基本的に同じ",
    choices: ["必ず増える", "基本的に同じ", "必ず0", "必ず半分"],
    explanation: "同じ液体中で押しのける体積が同じなら浮力は基本的に同じです。"
  },

  // =========================================================
  // 仕事・エネルギー 071〜110
  // =========================================================

  {
    id: "SCI_PHY_071",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が力を受けて力の向きに移動したとき、力がしたことを何という？",
    answer: "仕事",
    choices: ["圧力", "仕事", "電力", "熱量"],
    explanation: "力によって物体が移動すると、力が仕事をしたといいます。"
  },
  {
    id: "SCI_PHY_072",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "仕事を表す基本的な式は？",
    answer: "仕事 = 力 × 力の向きに移動した距離",
    choices: [
      "仕事 = 力 + 距離",
      "仕事 = 力 × 距離",
      "仕事 = 力 ÷ 距離",
      "仕事 = 距離 ÷ 力"
    ],
    explanation: "力の向きに物体が移動した距離を使って仕事を求めます。"
  },
  {
    id: "SCI_PHY_073",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "仕事の単位は何？",
    answer: "J",
    choices: ["N", "J", "Pa", "W"],
    explanation: "仕事の単位はジュール(J)です。"
  },
  {
    id: "SCI_PHY_074",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "10Nの力で物体を3m動かしたときの仕事は？",
    answer: "30J",
    choices: ["3J", "10J", "30J", "300J"],
    explanation: "仕事=10×3=30Jです。"
  },
  {
    id: "SCI_PHY_075",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体を水平に持ったまま静止しているとき、手が物体にする仕事は？",
    answer: "0J",
    choices: ["0J", "物体の重さと同じ", "必ず10J", "無限大"],
    explanation: "力を加えていても、力の向きに物体が移動していないため仕事は0です。"
  },
  {
    id: "SCI_PHY_076",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "力と移動方向が垂直な場合、その力がする仕事は？",
    answer: "0J",
    choices: ["0J", "最大", "必ず1J", "負になる"],
    explanation: "力の向きへの移動距離が0なので仕事は0です。"
  },
  {
    id: "SCI_PHY_077",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "仕事率とは何を表す量？",
    answer: "一定時間あたりにする仕事",
    choices: ["仕事の大きさだけ", "一定時間あたりにする仕事", "力の向き", "質量"],
    explanation: "仕事率は仕事をする速さを表します。"
  },
  {
    id: "SCI_PHY_078",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "仕事率の単位は何？",
    answer: "W",
    choices: ["J", "N", "W", "Pa"],
    explanation: "仕事率の単位はワット(W)です。"
  },
  {
    id: "SCI_PHY_079",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ仕事をより短い時間ですると仕事率はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "仕事率=仕事÷時間なので、時間が短いほど仕事率は大きくなります。"
  },
  {
    id: "SCI_PHY_080",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "高いところにある物体がもつエネルギーを何という？",
    answer: "位置エネルギー",
    choices: ["運動エネルギー", "位置エネルギー", "熱エネルギー", "電気エネルギー"],
    explanation: "高さによってもつエネルギーを位置エネルギーといいます。"
  },
  {
    id: "SCI_PHY_081",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "運動している物体がもつエネルギーを何という？",
    answer: "運動エネルギー",
    choices: ["位置エネルギー", "運動エネルギー", "化学エネルギー", "核エネルギー"],
    explanation: "運動している物体がもつエネルギーを運動エネルギーといいます。"
  },
  {
    id: "SCI_PHY_082",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体の高さが高くなると位置エネルギーはどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "必ず0"],
    explanation: "同じ質量なら高さが高いほど位置エネルギーは大きくなります。"
  },
  {
    id: "SCI_PHY_083",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ物体では、速さが大きくなると運動エネルギーはどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "運動エネルギーは物体の速さが大きいほど大きくなります。"
  },
  {
    id: "SCI_PHY_084",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "エネルギーの単位は何？",
    answer: "J",
    choices: ["N", "J", "W", "Pa"],
    explanation: "エネルギーの単位はジュール(J)です。"
  },
  {
    id: "SCI_PHY_085",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "エネルギーが別の形に変わっても、全体として一定に保たれる法則は？",
    answer: "エネルギー保存の法則",
    choices: ["オームの法則", "エネルギー保存の法則", "フックの法則", "慣性の法則"],
    explanation: "エネルギーは形を変えても全体として保存されます。"
  },

  // =========================================================
  // 運動 086〜120
  // =========================================================

  {
    id: "SCI_PHY_086",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "速さを求める式は？",
    answer: "速さ = 距離 ÷ 時間",
    choices: [
      "速さ = 距離 × 時間",
      "速さ = 距離 ÷ 時間",
      "速さ = 時間 ÷ 距離",
      "速さ = 距離 + 時間"
    ],
    explanation: "速さは単位時間あたりに進む距離です。"
  },
  {
    id: "SCI_PHY_087",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "100mを20秒で進む物体の速さは？",
    answer: "5m/s",
    choices: ["2m/s", "5m/s", "20m/s", "2000m/s"],
    explanation: "100÷20=5m/sです。"
  },
  {
    id: "SCI_PHY_088",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "1m/sは毎秒何m進む速さ？",
    answer: "1m",
    choices: ["0.1m", "1m", "10m", "100m"],
    explanation: "1m/sは1秒間に1m進む速さです。"
  },
  {
    id: "SCI_PHY_089",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "一定時間に進む距離が一定の運動を何という？",
    answer: "等速直線運動",
    choices: ["自由落下", "等速直線運動", "円運動", "振動"],
    explanation: "速さと運動方向が一定の直線運動を等速直線運動といいます。"
  },
  {
    id: "SCI_PHY_090",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体に力がはたらいていない、または力がつり合っているとき、静止している物体はどうなる？",
    answer: "静止し続ける",
    choices: ["必ず動く", "静止し続ける", "必ず加速する", "必ず落下する"],
    explanation: "力がつり合っていれば、静止している物体は静止し続けます。"
  },
  {
    id: "SCI_PHY_091",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "力がつり合っている物体が運動している場合、その運動はどうなる？",
    answer: "等速直線運動を続ける",
    choices: ["停止する", "等速直線運動を続ける", "必ず加速する", "必ず曲がる"],
    explanation: "合力が0なら、運動している物体は等速直線運動を続けます。"
  },
  {
    id: "SCI_PHY_092",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が現在の運動状態を保とうとする性質を何という？",
    answer: "慣性",
    choices: ["浮力", "慣性", "弾性", "電磁誘導"],
    explanation: "物体が運動状態を保とうとする性質を慣性といいます。"
  },
  {
    id: "SCI_PHY_093",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "バスが急に発車すると乗客の体が後ろに傾くのは何による？",
    answer: "慣性",
    choices: ["浮力", "慣性", "摩擦力だけ", "電磁力"],
    explanation: "体は静止状態を保とうとするため後ろに傾くように感じます。"
  },
  {
    id: "SCI_PHY_094",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "力を加えると物体の運動の状態が変化する。この変化を何という？",
    answer: "加速度",
    choices: ["圧力", "加速度", "仕事", "電力"],
    explanation: "速度が時間とともに変化する割合を加速度といいます。"
  },
  {
    id: "SCI_PHY_095",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体に同じ力を加える場合、質量が大きいほど加速度はどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "必ず0"],
    explanation: "同じ力なら質量が大きいほど運動状態を変えにくくなります。"
  },

  // =========================================================
  // 光 096〜130
  // =========================================================

  {
    id: "SCI_PHY_096",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "光がまっすぐ進むことを何という？",
    answer: "光の直進",
    choices: ["光の反射", "光の直進", "光の屈折", "光の分散"],
    explanation: "光が同じ物質中をまっすぐ進む性質を光の直進といいます。"
  },
  {
    id: "SCI_PHY_097",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "光が物体の表面ではね返ることを何という？",
    answer: "反射",
    choices: ["屈折", "反射", "分散", "吸収"],
    explanation: "光が物体の表面ではね返る現象を反射といいます。"
  },
  {
    id: "SCI_PHY_098",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "入射角と反射角の大きさはどうなる？",
    answer: "等しい",
    choices: ["入射角の方が大きい", "反射角の方が大きい", "等しい", "必ず0"],
    explanation: "反射の法則により入射角と反射角は等しくなります。"
  },
  {
    id: "SCI_PHY_099",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "光が空気から水へ進むとき、光の進む向きが変わる現象は？",
    answer: "屈折",
    choices: ["反射", "屈折", "直進", "干渉"],
    explanation: "異なる物質の境界で光の進む向きが変わることを屈折といいます。"
  },
  {
    id: "SCI_PHY_100",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズの中央を通る光は、薄い凸レンズでは基本的にどう進む？",
    answer: "ほぼ直進する",
    choices: ["必ず反射する", "ほぼ直進する", "必ず90度曲がる", "消える"],
    explanation: "光軸付近を通る光はほぼ直進します。"
  },
  {
    id: "SCI_PHY_101",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズを通った光が集まる点を何という？",
    answer: "焦点",
    choices: ["頂点", "焦点", "中心", "反射点"],
    explanation: "光軸に平行な光が凸レンズを通った後に集まる点を焦点といいます。"
  },
  {
    id: "SCI_PHY_102",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズの焦点距離とは何？",
    answer: "レンズの光学的中心から焦点までの距離",
    choices: [
      "レンズの端から端までの距離",
      "レンズの光学的中心から焦点までの距離",
      "物体からスクリーンまでの距離",
      "焦点間の角度"
    ],
    explanation: "焦点距離はレンズの中心付近から焦点までの距離です。"
  },
  {
    id: "SCI_PHY_103",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズでスクリーンに映る像を何という？",
    answer: "実像",
    choices: ["虚像", "実像", "反射像", "影"],
    explanation: "実際に光が集まってスクリーンに映せる像を実像といいます。"
  },
  {
    id: "SCI_PHY_104",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズでできる実像は、物体と比べて上下がどうなる？",
    answer: "逆になる",
    choices: ["同じ", "逆になる", "必ず横になる", "消える"],
    explanation: "凸レンズによる実像は上下左右が反対の倒立像です。"
  },
  {
    id: "SCI_PHY_105",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "鏡にうつる像はスクリーンに映すことができる？",
    answer: "できない",
    choices: ["できる", "できない", "必ずできる", "条件なしでできる"],
    explanation: "平面鏡の像は虚像なのでスクリーンには映せません。"
  },

  // =========================================================
  // 音 106〜140
  // =========================================================

  {
    id: "SCI_PHY_106",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音は何の振動によって発生する？",
    answer: "物体の振動",
    choices: ["物体の振動", "光", "電流だけ", "磁界だけ"],
    explanation: "音源となる物体の振動が周囲に伝わって音になります。"
  },
  {
    id: "SCI_PHY_107",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音が空気中を伝わるとき、空気は何をしている？",
    answer: "振動している",
    choices: ["静止している", "振動している", "発光している", "電流を流している"],
    explanation: "音源の振動が空気を振動させ、その振動が伝わります。"
  },
  {
    id: "SCI_PHY_108",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音の高さを決める主な要素は何？",
    answer: "振動数",
    choices: ["振幅", "振動数", "音速だけ", "温度だけ"],
    explanation: "振動数が大きいほど音は高くなります。"
  },
  {
    id: "SCI_PHY_109",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音の大きさを決める主な要素は何？",
    answer: "振幅",
    choices: ["振幅", "振動数だけ", "波長だけ", "音速"],
    explanation: "振幅が大きいほど音は大きく聞こえます。"
  },
  {
    id: "SCI_PHY_110",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "振動数の単位は何？",
    answer: "Hz",
    choices: ["Hz", "N", "Pa", "J"],
    explanation: "振動数の単位はヘルツ(Hz)です。"
  },
  {
    id: "SCI_PHY_111",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "1Hzとは1秒間に何回振動すること？",
    answer: "1回",
    choices: ["1回", "10回", "100回", "1000回"],
    explanation: "1Hzは1秒間に1回の振動を表します。"
  },
  {
    id: "SCI_PHY_112",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "振動数が大きい音ほど高いか低いか？",
    answer: "高い",
    choices: ["高い", "低い", "変わらない", "聞こえない"],
    explanation: "振動数が大きいほど音の高さは高くなります。"
  },
  {
    id: "SCI_PHY_113",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "同じ振動数で振幅だけを大きくすると音はどうなる？",
    answer: "大きくなる",
    choices: ["高くなる", "大きくなる", "低くなる", "聞こえなくなる"],
    explanation: "振幅が大きくなると音の大きさが大きくなります。"
  },
  {
    id: "SCI_PHY_114",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音は真空中を伝わる？",
    answer: "伝わらない",
    choices: ["伝わる", "伝わらない", "光速で伝わる", "条件なく伝わる"],
    explanation: "音は物質の振動を利用して伝わるため、真空中では伝わりません。"
  },
  {
    id: "SCI_PHY_115",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音が空気より一般に速く伝わる物質は？",
    answer: "金属などの固体",
    choices: ["真空", "金属などの固体", "何もない空間", "完全な真空"],
    explanation: "音は一般に固体中で速く、液体、気体の順に遅くなります。"
  },

  // =========================================================
  // 熱・エネルギー 116〜150
  // =========================================================

  {
    id: "SCI_PHY_116",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "物体の温度を測る器具は？",
    answer: "温度計",
    choices: ["温度計", "電流計", "電圧計", "ばねばかり"],
    explanation: "温度は温度計で測定します。"
  },
  {
    id: "SCI_PHY_117",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "物体の温度が高いほど、物体を構成する粒子の運動は一般にどうなる？",
    answer: "激しくなる",
    choices: ["弱くなる", "激しくなる", "止まる", "なくなる"],
    explanation: "温度が高いほど粒子の熱運動は激しくなります。"
  },
  {
    id: "SCI_PHY_118",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "熱が高温の物体から低温の物体へ移動することを何という？",
    answer: "熱伝導",
    choices: ["熱伝導", "電磁誘導", "光の反射", "蒸発"],
    explanation: "物体同士の接触などによって熱が移動する現象を熱伝導といいます。"
  },
  {
    id: "SCI_PHY_119",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "液体や気体が移動することで熱が伝わる現象は？",
    answer: "対流",
    choices: ["対流", "反射", "電離", "放電"],
    explanation: "液体や気体の移動による熱の伝わり方を対流といいます。"
  },
  {
    id: "SCI_PHY_120",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "赤外線などによって熱が伝わる現象を何という？",
    answer: "放射",
    choices: ["放射", "対流", "電離", "反射"],
    explanation: "電磁波によって熱が伝わることを放射といいます。"
  },

  // =========================================================
  // 総合・入試対策 121〜200
  // =========================================================

  {
    id: "SCI_PHY_121",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "仕事と仕事率の違いとして正しいものは？",
    answer: "仕事率は仕事をする速さを表す",
    choices: [
      "仕事率は仕事の単位",
      "仕事率は仕事をする速さを表す",
      "仕事は時間だけを表す",
      "両者は全く同じ"
    ],
    explanation: "仕事率は単位時間あたりにする仕事で、仕事をする速さを表します。"
  },
  {
    id: "SCI_PHY_122",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ高さまで物体を持ち上げるとき、仕事を小さくするにはどうする？",
    answer: "必要な力を小さくする代わりに距離を大きくする",
    choices: [
      "力も距離も大きくする",
      "必要な力を小さくする代わりに距離を大きくする",
      "力だけ大きくする",
      "必ず距離を0にする"
    ],
    explanation: "理想的な道具では仕事は一定で、力を小さくする代わりに動かす距離が大きくなります。"
  },
  {
    id: "SCI_PHY_123",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "てこで小さい力で重い物体を動かせる理由は？",
    answer: "力を加える距離を大きくできるから",
    choices: [
      "物体の質量が減るから",
      "力を加える距離を大きくできるから",
      "重力が消えるから",
      "仕事が必ず0になるから"
    ],
    explanation: "てこでは腕の長さを利用して必要な力を小さくできます。"
  },
  {
    id: "SCI_PHY_124",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "道具を使って力を小さくしても、理想的には仕事はどうなる？",
    answer: "同じ",
    choices: ["大きくなる", "小さくなる", "同じ", "必ず0"],
    explanation: "力を小さくできる代わりに距離が大きくなるため、理想的には仕事は同じです。"
  },
  {
    id: "SCI_PHY_125",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "実際の道具では摩擦などによって、加えた仕事と得られる仕事の関係はどうなる？",
    answer: "得られる仕事の方が小さい",
    choices: ["得られる仕事の方が大きい", "得られる仕事の方が小さい", "必ず等しい", "両方0"],
    explanation: "摩擦などによって一部のエネルギーが熱などに変わるためです。"
  },
  {
    id: "SCI_PHY_126",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "エネルギーの変換で最終的に熱として周囲へ移ることが多い理由は？",
    answer: "摩擦や抵抗などによって熱が発生するから",
    choices: [
      "エネルギーが消滅するから",
      "摩擦や抵抗などによって熱が発生するから",
      "質量が消えるから",
      "重力がなくなるから"
    ],
    explanation: "摩擦や電気抵抗などによってエネルギーの一部が熱になります。"
  },
  {
    id: "SCI_PHY_127",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電力200Wの器具を5秒使ったときの電力量は？",
    answer: "1000J",
    choices: ["40J", "200J", "1000J", "4000J"],
    explanation: "200×5=1000Jです。"
  },
  {
    id: "SCI_PHY_128",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧20V、抵抗10Ωの電流は？",
    answer: "2A",
    choices: ["0.5A", "2A", "10A", "200A"],
    explanation: "I=V/R=20÷10=2Aです。"
  },
  {
    id: "SCI_PHY_129",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流0.5A、抵抗20Ωの電圧は？",
    answer: "10V",
    choices: ["5V", "10V", "20V", "40V"],
    explanation: "V=IR=0.5×20=10Vです。"
  },
  {
    id: "SCI_PHY_130",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧10V、電流2Aの電力は？",
    answer: "20W",
    choices: ["5W", "10W", "20W", "100W"],
    explanation: "P=VI=10×2=20Wです。"
  },

  // 131〜200：入試で使う基本事項・考察
  {
    id: "SCI_PHY_131",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "光源とは何？",
    answer: "自ら光を出す物体",
    choices: ["光を反射するだけの物体", "自ら光を出す物体", "透明な物体", "光を必ず吸収する物体"],
    explanation: "太陽や電球のように自ら光を出す物体を光源といいます。"
  },
  {
    id: "SCI_PHY_132",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "月が明るく見える主な理由は？",
    answer: "太陽の光を反射しているから",
    choices: ["月自身が発光するから", "太陽の光を反射しているから", "地球の光を作るから", "電流が流れているから"],
    explanation: "月は自ら発光しているのではなく、太陽光を反射しています。"
  },
  {
    id: "SCI_PHY_133",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "透明な物体を光が通り抜けることを何という？",
    answer: "光の透過",
    choices: ["反射", "透過", "屈折だけ", "吸収"],
    explanation: "光が物体を通り抜けることを透過といいます。"
  },
  {
    id: "SCI_PHY_134",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "白色光をプリズムに通すと様々な色に分かれる現象は？",
    answer: "光の分散",
    choices: ["光の直進", "光の分散", "光の反射", "光の吸収"],
    explanation: "白色光が色ごとに分かれる現象を分散といいます。"
  },
  {
    id: "SCI_PHY_135",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "光の三原色は何？",
    answer: "赤・緑・青",
    choices: ["赤・黄・青", "赤・緑・青", "黄・緑・紫", "白・黒・灰"],
    explanation: "光の三原色は赤(R)、緑(G)、青(B)です。"
  },
  {
    id: "SCI_PHY_136",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音の波形で、1回振動するのにかかる時間を何という？",
    answer: "周期",
    choices: ["振幅", "周期", "振動数", "音圧"],
    explanation: "1回の振動にかかる時間を周期といいます。"
  },
  {
    id: "SCI_PHY_137",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "振動数と周期にはどのような関係がある？",
    answer: "反比例",
    choices: ["比例", "反比例", "必ず等しい", "関係がない"],
    explanation: "振動数fと周期Tにはf=1/Tの関係があります。"
  },
  {
    id: "SCI_PHY_138",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "周期0.01秒の音の振動数は？",
    answer: "100Hz",
    choices: ["1Hz", "10Hz", "100Hz", "1000Hz"],
    explanation: "f=1/Tなので1÷0.01=100Hzです。"
  },
  {
    id: "SCI_PHY_139",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電気抵抗が一定のとき、電流を2倍にすると電力は何倍になる？",
    answer: "4倍",
    choices: ["2倍", "4倍", "半分", "変わらない"],
    explanation: "P=I²Rより、抵抗一定なら電流2倍で電力は4倍です。"
  },
  {
    id: "SCI_PHY_140",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧一定のとき、抵抗を2倍にすると電流はどうなる？",
    answer: "半分になる",
    choices: ["2倍", "半分", "4倍", "変わらない"],
    explanation: "I=V/Rより抵抗が2倍なら電流は半分です。"
  },

  {
    id: "SCI_PHY_141",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "直列回路に抵抗を1つ追加すると合成抵抗はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "直列では抵抗が加算されるため合成抵抗は大きくなります。"
  },
  {
    id: "SCI_PHY_142",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "並列回路に新しい枝を追加すると、合成抵抗は一般にどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "無限大になる"],
    explanation: "電流の通り道が増えるため、合成抵抗は小さくなります。"
  },
  {
    id: "SCI_PHY_143",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "同じ抵抗を2個直列につなぐと、1個の場合と比べ合成抵抗は？",
    answer: "2倍",
    choices: ["半分", "2倍", "4倍", "同じ"],
    explanation: "同じ抵抗Rを2個直列にすると2Rです。"
  },
  {
    id: "SCI_PHY_144",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "同じ抵抗を2個並列につなぐと、1個の場合と比べ合成抵抗は？",
    answer: "半分",
    choices: ["2倍", "半分", "4倍", "同じ"],
    explanation: "同じ抵抗Rを2個並列にするとR/2です。"
  },
  {
    id: "SCI_PHY_145",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "自由落下する物体の速さは時間とともにどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "必ず0"],
    explanation: "空気抵抗を無視すると、重力によって落下速度は増加します。"
  },
  {
    id: "SCI_PHY_146",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "空気抵抗を無視すると、同じ高さから落とした質量の異なる物体の落下時間はどうなる？",
    answer: "同じ",
    choices: ["重い方が短い", "軽い方が短い", "同じ", "質量で必ず10倍違う"],
    explanation: "空気抵抗を無視すれば、落下時間は質量によらず同じです。"
  },
  {
    id: "SCI_PHY_147",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "高いところから物体が落下すると、位置エネルギーはどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "必ず0のまま"],
    explanation: "高さが低くなるため位置エネルギーは減少します。"
  },
  {
    id: "SCI_PHY_148",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "落下中の物体では、位置エネルギーの一部は何に変わる？",
    answer: "運動エネルギー",
    choices: ["運動エネルギー", "質量", "電荷", "体積"],
    explanation: "落下にともない位置エネルギーが運動エネルギーに変換されます。"
  },
  {
    id: "SCI_PHY_149",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が坂を下るとき、摩擦があるとエネルギーの一部は主に何になる？",
    answer: "熱",
    choices: ["熱", "質量", "重力", "電荷"],
    explanation: "摩擦によって力学的エネルギーの一部が熱エネルギーに変換されます。"
  },
  {
    id: "SCI_PHY_150",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が一定の速さで水平面を移動しているとき、進行方向の合力は？",
    answer: "0N",
    choices: ["0N", "必ず1N", "重力と同じ", "無限大"],
    explanation: "一定の速さで直線運動しているなら、進行方向の合力は0です。"
  },

  {
    id: "SCI_PHY_151",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体に右向き10N、左向き6Nの力がはたらくと合力は？",
    answer: "右向き4N",
    choices: ["右向き4N", "左向き4N", "右向き16N", "0N"],
    explanation: "10-6=4Nで、強い右向きです。"
  },
  {
    id: "SCI_PHY_152",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "2つの力が同じ大きさで反対向きにはたらくと合力は？",
    answer: "0N",
    choices: ["0N", "2倍", "半分", "無限大"],
    explanation: "反対向きで大きさが等しい力はつり合い、合力は0です。"
  },
  {
    id: "SCI_PHY_153",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "作用反作用の2力は、同じ物体にはたらく？",
    answer: "別々の物体にはたらく",
    choices: ["同じ物体にはたらく", "別々の物体にはたらく", "必ず同じ場所だけにはたらく", "物体にはたらかない"],
    explanation: "作用反作用の力は互いに別々の物体にはたらきます。"
  },
  {
    id: "SCI_PHY_154",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "作用反作用の2力の大きさは？",
    answer: "等しい",
    choices: ["必ず異なる", "等しい", "片方だけ0", "無関係"],
    explanation: "作用反作用の力は大きさが等しく、向きが反対です。"
  },
  {
    id: "SCI_PHY_155",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "壁を押すと自分が押し返されるように感じるのは何による？",
    answer: "作用反作用",
    choices: ["浮力", "作用反作用", "電磁誘導", "光の反射"],
    explanation: "壁に力を加えると、壁から同じ大きさで反対向きの力を受けます。"
  },
  {
    id: "SCI_PHY_156",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "摩擦力を小さくする方法として適切なのは？",
    answer: "接触面を滑らかにする",
    choices: ["接触面を滑らかにする", "面を粗くする", "重さを必ず増やす", "圧力を必ず増やす"],
    explanation: "接触面を滑らかにしたり、潤滑剤を使ったりすると摩擦を小さくできます。"
  },
  {
    id: "SCI_PHY_157",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "タイヤと道路の間の摩擦力が必要な理由は？",
    answer: "車を進ませたり止めたりするため",
    choices: ["車を浮かせるため", "車を進ませたり止めたりするため", "重力を消すため", "車を軽くするため"],
    explanation: "タイヤと道路の摩擦によって車は加速・減速・方向転換できます。"
  },
  {
    id: "SCI_PHY_158",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "圧力を小さくするには、同じ力なら面積をどうする？",
    answer: "大きくする",
    choices: ["小さくする", "大きくする", "0にする", "変えない"],
    explanation: "圧力=力÷面積なので、面積を大きくすると圧力は小さくなります。"
  },
  {
    id: "SCI_PHY_159",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "雪の上を歩くとき、スキー板のように面積を大きくすると沈みにくくなるのはなぜ？",
    answer: "圧力が小さくなるから",
    choices: ["重力がなくなるから", "圧力が小さくなるから", "質量が減るから", "摩擦が0になるから"],
    explanation: "接触面積が大きくなることで雪面への圧力が小さくなります。"
  },
  {
    id: "SCI_PHY_160",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "水圧が深いほど大きくなる主な理由は？",
    answer: "上にある水の量が多くなるから",
    choices: ["水が軽くなるから", "上にある水の量が多くなるから", "水温が必ず高くなるから", "重力がなくなるから"],
    explanation: "深い場所ほど上にある水の重さによる圧力が大きくなります。"
  },

  {
    id: "SCI_PHY_161",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ水深なら、水圧は容器の形によって変わる？",
    answer: "基本的に変わらない",
    choices: ["必ず変わる", "基本的に変わらない", "容器が広いほど0になる", "容器が狭いほど必ず10倍"],
    explanation: "同じ液体・同じ深さなら水圧は容器の形によらず同じです。"
  },
  {
    id: "SCI_PHY_162",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "浮力を大きくする方法として、同じ液体中で物体が押しのける体積を大きくするとどうなる？",
    answer: "浮力が大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "押しのける液体の体積が大きいほど浮力は大きくなります。"
  },
  {
    id: "SCI_PHY_163",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "船が鉄でできていても水に浮くことができる主な理由は？",
    answer: "船全体として水を大きく押しのける形になっているから",
    choices: [
      "鉄には重力がないから",
      "船全体として水を大きく押しのける形になっているから",
      "鉄は必ず水より軽いから",
      "水圧が存在しないから"
    ],
    explanation: "船は内部が空洞で大きな体積を占めるため、十分な浮力を受けられます。"
  },
  {
    id: "SCI_PHY_164",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が液体に完全に沈んでいるとき、浮力は何によって決まる？",
    answer: "押しのけた液体の体積と液体の密度など",
    choices: ["色だけ", "押しのけた液体の体積と液体の密度など", "物体の温度だけ", "容器の高さだけ"],
    explanation: "浮力は液体の密度や押しのけた体積、重力加速度などに関係します。"
  },
  {
    id: "SCI_PHY_165",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "仕事を求めるときに使う距離はどの方向の移動距離？",
    answer: "力の向きの移動距離",
    choices: ["必ず水平距離", "力の向きの移動距離", "必ず垂直距離", "どの距離でも同じ"],
    explanation: "仕事は力の向きに移動した距離を使って求めます。"
  },
  {
    id: "SCI_PHY_166",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "5Nの力で4m動かしたときの仕事は？",
    answer: "20J",
    choices: ["1.25J", "9J", "20J", "25J"],
    explanation: "5×4=20Jです。"
  },
  {
    id: "SCI_PHY_167",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "60Jの仕事を10秒でする仕事率は？",
    answer: "6W",
    choices: ["0.6W", "6W", "60W", "600W"],
    explanation: "仕事率=60÷10=6Wです。"
  },
  {
    id: "SCI_PHY_168",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ仕事を2倍の時間で行うと仕事率は？",
    answer: "半分",
    choices: ["2倍", "半分", "4倍", "同じ"],
    explanation: "仕事率=仕事÷時間なので時間が2倍なら仕事率は半分です。"
  },
  {
    id: "SCI_PHY_169",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体の質量が同じで高さを2倍にすると位置エネルギーは？",
    answer: "2倍",
    choices: ["半分", "2倍", "4倍", "変わらない"],
    explanation: "位置エネルギーは質量と高さに比例するので、高さ2倍なら2倍です。"
  },
  {
    id: "SCI_PHY_170",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ物体の速さを2倍にすると運動エネルギーは何倍になる？",
    answer: "4倍",
    choices: ["2倍", "4倍", "半分", "変わらない"],
    explanation: "運動エネルギーは速さの2乗に比例します。"
  },

  {
    id: "SCI_PHY_171",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧を一定にして抵抗を半分にすると電流は？",
    answer: "2倍",
    choices: ["半分", "2倍", "4倍", "変わらない"],
    explanation: "I=V/Rなので、抵抗が半分なら電流は2倍です。"
  },
  {
    id: "SCI_PHY_172",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗を一定にして電流を3倍にすると電力は何倍？",
    answer: "9倍",
    choices: ["3倍", "6倍", "9倍", "変わらない"],
    explanation: "P=I²Rより、電流3倍なら電力は9倍です。"
  },
  {
    id: "SCI_PHY_173",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧一定のとき、抵抗を2倍にすると電力は？",
    answer: "半分",
    choices: ["2倍", "半分", "4倍", "変わらない"],
    explanation: "P=V²/Rなので、電圧一定なら抵抗2倍で電力は半分です。"
  },
  {
    id: "SCI_PHY_174",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流計を測定対象に直列につなぐのは、電流がその部分を通過する必要があるためである。正しい？",
    answer: "正しい",
    choices: ["正しい", "誤り", "条件による", "測定できない"],
    explanation: "電流計は測定する電流と同じ電流が流れるよう直列につなぎます。"
  },
  {
    id: "SCI_PHY_175",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧計は測定対象に並列につなぐ。正しい？",
    answer: "正しい",
    choices: ["正しい", "誤り", "必ず直列", "測定不能"],
    explanation: "電圧は対象の2点間の電位差なので並列につなぎます。"
  },
  {
    id: "SCI_PHY_176",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電圧計の内部抵抗は一般に大きい？",
    answer: "大きい",
    choices: ["大きい", "小さい", "0", "必ず1Ω"],
    explanation: "測定対象の回路に流れる電流をできるだけ変えないよう内部抵抗は大きくなっています。"
  },
  {
    id: "SCI_PHY_177",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流計の内部抵抗は一般に大きい？",
    answer: "小さい",
    choices: ["大きい", "小さい", "無限大", "必ず100Ω"],
    explanation: "回路の電流をできるだけ変えないよう内部抵抗は小さくなっています。"
  },
  {
    id: "SCI_PHY_178",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電気器具に表示された100V・500Wは、100Vで使用したとき何を表す？",
    answer: "消費電力が500W",
    choices: ["電流が500A", "消費電力が500W", "抵抗が500Ω", "電圧が500V"],
    explanation: "定格電圧100Vで使用したときの消費電力が500Wという意味です。"
  },
  {
    id: "SCI_PHY_179",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ力で物体をより長い距離動かすと仕事はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "仕事=力×距離なので、力が同じなら距離が長いほど仕事は大きくなります。"
  },
  {
    id: "SCI_PHY_180",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "同じ距離を動かすとき、力を2倍にすると仕事は？",
    answer: "2倍",
    choices: ["半分", "2倍", "4倍", "変わらない"],
    explanation: "仕事=力×距離なので、距離一定なら力2倍で仕事も2倍です。"
  },

  {
    id: "SCI_PHY_181",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "物体が等速直線運動をしているとき、合力は何N？",
    answer: "0N",
    choices: ["0N", "1N", "必ず10N", "質量と同じ"],
    explanation: "等速直線運動では速度が変化しないため、合力は0です。"
  },
  {
    id: "SCI_PHY_182",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "力の大きさが一定で質量を大きくすると加速度はどうなる？",
    answer: "小さくなる",
    choices: ["大きくなる", "小さくなる", "変わらない", "必ず0"],
    explanation: "同じ力なら質量が大きいほど加速度は小さくなります。"
  },
  {
    id: "SCI_PHY_183",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "水平面上で物体を引くとき、引く力と摩擦力がつり合っていれば物体はどう動く？",
    answer: "等速直線運動をするか静止する",
    choices: [
      "必ず加速する",
      "等速直線運動をするか静止する",
      "必ず停止する",
      "必ず上昇する"
    ],
    explanation: "合力が0なので、静止なら静止、運動中なら等速直線運動になります。"
  },
  {
    id: "SCI_PHY_184",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "斜面上の物体が下向きに動くとき、摩擦力は基本的にどちら向き？",
    answer: "斜面を上る向き",
    choices: ["斜面を下る向き", "斜面を上る向き", "鉛直上向きだけ", "水平方向だけ"],
    explanation: "摩擦力は運動を妨げる向きにはたらきます。"
  },
  {
    id: "SCI_PHY_185",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "斜面を使うと重い物体を小さい力で持ち上げられるのはなぜ？",
    answer: "移動距離を長くすることで必要な力を小さくできるから",
    choices: [
      "重力が消えるから",
      "移動距離を長くすることで必要な力を小さくできるから",
      "質量が減るから",
      "仕事が必ず0になるから"
    ],
    explanation: "力を小さくする代わりに移動距離を長くすることで仕事を行います。"
  },
  {
    id: "SCI_PHY_186",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "実験で測定値が複数得られたとき、誤差を小さくするために有効なのは？",
    answer: "同じ条件で複数回測定する",
    choices: [
      "1回だけ測定する",
      "同じ条件で複数回測定する",
      "都合のよい値だけ選ぶ",
      "単位を変える"
    ],
    explanation: "複数回測定して平均などをとることで偶然誤差の影響を小さくできます。"
  },
  {
    id: "SCI_PHY_187",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電流と電圧の関係を調べる実験で、抵抗器を変えずに電圧を変化させる目的は？",
    answer: "電圧と電流の関係を調べるため",
    choices: [
      "抵抗を測れなくするため",
      "電圧と電流の関係を調べるため",
      "温度だけを測るため",
      "磁界を消すため"
    ],
    explanation: "条件をそろえて電圧と電流の関係を調べます。"
  },
  {
    id: "SCI_PHY_188",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "抵抗器に流す電流を大きくしすぎない方がよい理由は？",
    answer: "発熱して抵抗値などが変化する可能性があるから",
    choices: [
      "電流が消えるから",
      "発熱して抵抗値などが変化する可能性があるから",
      "重力が変化するから",
      "音が必ず高くなるから"
    ],
    explanation: "抵抗器が発熱すると抵抗値が変化し、実験結果に影響することがあります。"
  },
  {
    id: "SCI_PHY_189",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "光が水中から空気中へ出るときも屈折することがある。正しい？",
    answer: "正しい",
    choices: ["正しい", "誤り", "水から出ると必ず直進", "条件なく反射だけ"],
    explanation: "異なる物質の境界を通るとき、光は屈折することがあります。"
  },
  {
    id: "SCI_PHY_190",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "鏡に光を当てたとき、入射角を大きくすると反射角はどうなる？",
    answer: "大きくなる",
    choices: ["小さくなる", "大きくなる", "変わらない", "0になる"],
    explanation: "入射角=反射角なので、入射角が大きくなると反射角も大きくなります。"
  },

  {
    id: "SCI_PHY_191",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズと物体の距離が焦点距離より短いとき、スクリーンに実像を映せる？",
    answer: "映せない",
    choices: ["映せる", "映せない", "必ず巨大な実像になる", "条件なく映せる"],
    explanation: "焦点距離より内側に物体があると、凸レンズでは正立した虚像になります。"
  },
  {
    id: "SCI_PHY_192",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "凸レンズで焦点より外側に物体を置くと、基本的にどのような像ができる？",
    answer: "倒立した実像",
    choices: ["倒立した実像", "正立した虚像だけ", "像は必ずできない", "音の像"],
    explanation: "焦点より外側ではスクリーンに映せる倒立した実像ができます。"
  },
  {
    id: "SCI_PHY_193",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音源の振動数を2倍にすると音の高さはどうなる？",
    answer: "高くなる",
    choices: ["低くなる", "高くなる", "変わらない", "聞こえなくなる"],
    explanation: "振動数が大きいほど音は高くなります。"
  },
  {
    id: "SCI_PHY_194",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "音源の振幅を2倍にすると、音の高さはどうなる？",
    answer: "基本的に変わらない",
    choices: ["高くなる", "低くなる", "基本的に変わらない", "必ず聞こえなくなる"],
    explanation: "振幅は主に音の大きさに関係し、振動数が同じなら高さは変わりません。"
  },
  {
    id: "SCI_PHY_195",
    subject: "理科",
    grade: "中1",
    unit: "物理",
    question: "同じ音源から出た音でも、空気中と水中では伝わる速さが異なる。正しい？",
    answer: "正しい",
    choices: ["正しい", "誤り", "必ず同じ", "音は水中を伝わらない"],
    explanation: "音の伝わる速さは物質によって異なります。"
  },
  {
    id: "SCI_PHY_196",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "電磁誘導で誘導電流を大きくする方法として適切なのは？",
    answer: "磁石を速く動かす",
    choices: ["磁石を速く動かす", "磁石を完全に止める", "コイルをなくす", "磁界を変化させない"],
    explanation: "磁界の変化を大きく・速くすると誘導電流を大きくできます。"
  },
  {
    id: "SCI_PHY_197",
    subject: "理科",
    grade: "中2",
    unit: "物理",
    question: "コイルに磁石を近づけたり遠ざけたりして電流が生じるのは何という現象？",
    answer: "電磁誘導",
    choices: ["電磁誘導", "静電気", "中和", "光電効果"],
    explanation: "磁界の変化によって誘導電流が生じる電磁誘導です。"
  },
  {
    id: "SCI_PHY_198",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "エネルギー保存の法則から、エネルギーが『なくなった』ように見える場合、実際にはどうなっている？",
    answer: "別の形のエネルギーに変換されている",
    choices: [
      "完全に消滅している",
      "別の形のエネルギーに変換されている",
      "質量だけになっている",
      "必ず電気になる"
    ],
    explanation: "エネルギーは消滅せず、熱など別の形に変換されています。"
  },
  {
    id: "SCI_PHY_199",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "入試問題で『空気抵抗を無視する』と書かれていた場合、何を考えなくてよくなる？",
    answer: "空気抵抗による力",
    choices: ["重力", "空気抵抗による力", "質量", "位置エネルギー"],
    explanation: "条件として空気抵抗を無視する場合、空気抵抗による影響を考えません。"
  },
  {
    id: "SCI_PHY_200",
    subject: "理科",
    grade: "中3",
    unit: "物理",
    question: "高校入試の物理問題で、まず確認すべきこととして最も重要なのは？",
    answer: "与えられた条件と求める量",
    choices: [
      "答えの選択肢だけ",
      "与えられた条件と求める量",
      "問題文の一番長い部分だけ",
      "単位を無視する"
    ],
    explanation: "条件・求める量・単位を整理してから、適切な公式や関係を使うことが重要です。"
  }

];
