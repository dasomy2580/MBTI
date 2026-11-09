'use strict';

const legends = {
  ISTJ: ['꿈 장부의 파수꾼','📒','지워진 납부 기록을 한 줄씩 되살려 꺼진 구역에 꿈을 돌려줘요.'],
  ISFJ: ['잔불을 품는 자','🕯️','대피소의 작은 등불에 사람들의 따뜻한 기억을 담아 밤새 지켜요.'],
  INFJ: ['새벽을 꿰매는 자','🪡','승객들이 기억하는 귀갓길을 실로 뽑아 허공에 임시 선로를 놓아요.'],
  INTJ: ['밤의 설계자','🗝️','도시 전체의 꿈 흐름을 머릿속에 그려 봉인된 우회로를 열어요.'],
  ISTP: ['달빛 기관공','🔧','버려진 꿈에서 톱니를 꺼내 멈춘 기관차의 심장을 고쳐요.'],
  ISFP: ['꿈빛 벽화가','🎨','벽에 그린 집과 숲을 살아 움직이게 해 길 잃은 사람들을 이끌어요.'],
  INFP: ['잊힌 꿈의 정원사','🌱','아무도 찾지 않던 꿈을 씨앗으로 심어 골목마다 빛나는 꽃을 피워요.'],
  INTP: ['정전의 해독자','🔮','끊긴 신호 사이의 규칙을 발견해 소리만으로 꿈 회로를 깨워요.'],
  ESTP: ['지붕 위의 번개','⚡','지붕 사이를 뛰어넘으며 손끝의 번개로 신호등을 하나씩 살려요.'],
  ESFP: ['밤거리의 불꽃','🎇','광장에 모인 사람들의 웃음을 불꽃으로 바꿔 온 거리를 밝혀요.'],
  ENFP: ['꿈풍선의 전령','🎈','제각각인 사람들의 상상을 풍선에 띄워 끊긴 구역을 연결해요.'],
  ENTP: ['악몽의 연금술사','🧪','발전소가 버린 악몽을 뒤섞어 도시가 써 본 적 없는 연료를 만들어요.'],
  ESTJ: ['첫차의 지휘관','🚦','정비공과 승객의 손발을 맞춰 멈춘 열차를 다시 움직여요.'],
  ESFJ: ['등불의 길잡이','🏮','이웃의 목소리를 등불에 담아 떨어진 가족들이 다시 만나게 해요.'],
  ENFJ: ['합창의 점등사','🎶','서로 다른 목소리를 한 곡으로 모아 광장 위에 거대한 빛을 켜요.'],
  ENTJ: ['꿈 수문의 통치자','👑','흩어진 구역을 하나로 묶고 꿈의 수문을 열어 도시 전체를 깨워요.']
};

const districts = [
  { name:'꿈 징수국', questions:[
    [0,'봉인된 징수국 앞에 시민들이 모였어요.','시민들과 이야기를 나누며 상황을 파악한다','잠시 떨어져서 혼자 상황을 정리한다'],
    [1,'창구에 찢어진 장부가 남아 있어요.','실제로 적힌 항목과 날짜부터 맞춰 본다','빈칸이 어떤 비밀을 감췄을지 상상한다'],
    [2,'한 시민이 오늘만 자기 꿈을 돌려달라고 해요.','다른 시민에게도 적용할 수 있는 기준부터 세운다','그 사람에게 왜 오늘이 중요한지 먼저 듣는다'],
    [3,'기록실이 곧 닫혀요.','챙길 서류와 이동 순서를 먼저 정한다','열려 있는 서랍부터 살피며 계획을 바꾼다'],
    [1,'장부 안쪽에서 희미한 별무늬가 떠올라요.','무늬가 찍힌 위치와 방향을 기록한다','무늬가 도시 지도와 이어지는지 떠올린다']
  ]},
  { name:'공중 열차역', questions:[
    [0,'승강장 위로 멈춘 열차가 보여요.','승객들과 이야기를 나누며 실마리를 찾는다','조용한 곳에서 혼자 단서를 정리한다'],
    [1,'기관차 아래로 빛이 일정하게 깜박여요.','빛의 간격과 기관차 상태를 확인한다','빛이 누군가 보낸 신호일 가능성을 떠올린다'],
    [2,'한 승객이 가족을 찾으러 먼저 내려가겠다고 해요.','모두에게 적용할 하차 기준을 먼저 정한다','가족이 어디 있는지 듣고 함께 갈 길을 찾는다'],
    [3,'정비 통로가 잠깐 열려요.','가져갈 도구와 확인할 순서를 정한다','우선 들어가서 보이는 단서에 맞춰 움직인다'],
    [1,'바닥에 승객들이 기억하는 귀갓길이 비쳐요.','현재 위치와 맞는 지형을 대조한다','여러 기억을 이어 새로운 선로를 그린다']
  ]},
  { name:'꿈 암시장', questions:[
    [0,'어둠 속에서 상인들이 목소리를 낮춰요.','상인들에게 말을 걸며 단서를 좁힌다','잠시 자리를 벗어나 들은 말을 혼자 정리한다'],
    [1,'반짝이는 꿈 병이 탁자에 줄지어 있어요.','병의 표식과 남은 양부터 확인한다','병들이 하나의 큰 꿈에서 갈라졌을지 상상한다'],
    [2,'상인이 단골의 꿈만 빼 달라고 부탁해요.','누구에게나 공평한 배분 기준부터 확인한다','그 꿈을 기다리는 사람의 사정부터 듣는다'],
    [3,'상인회가 곧 장터를 닫아요.','만날 상인과 물어볼 순서를 먼저 정한다','열려 있는 가판대를 따라가며 단서를 찾는다'],
    [1,'골목 끝 꿈 병들이 같은 색으로 물들어요.','변한 병의 수와 색을 직접 비교한다','그 색이 어디로 이어지는 징조인지 상상한다']
  ]}
];

const common = [
  [0,'세 구역의 사람들이 중앙 광장에 도착했어요. 발전소에서 구조 신호가 울려요.','모인 사람들과 의견을 나누며 방향을 잡는다','잠깐 자리를 비켜 내 생각을 정리한다'],
  [2,'발전소의 예비 꿈이 한 구역을 밝힐 만큼 남았어요.','피해를 가장 많이 줄이는 곳에 보낸다','도움을 가장 절실히 호소하는 곳에 보낸다'],
  [3,'발전소로 가는 다리 두 곳에 불이 들어왔어요.','경로와 합류 시간을 정하고 출발한다','상황이 바뀌면 길을 바꿀 수 있게 움직인다'],
  [1,'낡은 수문에 수백 개의 표시가 새겨져 있어요.','최근 수리 흔적과 실제 작동 부위를 확인한다','표시를 연결해 숨겨진 구조를 추측한다'],
  [0,'발전소 안에서 정비공이 함께 기다려 달라고 해요.','옆에 앉아 이야기를 나누며 기운을 얻는다','조용한 곳에서 잠깐 쉬며 기운을 되찾는다'],
  [2,'수문을 열면 일부 시민의 납부 기록이 사라져요.','손실 범위를 비교해 일관된 기준으로 판단한다','기록을 잃는 사람들에게 어떤 의미인지 살핀다'],
  [3,'한 시간 뒤면 예비 동력이 다 떨어져요.','복구 순서와 시간을 정해 팀과 맞춘다','여러 방법을 동시에 시도하고 되는 쪽을 살린다'],
  [0,'첫 불빛이 돌아오자 모두가 숨을 돌려요.','광장에 나가 사람들과 순간을 나눈다','창가에서 혼자 첫 불빛을 오래 바라본다'],
  [2,'첫차에 모든 사람을 태울 자리가 없어요.','공개한 기준에 맞춰 탑승 순서를 정한다','눈앞에서 특히 곤란해하는 사람부터 돕는다'],
  [3,'마지막 수문 앞에서 도시가 내 첫 꿈을 기다려요.','복구 계획에 맞춰 꿈을 어느 곳에 보낼지 정한다','꿈이 흐르기 시작하면 그 방향에 맞춰 마법을 쓴다']
];

const axes = ['EI','SN','TF','JP'];
const scene = document.querySelector('#scene');
const meter = document.querySelector('#meter');
const progress = document.querySelector('#progress');
const count = document.querySelector('#count');
const notice = document.querySelector('#notice');
let route = -1;
let previousRoute = -1;
let answers = [];

function node(tag, value, className) {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  return element;
}

function button(label, action, primary = false) {
  const element = node('button', label, primary ? 'primary' : '');
  element.type = 'button';
  element.addEventListener('click', action);
  return element;
}

function screen(label, title, description, { hero = false, emoji, completed, focus = true } = {}) {
  scene.replaceChildren();
  notice.textContent = '';
  scene.classList.toggle('hero', hero);
  meter.hidden = completed === undefined;
  if (!meter.hidden) {
    progress.value = completed;
    count.textContent = completed + ' / 16 · ' + Math.round(completed / 16 * 100) + '%';
  }
  if (emoji) scene.append(node('div', emoji, 'emblem'));
  const heading = node('h1', title);
  heading.id = 'heading';
  heading.tabIndex = -1;
  scene.append(node('p', label, 'eyebrow'), heading, node('p', description, 'description'));
  if (focus) heading.focus();
}

function actions(...buttons) {
  const group = node('div', '', 'actions');
  group.append(...buttons);
  scene.append(group);
}

function start(focus = true) {
  screen('판타지 MBTI 테스트','꿈을 세금으로 걷는 도시',
    '첫 꿈세를 내러 가던 밤, 가로등이 하나씩 꺼졌다. 머리 위를 달리던 열차도 허공에 멈췄다.',
    { hero:true, emoji:'🌙', focus });
  scene.append(node('p','꿈이 도시를 움직이는 밤, 16번의 선택으로 당신의 마법을 깨워 보세요. 약 5분.'));
  actions(button('정전의 밤으로', chooseRoute, true));
}

function chooseRoute() {
  if (route >= 0) previousRoute = route;
  route = -1;
  answers = [];
  screen('질문 01','정전의 밤, 어디로 갈까요?','첫 목적지가 탐험 경로를 정해요.', { completed:0 });
  const options = node('div','','options');
  districts.forEach((district, index) => {
    const label = district.name + (index === previousRoute ? ' · 지난 탐험' : '');
    options.append(button(label, () => { route = index; nextQuestion(); }));
  });
  scene.append(options);
}

function nextQuestion() {
  const index = answers.length;
  const district = districts[route];
  const question = [...district.questions, ...common][index];
  if (!question) {
    showResult(rank(answers), false);
    return;
  }
  const [axis, story, ...choices] = question;
  const location = index < district.questions.length ? district.name : '중앙 광장과 발전소';
  screen('질문 ' + String(index + 2).padStart(2,'0') + ' · ' + location, story,
    '지금 이 순간, 내가 할 행동을 골라요.', { completed:index + 1 });
  const options = node('div','','options');
  choices.forEach((choice, side) => {
    options.append(button(choice, () => {
      answers.push({ axis, letter:axes[axis][side], choice });
      nextQuestion();
    }));
  });
  scene.append(options);
}

function rank(responses) {
  return Object.keys(legends).map(type => ({
    type,
    score:responses.filter(({axis,letter}) => type[axis] === letter).length
  })).sort((a,b) => {
    if (a.score !== b.score) return b.score - a.score;
    // If scores tie, prefer the character matching the latest differing choice.
    for (const {axis,letter} of [...responses].reverse()) {
      const difference = Number(b.type[axis] === letter) - Number(a.type[axis] === letter);
      if (difference) return difference;
    }
    return 0;
  })[0].type;
}

function showResult(type, shared) {
  const [title, emoji, description] = legends[type];
  screen(shared ? '공유된 전설' : '정전의 밤에 태어난 나의 전설', title, description,
    { hero:true, emoji, completed:shared ? undefined : 16 });
  if (!shared) {
    const match = [...answers].reverse().find(({axis,letter}) => type[axis] === letter);
    if (match) scene.append(node('p', '나와 닮은 선택 · ' + match.choice, 'match'));
  }
  scene.append(node('p','연결된 MBTI · ' + type,'eyebrow'));
  if (shared) {
    actions(button('나도 정전의 밤으로', () => {
      history.replaceState(null,'',location.pathname + location.search);
      start();
    }, true));
  } else {
    actions(button('결과 공유하기', () => share(type), true), button('카드 저장', () => saveCard(type)), button('다시 하기', chooseRoute));
  }
}

async function share(type) {
  const [title,emoji,description] = legends[type];
  const message = emoji + ' ' + title + ' (' + type + ')\n' + description;
  const online = location.protocol === 'https:' || location.protocol === 'http:';
  const link = online ? new URL('#legend=' + type, location.href).href : '';
  try {
    if (navigator.share) {
      await navigator.share({ title, text:message, ...(link ? { url:link } : {}) });
      return;
    }
  } catch (error) {
    if (error.name === 'AbortError') return;
  }
  const text = link ? message + '\n' + link : message;
  try {
    await navigator.clipboard.writeText(text);
    notice.textContent = link ? '결과와 전설 링크를 복사했어요.' : '결과 문구를 복사했어요.';
  } catch {
    window.prompt('아래 결과를 복사해 공유하세요.', text);
  }
}

function saveCard(type) {
  const [title,emoji,description] = legends[type];
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 560;
  const context = canvas.getContext('2d');
  const background = context.createLinearGradient(0,0,900,560);
  background.addColorStop(0,'#281b40');
  background.addColorStop(1,'#522e55');
  context.fillStyle = background;
  context.fillRect(0,0,900,560);
  context.strokeStyle = '#b996b5';
  context.strokeRect(25,25,850,510);
  context.textAlign = 'center';
  context.fillStyle = '#ffda9e';
  context.font = '24px sans-serif';
  context.fillText('꿈을 세금으로 걷는 도시',450,88);
  context.font = '90px sans-serif';
  context.fillText(emoji,450,218);
  context.fillStyle = '#f8efff';
  context.font = 'bold 54px sans-serif';
  context.fillText(title,450,302,790);
  context.font = '28px sans-serif';
  context.fillText(description,450,378,790);
  context.fillStyle = '#ffda9e';
  context.fillText(type,450,463);
  const download = node('a','');
  download.download = 'dream-legend-' + type + '.png';
  download.href = canvas.toDataURL('image/png');
  download.click();
  notice.textContent = '전설 카드 이미지 다운로드를 시작했어요.';
}

const sharedType = new URLSearchParams(location.hash.slice(1)).get('legend');
if (Object.hasOwn(legends, sharedType)) showResult(sharedType, true);
else start(false);


