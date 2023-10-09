export const userData = {
  id: 1,
  name: '호기심자윤',
  email: '00000000@skuniv.ac.kr',
  profileImage: 'USER_ICON',
  comments: [
    {
      id: 1,
      text: `여기 음식 완전 맛있어요!
      양도 많고 사장님도 친절하고 너무 좋았어요!!`,
      date: new Date('2023-09-27T14:01:00.000Z'),
      restaurant: '태준식탁',
    },
    {
      id: 2,
      text: `음식이 맛있게 먹었는데
      홀서빙하시는 분이 너무 불친절했어요..ㅠㅠ`,
      date: new Date('2023-09-25T14:01:00.000Z'),
      restaurant: '화염마라탕',
    },
    {
      id: 3,
      text: `가격대비 음식 퀄리티가 좀 많이 떨어지는 것 같아요
      다시는 안 올 거 같아요;;;`,
      date: new Date('2023-09-25T14:01:00.000Z'),
      restaurant: '00식당',
    },
  ],
  favorites: [
    {
      id: 11,
      name: '화염마라탕',
      category: '중식',
      tags: ['중식', '마라탕'],
      ratings: 4.7,
      thumbnail: 'USER_ICON',
    },
    {
      id: 17,
      name: '동방칼국수',
      category: '한식',
      tags: ['한식', '칼국수', '면'],
      ratings: 4.7,
      thumbnail: 'USER_ICON',
    },
  ],
};
