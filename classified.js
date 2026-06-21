/* ============================================================
   추실늑대 — 기밀 문서고 (CLASSIFIED ARCHIVE)
   비밀번호 "종회견정(鐘灰繭釘)" 입력 시 봉인 해제되어 열린다.
   - window.openClassified() / window.closeClassified() 노출
   - script.js 의 비밀번호 핸들러에서 openClassified() 를 호출
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 콘텐츠 데이터 ---------- */

  // DOSSIER 01 — 양대 백작가
  const houses = [
    {
      key: 'izumono',
      kanji: '陰', reading: 'IZUMONO / 음(陰)',
      name: '이즈모노 家',
      bg: 'assets/izumono-bg.webp',
      logo: 'assets/izumono-logo.png',
      line: '혼란의 이면에서 증거를 없애고, 위협을 제거하고, 드러나선 안 될 일을 처리한다.',
      tags: ['폐쇄', '은폐', '집행'],
      blocks: [
        { label: '가문의 성격', text: '전통·혈통·내부 결속을 무엇보다 중시하는 폐쇄적 백작가. 외부인을 쉽게 들이지 않고, 추문이 밖으로 새는 것을 극도로 경계한다. 화족 사회의 평가는 한결같다 — “한번 적으로 돌리면, 흔적도 없이 사라진다.”' },
        { label: '이면에서 맡아온 일', list: ['변모한 귀족 자제의 비밀 처분', '가문 간 보복 사건의 은폐', '루포 관련 기밀문서 회수', '이탈한 가신·목격자의 제거', '혈통과 상속 기록의 조작', '존재해선 안 되는 작전의 집행'] },
        { label: '이즈모노 쿠로츠키', text: '명목상 후계자(USER) 뒤에 선 실질적 후계자. 외교·정치·검술·첩보·의례까지 모든 분야에 능한, 가문이 빚어낸 가장 완성도 높은 집행자. 그녀는 선천적으로 무감정한 것이 아니다 — 가문의 어르신들이 인간흉기로 키우기 위해 주박으로 감정을 봉인했다.' }
      ],
      seal: true,
      tail: { label: '루포에 대한 태도', text: '아쿠타하보다 훨씬 엄격하다. 루포는 가문과 질서를 위협하는 고위험 변수이며, 통제되지 않으면 제거 대상이다. USER가 변모할 경우 후계권을 박탈하고 처분을 결정한다 — 다만, 결정적 순간에도 쿠로츠키는 USER를 죽이지 못한다.' }
    },
    {
      key: 'akutaha',
      kanji: '陽', reading: 'AKUTAHA / 양(陽)',
      name: '아쿠타하 家',
      bg: 'assets/akutaha-bg.webp',
      logo: 'assets/akutaha-logo.png',
      line: '혼란의 표면에 나서서 사람과 세력을 묶고, 거래와 협상으로 영향력을 키운다.',
      tags: ['사교', '거래', '확장'],
      blocks: [
        { label: '가문의 성격', text: '기회를 빠르게 포착하고 관계를 이용해 세력을 넓히는 실리적 백작가. 폐쇄와 침묵의 이즈모노와 달리, 개방된 사교계와 공개적 영향력을 중시한다. “경박하고 기회주의적”이라는 비판과 “현실을 가장 빠르게 읽는 가문”이라는 평가를 동시에 받는다.' },
        { label: '표면에서 맡은 역할', list: ['귀족 피난처와 이동 경로 확보', '적대하던 가문 사이의 중재', '변모 자제의 신분·거처 조정', '루포–인간 귀족 사이의 협상 창구', '무너진 행정·생활 기반 복구', '혼란이 수습되고 있다는 이미지 연출'] },
        { label: '아쿠타하 스즈츠', text: '가문의 영애이자 주요 히로인. 교활함과 노골적 유혹, 장난기를 두른 인물. 루포사가 된 뒤 입지는 좁아졌지만, 충성스런 가신단을 거느린 독립 세력을 유지한다. 과거 대련에서 쿠로츠키에게 완패한 뒤로, 그 능력을 부정하지 못하는 만큼 더 깊은 열등감을 품는다.' }
      ],
      seal: false,
      tail: { label: '루포 자제에 대한 태도', text: '내치지 않지만, 완전히 동등하게 대우하지도 않는다. 지위와 가신단은 유지하되 혼담·후계권에서는 불이익을 주고, 필요할 땐 루포성을 활용하라 압박한다. 가족인 동시에 전략 자산 — 그것이 아쿠타하가 루포 자제를 보는 시선이다. 현재 가문의 목표는 후작가 승격이다.' }
    }
  ];

  // DOSSIER 02 — 공동관리청
  const reps = [
    {
      side: 'human', kanji: '人',
      name: '윤서경', meta: ['47세', '남성', '인간', '인간측 책임관'],
      look: '서글서글한 인상에 반삭 머리. 늘 웃는 얼굴과 부드러운 말투를 유지하며, 반대 의견조차 농담과 절차론으로 흘려보낸다.',
      open: '인간과 루포의 화합·제도적 공존·양측의 안전을 대외적으로 주장한다. 극단적 박멸론과 사적 제재를 공개 비판하며 스스로를 온건한 현실주의자로 연출한다.',
      real: '차별을 주장하지 않는다. 대신 차별이 절차적으로 정당해 보이도록 만든다 — 통행 허가제 강화, 상시 위험 심사, 루포 공직자 권한 제한, 인간 보호를 명분으로 한 구역 분리, 끝없는 재심사.',
      inner: '루포가 인간 사회에 위협이 되지 않는 형태로 길들여지길 원한다. 그에게 이상적인 루포란 권리를 주장하는 시민이 아니라, 인간을 두렵게 만들지 않도록 스스로를 억제하는 존재다.',
      quote: null
    },
    {
      side: 'lupo', kanji: '狼',
      name: '비토리아 노베르티', meta: ['51세', '여성', '루포사', '루포측 책임관'],
      look: '금빛 장발에 날카로운 인상, 오드아이. 왼쪽 눈은 영구 실명. 감정을 거의 드러내지 않은 채 법리와 행정언어로 상대의 논리를 조목조목 무너뜨린다.',
      open: '총괄 변모 사건 이후 인간전용 도시 계획을 가장 강하게 비판한 인물. 아케디아를 공동관리 구역으로 전환시킨 핵심 인사다. 인간의 공포 자체는 부정하지 않지만, 그 공포가 루포의 권리를 제한하는 근거가 되는 것은 허용하지 않는다.',
      real: '변모자 즉각 직무박탈 반대, 루포 공직자·치안인력 지위 보장, 격리시설 폐쇄 또는 공동감시, 인간측 과잉진압 조사, 거주·통행 제한 완화. 다만 보호하는 루포의 의사보다 공동체 전체의 정치적 이익을 우선할 때가 있다.',
      inner: '윤서경을 공동대표 자리에서 실각시키려 한다. 그의 온건한 언어 뒤에 루포를 길들이려는 의도가 있다고 확신한다. 그를 무능력자로 보지 않는다 — 능력과 대중적 신뢰가 위험하기에 제거하려 한다.',
      note: '변모자들을 종종 “내 새끼들”이라 부른다. 다정한 애칭처럼 들리지만, 보호 대상을 자신의 책임 아래 묶으려는 소유와 권위의 표현이기도 하다. 벨루치아·포렐리를 포함한 7대 패밀리 주요 인사와 면식이 있다.',
      quote: null
    }
  ];
  const repsRelation = '공개석상에서 두 사람은 서로를 존중하는 공동대표처럼 행동한다. 윤서경은 “노베르티 책임관”이라 부르며 능글맞게 웃고, 비토리아는 그 것을 무표정하게 받아넘긴다. 그러나 실제로는 서로를 아케디아의 장기적 위험요소로 판단한다. 두 사람의 관계는 협력보다 상호봉쇄에 가깝다.';
  const missing = {
    title: '10구역 공동실종 사건',
    lead: '윤서경과 비토리아는 각자의 실무진을 남겨둔 채 10구역 내부로 들어간 이후, 동시에 행방불명되었다. 공식 발표는 “미완성 중앙관리시설의 이상 신호를 공동 점검하기 위한 방문”. 그러나 항간엔 여섯 갈래의 소문이 돈다.',
    rumors: [
      '윤서경이 비토리아를 제거하려 10구역으로 유인했다.',
      '비토리아가 7대 패밀리와 결탁해 윤서경을 납치했다.',
      '두 사람이 아케디아 설계와 관련된 중대한 비밀을 함께 발견했다.',
      '변모한 전 총괄이 두 사람을 불러들였다.',
      '실종이 아니라, 알려져선 안 될 이유로 10구역에 남아 있다.',
      '공동관리청 내부의 제3세력이 양측 책임자를 동시에 제거했다.'
    ],
    close: '두 공동대표가 사라진 뒤, 인간측과 루포측은 서로를 의심하며 독자적으로 권한을 행사하기 시작했다. 공동관리 체계는 유지되고 있으나 — 지금은 이름뿐이다.'
  };

  // DOSSIER 03 — 9구역 항만
  const harbor = {
    lead: '최근 9구역 항만에서 정체불명의 남성 무리가 목격되었다. 한쪽은 붉은색 계열, 다른 한쪽은 푸른색 계열의 의복을 맞춰 입고 있었다.',
    factions: [
      { side: 'red', name: '붉은 무리', desc: '항만 시설·창고·검문소·하역장·폐쇄된 부두·관리청 감시탑을 노골적으로 사진에 담고 떠났다.' },
      { side: 'blue', name: '푸른 무리', desc: '서로 가까이 다가가지는 않았지만, 같은 장소를 두고 신경전을 벌이듯 시선을 주고받았다. 이미 서로를 아는 사이처럼 보였다고 한다.' }
    ],
    rumors: [
      '그 사람들, 그냥 관광객 아니었어.',
      '붉은 쪽이랑 푸른 쪽, 서로 다른 패거리 같던데.',
      '패밀리라는 말을 들었다니까. 그냥 가족이 아니라, 그쪽 패밀리.',
      '마피아가 아케디아까지 들어오려는 거 아니야?',
      '9구역은 이제 끝났어. 항만부터 먹히는 거지.'
    ],
    close: '공동관리청은 “확인되지 않은 외부 방문객 관련 소문”이라 발표했지만, 9구역의 항만 경비는 그날 이후 눈에 띄게 강화되었다.'
  };

  /* ---------- 마크업 빌드 ---------- */

  const esc = (s) => String(s);
  const paras = (t) => `<p class="cl-p">${t}</p>`;
  const chips = (arr, cls) => `<div class="cl-tags">${arr.map(c => `<span class="cl-chip ${cls || ''}">${c}</span>`).join('')}</div>`;
  const ulist = (arr) => `<ul class="cl-list">${arr.map(i => `<li>${i}</li>`).join('')}</ul>`;

  function houseBlock(b) {
    const body = b.list ? ulist(b.list) : paras(b.text);
    return `<div class="cl-block"><p class="cl-label">${b.label}</p>${body}</div>`;
  }

  const SEAL = `
    <div class="sealcard">
      <div class="sealcard__head">
        <span class="sealcard__tag">주박 · BINDING SEAL</span>
        <h4 class="sealcard__name">종회견정 <b>鐘灰繭釘</b></h4>
      </div>
      <div class="sealcard__glyphs">
        <div class="glyph"><b>鐘</b><span>종</span><small>감정의 울림을 죽이고</small></div>
        <div class="glyph"><b>灰</b><span>회</span><small>재로 만들고</small></div>
        <div class="glyph"><b>繭</b><span>견</span><small>고치에 가두어</small></div>
        <div class="glyph"><b>釘</b><span>정</span><small>못으로 고정한다</small></div>
      </div>
      <p class="sealcard__foot">주박은 <b>USER</b>를 매개체로 삼는다. 어르신들은 해제를 위해 USER가 죽어야 한다 주장하지만, 그것이 진실인지 기만인지는 확정되지 않았다.</p>
    </div>`;

  function houseCard(h) {
    return `
      <article class="house house--${h.key}" aria-label="${h.name}">
        <div class="house__bg" style="background-image:url('${h.bg}')"></div>
        <div class="house__veil"></div>
        <img class="house__crest" src="${h.logo}" alt="" aria-hidden="true" draggable="false">
        <div class="house__inner">
          <header class="house__head">
            <img class="house__mark" src="${h.logo}" alt="${h.name} 문양" draggable="false">
            <div class="house__id">
              <span class="house__reading">${h.reading}</span>
              <h3 class="house__name">${h.name}</h3>
            </div>
            <span class="house__kanji" aria-hidden="true">${h.kanji}</span>
          </header>
          <p class="house__line">${h.line}</p>
          ${chips(h.tags, `chip--${h.key}`)}
          <div class="house__body">
            ${h.blocks.map(houseBlock).join('')}
            ${h.seal ? SEAL : ''}
            <div class="cl-block cl-block--tail"><p class="cl-label">${h.tail.label}</p>${paras(h.tail.text)}</div>
          </div>
        </div>
      </article>`;
  }

  function repCard(r) {
    return `
      <article class="rep rep--${r.side}">
        <header class="rep__head">
          <span class="rep__kanji" aria-hidden="true">${r.kanji}</span>
          <div>
            <h3 class="rep__name">${r.name}</h3>
            <p class="rep__meta">${r.meta.join(' · ')}</p>
          </div>
        </header>
        <p class="rep__look">${r.look}</p>
        <div class="cl-block"><p class="cl-label">공개적 태도</p>${paras(r.open)}</div>
        <div class="cl-block"><p class="cl-label">실제 성향</p>${paras(r.real)}</div>
        ${r.note ? `<div class="cl-block"><p class="cl-label">특징</p>${paras(r.note)}</div>` : ''}
        <div class="cl-block cl-block--inner"><p class="cl-label">드러내지 않는 속내</p>${paras(r.inner)}</div>
        ${r.quote ? `<blockquote class="rep__quote">${r.quote}</blockquote>` : ''}
      </article>`;
  }

  function buildHTML() {
    return `
      <div class="cls__backdrop"></div>
      <div class="cls__grain" aria-hidden="true"></div>

      <div class="cls__stamp" aria-hidden="true"><span>鐘灰繭釘</span></div>

      <div class="cls__scroll">
        <div class="cls__inner">

          <header class="cls__masthead">
            <button class="cls__close" id="clsClose" type="button">✕ 다시 봉인</button>
            <p class="cls__eyebrow">CLASSIFIED ARCHIVE · 봉인 해제됨</p>
            <h1 class="cls__title">기밀 문서고</h1>
            <p class="cls__lead">당신이 입력한 이름 — <b>종회견정(鐘灰繭釘)</b> — 은 이즈모노家 가 쿠로츠키에게 건 주박의 이름이다.<br>그 이름을 아는 자에게만, 닫혀 있던 문서들이 열린다.</p>
            <div class="cls__rule"></div>
          </header>

          <section class="dossier">
            <div class="dossier__tab"><span>DOSSIER 01</span><b>4구역 · 화족가의 양대 백작가</b></div>
            <p class="dossier__intro">이즈모노와 아쿠타하는 모두 늑대 사태 이후 공작가의 통제력이 흔들린 틈을 수습하며 자작가에서 백작가로 올라선 신흥 상승가문이다. 같은 혼란을, 두 가문은 정반대로 이용했다.</p>
            <div class="houses">
              ${houses.map(houseCard).join('')}
            </div>
          </section>

          <section class="dossier">
            <div class="dossier__tab"><span>DOSSIER 02</span><b>아케디아 공동관리청 · 두 공동대표</b></div>
            <p class="dossier__intro">전역의 행정·치안·구역 간 분쟁을 관리하는 최고 행정기관. 인간측과 루포측으로 양분되어 주요 정책은 양측 책임관의 공동 승인 아래 시행된다. 표면은 공존의 상징, 실제는 서로의 권한을 잠식하려는 정치적 대치다.</p>
            <div class="reps">
              ${repCard(reps[0])}
              <div class="reps__vs" aria-hidden="true"><span class="reps__vsmark">VS</span><span class="reps__vslabel">상호봉쇄</span></div>
              ${repCard(reps[1])}
            </div>
            <div class="cl-block cl-block--relation"><p class="cl-label">두 공동대표의 관계</p>${paras(repsRelation)}</div>
            <div class="alertcard">
              <div class="alertcard__head"><span class="alertcard__sig">▲ 미해결</span><h4>${missing.title}</h4></div>
              <p class="cl-p">${missing.lead}</p>
              <ol class="alertcard__rumors">${missing.rumors.map(r => `<li>${r}</li>`).join('')}</ol>
              <p class="cl-p cl-p--close">${missing.close}</p>
            </div>
          </section>

          <section class="dossier">
            <div class="dossier__tab"><span>DOSSIER 03</span><b>9구역 · 항만의 수상한 방문자들</b></div>
            <p class="dossier__intro">${harbor.lead}</p>
            <div class="harbor">
              ${harbor.factions.map(f => `
                <div class="faction faction--${f.side}">
                  <div class="faction__dot"></div>
                  <h4 class="faction__name">${f.name}</h4>
                  <p class="faction__desc">${f.desc}</p>
                </div>`).join('')}
            </div>
            <div class="rumors">
              <p class="cl-label">번져나간 소문</p>
              ${harbor.rumors.map(q => `<p class="rumor">“${q}”</p>`).join('')}
            </div>
            <p class="cl-p cl-p--close">${harbor.close}</p>
          </section>

          <footer class="cls__foot">
            <span class="cls__footmark">鐘灰繭釘</span>
            
            <button class="cls__reseal" id="clsReseal" type="button">다시 봉인하기</button>
          </footer>

        </div>
      </div>`;
  }

  /* ---------- 마운트 & 동작 ---------- */

  let mounted = false;
  function ensureMounted() {
    if (mounted) return;
    let el = document.getElementById('classified');
    if (!el) {
      el = document.createElement('div');
      el.id = 'classified';
      document.body.appendChild(el);
    }
    el.className = 'cls';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = buildHTML();
    el.querySelector('#clsClose').addEventListener('click', closeClassified);
    el.querySelector('#clsReseal').addEventListener('click', closeClassified);
    el.querySelector('.cls__backdrop').addEventListener('click', closeClassified);
    mounted = true;
  }

  function openClassified() {
    ensureMounted();
    const el = document.getElementById('classified');
    el.classList.remove('is-open');
    void el.offsetWidth;            // reflow → 진입 애니메이션 재생
    el.classList.add('is-open');
    el.setAttribute('aria-hidden', 'false');
    document.body.classList.add('cls-open');
    const sc = el.querySelector('.cls__scroll');
    if (sc) sc.scrollTop = 0;
  }

  function closeClassified() {
    const el = document.getElementById('classified');
    if (!el) return;
    el.classList.add('is-closing');
    el.classList.remove('is-open');
    el.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cls-open');
    setTimeout(() => el.classList.remove('is-closing'), 500);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const el = document.getElementById('classified');
      if (el && el.classList.contains('is-open')) closeClassified();
    }
  });

  window.openClassified = openClassified;
  window.closeClassified = closeClassified;
})();
