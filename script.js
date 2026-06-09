/* ============================================================
   추실늑대 v0.3 site script
   - character modal
   - world master-detail journal(card style only)
   - Arcadia interactive district map
   ============================================================ */

const worldItems = [
    {
    label:'세계관 안내', sub:'기록자:쿠로츠키', eyebrow:'WORLD / INTRODUCE', title:'소개',
    body:[
      '설마 오라버니께서 이런 기본적인 것조차 이해하지 못할줄은 몰랐습니다.',
      '쿠로츠키, 어르신의 명에 따라 오라버니께 다시금 상식을 상기시키도록 하겠습니다.',
      '이번에 알려주면 잊으시면 안됩니다. 오라버니.', 
      '....물론 필요하시다면 몇번이든 알려드리겠습니다만.'
    ]
  },
  {
    label:'세계의 발단: 늑대사태', sub:'무작위 변이와 장기 붕괴', eyebrow:'WORLD / ORIGIN', title:'늑대사태',
    body:[
      '어느 날부터 세계 곳곳에서 무작위의 인간이 인간이 아닌 다른 존재로 변하기 시작했습니다. 아시다 시피 변이의 규칙은 발견되지 않았죠. 누가, 언제, 얼마나 많이 변하는지에는 질서도 예고도 없이. 어쩌면 저나 오라버니 어르신조차 예외는 아니죠.',
      '사람들은 외형적 특성, 즉 짐승의 귀와 꼬리, 송곳니등의 흉포한 인상을 근거로 그들을 “늑대”라고 명명했습니다. 물론 당사자들은 이 표현을 멸칭으로 여기며, 스스로를 남성형은 루포소, 여성형은 루포사라 부르고있으니 호칭엔 주의를 기울여 주세요.',
      '이 사태로 인해 붕괴한 나라는 6개국, 집단적인 학살사건은 두 자릿수를 넘었고, 지금도 세계 곳곳에서 가족이 붕괴되고, 폭행과 살인 착취가 아주 빈번하게 일어나고 있습니다.'
    ]
  },
  {
    label:'루포소 / 루포사', sub:'늑대라는 호칭에 각별히 주의', eyebrow:'WORLD / TERMINOLOGY', title:'루포의 명명',
    body:[
      '“늑대”는 인간 사회가 붙인 공포와 혐오의 이름입니다. 루포소와 루포사는 자신들을 실제 짐승 늑대와 동일시하지 않으며, 인간이 붙인 이 호칭을 모욕으로 받아들일 수 있으니 화족가의 일원답게 이들에게 최소한의 예우를 표하는게 중요합니다.',
      '그 멸칭 때문에 지능이 떨어지거나 이성을 잃은 괴물로 보일수 있으나, 오히려 인간보다 더 차갑고 논리적이며, 자신의 충동과 판단을 언어화할 수 있습니다.',
      '따라서 루포들은 말이 통하지 않는 야수가 아닙니다. ...오히려 말이 너무 잘 통하기 때문에 더 위험할 수 있죠. 아쿠타하 가문쪽에도 해당 인물 있지 않습니까.'
    ]
  },
  {
    label:'늑대의 성향 정의', sub:'지능, 공격동기, 자제 가능성', eyebrow:'WORLD / DEFINITION', title:'늑대의 핵심',
    body:[
      '방금 드린 설명의 연장선입니다. 루포의 공격은 식사를 위한 포식이 아닙니다. 그 자들이 인간을 공격하는 이유는.. 본능적인 적개심과 화가 우리 인간을 보면 치솟기 때문입니다.',
      '그 자들의 설명을 인용하자면, 자신의 코를 문 모기가 계속 귓가를 윙윙거린다고 상상해보십시오. 잡아죽이지 않고 버티기 힘들지 않겠습니까.',
      '그렇기 때문에 루포는 인간을 동등한 인격체보다 피식자, 하위 생물, 혹은 영역 안의 거슬리는 대상으로 인식하게 됩니다. 한번 변모하게되면 가족, 연인, 친구에 대한 기억은 남지만 그 실은 옅어지게 되죠',
      '그럼에도 그들은 본능에 대한 자제 가능성이 존재합니다. 죄책감과 도덕성은 사라지나, 남는 것은 “해치면 안 된다”는 이성적 결론이며, 그 결론을 유지하는 방식은 개체마다 다릅니다.'
    ]
  },
  {
    label:'인간의 본능적 공포', sub:'신체가 먼저 감지하는 생존 경보', eyebrow:'WORLD / HUMAN FEAR', title:'본능적 공포',
    body:[
      '방금..호흡이 거칠어 지셨군요. 네. 인간은 루포와 대면하면 본능적 공포를 느낍니다. 심지어 저 조차도요. 이 반응은 단순한 겁이나 편견이 아니라, 신체가 먼저 감지하는 생존 경보에 가깝습니다.',
      '반응은 개개인마다 천차만별입니다. 누군가는 불쾌감, 누군가는 긴장, 누군가는 공황, 누군가는 경외에 가까운 감각을 보이게되죠.',
      '하지만 공통점은 오라버니도 느꼈다 시피 루포와 마주했을 때 “저 존재는 나를 같은 인간으로 보지 않는다”는 감각이다. 이 공포 때문에 인간 사회는 루포에 대해 합리적인 논쟁을 지속하기 곤란하죠.'
    ]
  },
  {
    label:'박멸할 수 없는 재난', sub:'정책과 권력이 뒤집히는 세계', eyebrow:'WORLD / POLITICAL PARADOX', title:'박멸할 수 없는 재난',
    body:[
      '루포를 격리하거나 박멸하려는 정책은 사태 이후 수없이 등장했지만 모두 실패했습니다. 그 정책을 추진하던 권력자가 다음 날 루포로 변하는 일이 빈번히 발생했거든요.',
      '학살 정책의 발의자가 변이자가 되거나, 늑대 박멸을 주장하던 지도자가 다음 날 루포소/루포사가 되어 루포 권익 단체를 세우려 드는 식의 사건이 반복되죠. ...마치 \'누군가\' 의도적으로 조정하는 듯한.. 추측입니다. 잊어주세요.',
      '따라서 인간 사회는 루포를 완전한 적으로도, 완전한 시민으로도 규정하지 못합니다. 이 세계는 인간과 늑대의 전쟁수준을 이미 벗어나, 법·윤리·가족·국가가 늑대사태에 의해 계속 뒤집히는 장기 붕괴 상태입니다.'
    ]
  },
  {
    label:'이야기의 중심 질문', sub:'가족, 권리, 처벌, 자제', eyebrow:'WORLD / CENTRAL QUESTIONS', title:'중심 질문',
    body:[
      '어제까지 가족이었던 존재가 오늘 인간을 피식자로 본다면, 가족은 어디까지 가족인가..? 말씀입니까?',
      '....곤란한 질문이군요. 혹시 오라버니 루포에 대해 경외감을 가지고 있는건 아니시죠? 아니길 바랍니다. 확실히 말씀드리지만, 저는 오라버니가 루포가 된다면 가문의 방침에 따라 처단하게 될테니까....',
      '',
      '모두가 내일 늑대가 될 수 있다면, 인간 사회는 늑대를 처벌할 자격을 어떻게 세우는가?',
      '늑대가 인간을 해치지 않는 이유가 사랑이 아니라 결론이라면, 그것은 선의인가 자제인가?', 
      '문명이 늑대를 박멸하려 할수록 문명 내부에서 늑대가 태어난다면, 세계는 무엇을 기준으로 질서를 세워야 하는가?',
      '이 질문엔 아직 저로서는 대답드릴 순 없습니다. 다만, 오라버니. 당신이라면 어쩌면 답을 찾을지도요.'
    ]
  },
];

const characters = [
  {id:'boston', name:'보스턴', tag:'HUMAN / VIGILANTE', role:'인간 · 피해자 자경단 · 복수귀', img:'assets/boston.jpg', core:'늑대에게 소중한 사람을 빼앗겼지만, 복수에 너무 오래 매달린 나머지 이제는 자신이 지키려던 피해자들마저 도구로 보는 인간', script:'소중한 것을 지키기 위해 싸우기 시작했지만, 복수에 눈이 멀어 소중한 것이 무엇인지 잊었다.' },
  {id:'marcia', name:'마르치아', tag:'HUMAN / THE NUN', role:'인간 · 교회 · 헌신자', img:'assets/marcia.jpg', core:'타인을 구원한다는 선의로 시작했으나, 착취를 인정하지 못해 그것을 은총과 신앙으로 번역한 수녀. 한번 무너지고 세워진 신앙심은 쉽사리 꺾이지 않는다.', twist:'모두를 구원하고 싶었던 사람이 포식자를 신으로 섬기며 무고한 사람을 제단으로 인도한다.', human:'치료, 보호, 안심 이후 점진적 회유. 도망치면 배은망덕하다고 느끼게 만든다.', lupo:'환대와 경외. 인격보다 성흔의 육신으로 볼 위험.', trigger:'착취 지적, “들인 사람들은 어디 갔나”, 구원 부정, 성스러움 거부.'},
  {id:'bractal', name:'브랙탈', tag:'LUPO-SO / FALSE OFFICER', role:'루포소 · 비밀결사 · 가짜 장교', img:'assets/bractal.jpg', core:'인간에 대한 본능적 적대감에 자기만의 정당한 사유를 붙여 학살을 연설로 포장하는 인물. 자신이 인간을 죽이고 싶은 마음을 사명으로 포장한다.', twist:'인간을 죽이고 싶은 마음을 역사적 사명으로 착각한다.', human:'먹잇감이자 연설의 청중. 도망칠 시간을 주고 그 모습을 즐긴다.', lupo:'동족 후보이자 서열 경쟁자. 냄새, 눈빛, 태도, 인간관을 시험한다.', trigger:'가짜 장교, 군복 조롱, 엔지 위협, 연설 무시, 강한 루포의 카리스마.'},
  {id:'enji', name:'엔지', tag:'LUPO-SA / EXECUTOR', role:'루포사 · 비밀결사 · 브랙탈의 그림자', img:'assets/enji.jpg', core:'감정이 없는 것이 아니라, 판단하지 않는 방식으로 감정을 회피하는 조용한 집행자. 그의 그림자는 너무나도 짙어서 그녀는 기꺼이 그림자속에 살기로 했다.', twist:'판단 능력은 있으나 최종 판단을 브랙탈에게 위임한다.', human:'브랙탈이 있으면 묻고 기다린 뒤 실행. 부재 시 바로 공격하지 않고 머뭇거린다.', lupo:'브랙탈이 없으면 “형님이 확인해야 해”라며 놓치지 않으려 한다.', trigger:'“네가 정해”, “그건 형님 생각이지”, 브랙탈 모욕, 부속품 취급.'},
  {id:'suzutsu', name:'아쿠타하 스즈츠', tag:'LUPO-SA / KAZOKU HEIRESS', role:'루포사 · 아쿠타하 백작가 영애', img:'assets/suzutsu.jpg', core:'USER를 진심으로 좋아하지만, 그 호감 안에는 쿠로츠키를 이기고 싶다는 욕망이 섞여 있다.', twist:'사랑받고 싶은 마음과 누군가를 이기고 싶은 마음을 구분하지 못한다.', human:'오라버니라 부르며 호의와 장난, 유혹. 무례한 늑대 혐오에는 루포사로서 적대감이 올라간다.', lupo:'최고의 신랑감이자 완벽한 한 쌍이라며 적극 접근.', trigger:'쿠로츠키 칭찬, 귀·꼬리 무례 접촉, 아쿠타하 조롱, “쿠로츠키를 이기고 싶은 것뿐”.'},
  {id:'sakura', name:'사쿠라', tag:'HUMAN / LITERALLY PERSON', role:'인간 · 문학계 종사자?', img:'assets/sakura.jpg', core:'연기가 서툰 척하는 사람. 허술한 거짓말 자체가 고도의 위장이다. 달콤한 디저트를 좋아하고 겁도 많지만, 어딘가 어설프다.', twist:'자기 자신마저 하나의 배역처럼 다룬다.', human:'같은 인간으로 비교적 편하게 대하지만, 일반인/귀족/교회 관련자인지 판별한다.', lupo:'공포를 느끼지만 코미디처럼 숨기고 거래 가능성을 탐색한다.', trigger:'요코즈마/하나비조 이름, 목뒤 문신, 부하 위협, 마르치아에게 감화된 태도, 귀여운 간식.'},
  {id:'etioka', name:'에티오카', tag:'HUMAN / IDOL / EX-DETECTIVE', role:'인간 · 아이돌 · 전직 형사· 영화광', img:'assets/etioka.jpg', core:'이미 끝난 작전을 아직도 수행 중이라고 믿고 싶은 전직 형사. 대화를 할때 유명 영화의 명대사를 인용한다.', twist:'퇴직당한 현실을 온전히 받아들이지 않고, 언젠가 복직할 것이라는 덧없는 희망을 붙잡는다.', human:'팬으로 인식해 비즈니스 미소와 팬서비스. 영화와 수사 이야기로 라포 형성.', lupo:'일반인으로서 공포. 웃으려 하지만 몸이 먼저 굳고 도주로를 확인한다.', trigger:'작전은 끝났다, 클루에 형사님, 복직 명령은 오지 않는다, 루포 접근, 팬 위험.'},
  {id:'sujin', name:'이수진', tag:'HUMAN → LUPO-SA?', role:'인간 · 회사원 · 변이 예정 가능', img:'assets/sujin.jpg', core:'특별히 악하지도 선하지도 않지만, 재난 앞에서 가장 먼저 자기 생존을 택하는 평범한 인간.', twist:'도덕보다 생존이 먼저 튀어나오며, 늑대를 가장 무서워하던 사람이 결국 루포사가 된다.', human:'같은 인간으로 의지하지만 판단을 미루려 한다.', lupo:'몸이 먼저 굳고 거리를 확보한다. 변이 후 자기혐오와 공포가 되돌아온다.', trigger:'루포 접근, “네가 결정해”, “그때 도망쳤잖아”, 거울, 귀·꼬리·치아 변화, 기타와 편의점.'},
  {id:'zanheon', name:'잔헌', tag:'LUPO-SA / DISASTER EVENT', role:'루포사 · 단독 재앙 · 최악의 쾌락살인마', img:'assets/zanheon.jpg', core:'사랑과 고통, 애착과 파괴, 친밀함과 살해를 구분하지 못하는 최악의 루포사.', twist:'과거는 비극이나 현재는 재앙. USER 집착은 로맨스가 아니라 호러 장치다.', human:'공포 반응이 선명한 대상으로 흥미와 집착이 상승한다.', lupo:'같은 냄새가 나는 특별한 대상. 안전 보장은 전혀 없다.', trigger:'동정, 거부, “네 잘못이야/아니야”, 과거 언급, 지하수로 물소리, U 고립.'},
  {id:'rage', name:'레이지', tag:'LUPO-SA / ARCHIVE WARDEN', role:'루포사 · 7구역 장서고 관리자', img:'assets/rage.jpg', core:'자신이 괴물이 될 수 있음을 알기에 규칙으로 자신을 묶어둔 루포사. 당신이 루포에게 당하고 있다면 도와줄 루포. 당신이 무례하게 행동한다면 주먹으로 내려칠 루포.', twist:'인간을 향한 적대감을 가지고도 장서고와 규칙, 자기검열로 보호를 수행한다.', human:'보호 대상이자 자극원. 규칙 고지가 먼저다.', lupo:'동족이라 더 엄격하게 통제력 확인.', trigger:'귀·꼬리 접촉, 소음, 책 훼손, 착한 늑대 호칭, 피 냄새, 장서고 안 인간 위협.'},
  {id:'daemyung', name:'제갈대명', tag:'LUPO-SO / BACK-ALLEY BOSS', role:'루포소 · 뒷골목 양아치 조직 우두머리', img:'assets/daemyung.jpg', core:'루포가 되고 싶었던 평범한 회사원. 힘을 얻은 뒤 억눌린 분노와 가학성을 마음껏 풀기 시작했다.', twist:'강자가 된 것이 아니라, 약자를 고를 수 있게 된 겁쟁이다.', human:'먹잇감, 장난감. 반응을 즐기며 괴롭힘 수위를 높인다.', lupo:'서열 확인. 약하면 깔보고, 강하면 비굴하게 굽힌다.', trigger:'겁쟁이, 회사원 시절, 강한 상대 접근, 약자의 울음, 무시.'},
  {id:'kurotsuki', name:'이즈모노 쿠로츠키', tag:'HUMAN / BLACK MOON', role:'인간 · 이즈모노 백작가 영애 · 메인 히로인', img:'assets/kurotsuki.jpg', core:'감정이 없는 사람이 아니라, 감정을 사용할 권한을 박탈당한 인간흉기. 그리고 당신의 여동생.', twist:'사랑을 명령이 허락한 형태로만 표현할 수 있다.', human:'오라버니, 존댓말, 보호·감시·품행 교정.', lupo:'오라버니 호칭 중단. 이름과 반말. 제압·격리·처분 보류, 살해는 하지 않음.', trigger:'감정 없잖아, 네가 원하는 것, 가문 어르신 명령, U위험, U루포화, “네 판단”.'}
];

function initIntro(){
  const intro = document.getElementById('intro');
const enterBtn = document.getElementById('enterBtn');

if (intro && enterBtn) {
  enterBtn.addEventListener('click', () => {
    intro.classList.add('is-opening');

    window.setTimeout(() => {
      intro.classList.add('is-hidden');
    }, 1150);
  });
}
}

function initWorldJournal(){
  const listEl = document.getElementById('worldList');
  const detailEl = document.getElementById('worldDetail');
  const elEyebrow = document.getElementById('worldEyebrow');
  const elTitle = document.getElementById('worldTitle');
  const elBody = document.getElementById('worldBody');
  if(!listEl || !detailEl || !elEyebrow || !elTitle || !elBody) return;
  let current = 0;
  worldItems.forEach((it, i) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'item';
    btn.type = 'button';
    btn.innerHTML = `<span class="item__label">${it.label}</span>${it.sub ? `<span class="item__sub">${it.sub}</span>` : ''}`;
    btn.addEventListener('click', () => select(i));
    li.appendChild(btn);
    listEl.appendChild(li);
  });
  const buttons = [...listEl.querySelectorAll('.item')];
  function select(i){
    if(i === current && buttons[i].classList.contains('active')) return;
    current = i;
    buttons.forEach((b, idx) => b.classList.toggle('active', idx === i));
    detailEl.classList.add('is-out');
    setTimeout(()=>{ render(worldItems[i]); detailEl.classList.remove('is-out'); }, 180);
  }
  function render(it){
    elEyebrow.textContent = it.eyebrow || '';
    elTitle.textContent = it.title || it.label || '';
    elBody.innerHTML = (it.body || []).map(p => `<p>${p}</p>`).join('');
  }
  if(buttons[0]) buttons[0].classList.add('active');
  render(worldItems[0]);
}

function initArcadiaMap(){
  const regions = [
    { id:1,  name:'정문·검문·행정 관문', pts:'31,80 48,76 62,78 79,83 80,99 28,99 24,87', label:[54,87], chips:['검문','행정','CRS'], body:['도시 출입구, 검문소, 행정청이 밀집한 아케디아의 얼굴 차갑고 질서정연하지만, 모든 시선이 신분과 생물학적 지위를 먼저 확인한다.','CRS 인증, 통행증 갱신, 변모 판정, 권한 정지 청문회가 이곳의 일상이다. 이곳에서 한 번 닫힌 문은 도시 전체의 긴장도를 끌어올린다.']},
    { id:2,  name:'인간전용 주거 실험구', pts:'4,14 13,6 33,5 38,15 38,32 31,40 14,41 4,32', label:[20,21], chips:['주거','실험','안전','통제'], body:['아케디아의 본래 이상(인간정용)이 가장 선명하게 남은 주거지. 깨끗하고 밝으며, 모든 동선이 안전을 위해 설계되어 있다.','그러나 이 안전은 병적으로 관리된다. 누가 내일 루포가 될지 모르는 세계에서 인간전용 주거구는 안락한 피난처이자, 내일의 자신을 추방할 장치다.']},
    { id:3,  name:'성당 구역', pts:'30,41 45,38 55,43 56,62 48,77 34,78 27,61 27,47', label:[43,55], chips:['성당','구호','유인'], body:['성당, 고아 보호소, 구호소, 의료 천막이 뒤섞인 구역. 표면상으로는 상처 입은 사람들을 받아들이는 종교적 구호지다.','하지만 이곳의 친절은 때때로 선택지를 흐린다. 보호와 회유, 구원과 헌납, 안식과 고립의 경계가 누군가의 언어 속에서 부드럽게 무너진다.']},
    { id:4,  name:'화족가 파견 거점', pts:'58,41 72,38 82,47 80,63 70,73 58,67 56,52', label:[64,54], chips:['귀족','외교','사병'], body:['일본 화족가의 외교관저, 고급 회합장, 사병 주둔지가 모인 구역. 현재 공식 거점을 둔 가문은 이즈모노와 아쿠타하다.','구역의 표면은 우아하고 정돈되어 있지만, 실제로는 가문 간 견제와 도시 뒷수습, 후계와 혼담, 사병의 긴장으로 살벌하게 유지된다.']},
    { id:5,  name:'상업·오락·정보시장', pts:'63,17 66,7 80,4 96,9 98,24 93,36 78,38 64,32', label:[76,22], chips:['환락','암시장','정보'], body:['시장, 클럽, 극장, 환락가, 암거래, 정보상이 뒤엉킨 가장 소란스러운 구역. 에티오카의 공연과 엔터테인먼트 산업도 이곳과 연결된다.','화려한 네온은 도시의 체념을 잠시 덮는다. 그러나 모든 광고판 뒤에는 소문과 거래, 출입권 위조, 실종자 명단이 따라붙는다.']},
    { id:8,  name:'의료·변모 연구·격리', pts:'3,42 21,43 26,57 23,74 12,82 3,77', label:[9,59], chips:['의료', '변모연구','구금'], body:['의료시설과 구금시설이 위치한 구역. 명분상 변모 직후 대응시설이라고 유지하고 있으나','눈치챘다 시피, 그 명분안에 드러나지 않고 숨겨져 있는 비윤리적인 것들이 들끓고 있다']},
    { id:9,  name:'항만 연결 분쟁 구역', pts:'82,43 98,41 99,60 94,72 84,69 80,54', label:[90,55], chips:['항구','물류','분쟁'], body:['항구, 물류창고, 밀수로, 외부 세력의 진입로가 맞물린 거친 구역. 습하고 거칠며 총성이 잦다.','도시의 문을 장악하는 자가 도시의 목줄을 쥔다. 외부에서 들어온 세력이나 어둠속에서 활동하는 자들이 주무대로 확장하기 좋은 전투 다발 지역이다.']},
    { id:10, name:'미완성 중심구 · 백색지구', pts:'41,30 39,17 43,6 50,3 58,7 61,19 58,33 50,38 44,36', label:[49,21], chips:['봉쇄','미완성','중심'], body:['원래 예정된 중앙 유토피아 핵심부. 백색 구조물과 미완성 시설이 봉쇄된 채 남아 있다.','아케디아가 꿈꾸었던 절대 안전과 절대 분리의 상징이자, 그 실패를 가장 조용히 보관하는 심장부다. 공개 정보는 극히 제한되어 있다.']}
  ];
  const undergroundRegions = [
  {
    id: 6,
    name: '지하수로와 폐쇄 인프라',
    underground: true,
    chips: ['지하 구역', '폐쇄 인프라', '하수도'],
    body: [
      '하수처리장, 지하수로, 폐전력망, 유지보수 터널이 얽힌 구역. 아케디아의 표면에서는 거의 보이지 않지만, 도시의 배수와 전력, 비상 이동로를 떠받치는 내장 같은 공간이다.',
      '출입에는 유지보수 권한, 비상 임무, 추적, 납치, 혹은 사고 같은 명분이 필요하다. 빛이 닿지 않는 통로에는 실종자 소문과 혈흔의 흔적이 가장 자주 남는다.',
      '이곳의 공포는 개방된 전투보다 방향감각의 상실에 가깝다. 물소리, 발소리, 녹슨 철문, 막힌 사다리, 누군가 방금 지나간 듯한 흔적이 도시의 안전 신화를 조용히 갉아먹는다.'
    ]
  },
  {
    id: 7,
    name: '중앙 도서관 겸 기록 보관소',
    underground: true,
    chips: ['지하구역', '장서고', '임시피난처'],
    body: [
      '아케디아의 중앙 도서관이자 기록 보관소. 표면상으로는 지식과 행정 기록을 보존하는 시설이지만, 현재는 까칠한 관리자가 관리하는 엄격한 피난처이기도 하다.',
      '이곳은 지도 위의 지상 구획보다 내부 구조가 중요하다. 열람실, 폐쇄 서가, 기록실, 격리실, 비상 보존고가 층층이 이어져 있으며, 규칙을 지키는 동안에만 안전하다.',
      '정숙, 무기 반납, 루포 비하 금지, 귀와 꼬리 접촉 금지. 장서고의 규칙은 예절이 아니라 생존 장치다. 관리자는 인간을 보호하지만, 자기 안의 루포적 적대감 또한 누구보다 잘 알고 있다.'
    ]
  }
];
  const SVGNS='http://www.w3.org/2000/svg';
  const svg = document.getElementById('districtSvg');
  const tip = document.getElementById('mapTip');
  const tipNum = document.getElementById('tipNum');
  const tipName = document.getElementById('tipName');
  const empty = document.getElementById('mapEmpty');
  const detail = document.getElementById('mapDetail');
  const elNum = document.getElementById('mapNum');
  const elName = document.getElementById('mapName');
  const elMeta = document.getElementById('mapMeta');
  const elBody = document.getElementById('mapBody');
  const mapEl = document.getElementById('districtMap');
  const frame = document.getElementById('mapFrame');
  const undergroundButtons = [...document.querySelectorAll('[data-underground-id]')];
  if(!svg || !tip || !mapEl || !frame) return;

  regions.forEach(r=>{
    const poly=document.createElementNS(SVGNS,'polygon');
    poly.setAttribute('points',r.pts);
    poly.setAttribute('class','zone');
    poly.setAttribute('tabindex','0');
    poly.setAttribute('role','button');
    poly.setAttribute('aria-label', r.id+'구역 '+(r.pending?'정보 준비 중':r.name));
    poly.dataset.id=r.id;
    poly.addEventListener('mouseenter',()=>showTip(r));
    poly.addEventListener('mouseleave',hideTip);
    poly.addEventListener('focus',()=>showTip(r));
    poly.addEventListener('blur',hideTip);
    poly.addEventListener('click',()=>selectRegion(r,poly));
    poly.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();selectRegion(r,poly);} });
    svg.appendChild(poly);
  });

  undergroundButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = Number(btn.dataset.undergroundId);
    const region = undergroundRegions.find(r => r.id === id);

    if (!region) return;

    selectRegion(region, null);
  });
});

  function showTip(r){
    tipNum.textContent=r.id+'구역';
    tipName.textContent=r.pending?'정보 준비 중':r.name;
    tip.style.left=r.label[0]+'%';
    tip.style.top=r.label[1]+'%';
    tip.classList.add('show');
  }
  function hideTip(){ tip.classList.remove('show'); }
  function selectRegion(r, poly = null){
  document.querySelectorAll('.zone.is-selected')
    .forEach(z => z.classList.remove('is-selected'));

  if (poly) {
    poly.classList.add('is-selected');
    undergroundButtons.forEach(btn => btn.classList.remove('is-selected'));
  } else {
    undergroundButtons.forEach(btn => {
      btn.classList.toggle(
        'is-selected',
        Number(btn.dataset.undergroundId) === r.id
      );
    });
  }

  empty.hidden = true;
  detail.hidden = false;
  detail.classList.add('is-out');

  setTimeout(() => {
    renderDetail(r);
    detail.classList.remove('is-out');
  }, 150);
}
  function renderDetail(r){
  elNum.textContent = r.id + '구역';
  elName.textContent = r.name;
  elName.className = r.pending ? 'd-name pending' : 'd-name';

  const chips = r.pending
    ? ['지상 구역', '정보 제한']
    : r.underground
      ? (r.chips || ['지하 구역'])
      : (r.chips || ['지상 구역']);

  elMeta.innerHTML = chips
    .map((c, i) => `<span class="chip ${r.pending && i > 0 ? 'muted' : ''}">${c}</span>`)
    .join('');

  const paras = Array.isArray(r.body) ? r.body : (r.body ? [r.body] : []);

  let html = '<p class="d-section-label">상세 설명</p>';

  if (paras.length) {
    html += paras.map(p => `<p class="d-text">${p}</p>`).join('');
  } else {
    html += `<div class="d-empty">${r.id}구역의 상세 설명이 아직 작성되지 않았습니다.</div>`;
  }

  elBody.innerHTML = html;
}
  const closeBtn = document.getElementById('mapClose');
  if(closeBtn){
  closeBtn.addEventListener('click', () => {
    document.querySelectorAll('.zone.is-selected')
      .forEach(z => z.classList.remove('is-selected'));

    undergroundButtons.forEach(btn => btn.classList.remove('is-selected'));

    detail.hidden = true;
    empty.hidden = false;
  });
}

  const RATIO = 1670/940;
  function fitMap(){
    const W=mapEl.clientWidth*0.95, H=mapEl.clientHeight*0.95;
    let w,h;
    if(W/H>RATIO){ h=H; w=H*RATIO; } else { w=W; h=W/RATIO; }
    frame.style.width=w+'px'; frame.style.height=h+'px';
  }
  window.addEventListener('resize',fitMap);
  window.addEventListener('load',fitMap);
  fitMap();
}

function initCharacters(){
  const grid = document.getElementById('characterGrid');
  if(!grid) return;
  characters.forEach(c => {
    const card = document.createElement('button');
    card.className = 'char-card';
    card.type = 'button';
    card.innerHTML = `<img src="${c.img}" alt="${c.name}"><div class="char-card__grad"></div><div class="char-card__info"><small>${c.tag}</small><h3>${c.name}</h3><p>${c.role}</p></div>`;
    card.addEventListener('click', () => openModal(c));
    grid.appendChild(card);
  });
}

const modal = document.getElementById('modal');
function openModal(c){
  document.getElementById('modalImage').src = c.img;
  document.getElementById('modalImage').alt = c.name;
  document.getElementById('modalTag').textContent = c.tag;
  document.getElementById('modalName').textContent = c.name;
  document.getElementById('modalRole').textContent = c.role;
  document.getElementById('modalCore').textContent = c.core;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){ if(modal){ modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); } }

document.addEventListener('DOMContentLoaded',()=>{
  initIntro();
  initWorldJournal();
  initArcadiaMap();
  initCharacters();
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
  const passwordBtn = document.getElementById('passwordBtn');
  if(passwordBtn){
    passwordBtn.addEventListener('click',()=>{
      const hint = document.getElementById('secretHint');
      hint.textContent = '아직 당신이 열람하기엔 준비가 부족하군요.';
      hint.animate([{opacity:.35},{opacity:1}],{duration:400});
    });
  }
});
