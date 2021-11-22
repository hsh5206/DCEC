//인자만큼의 길이를 가진 배열 생성
export const makeArray = (length: number) => new Array(length).fill(null);
//숫자 랜덤생성 함수 (나이 사진 크기 등)
export const random = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min)) + min;
//인자(크기)인 랜덤이미지 url 생성함수
export const unsplashUrl = (width: number, height: number): string =>
  `https://source.unsplash.com/random/${width}x${height}`;
//프사(이름에 따른) url 생성함수
export const avatarUriByName = (name: string) =>
  `https://ui-avatars.com/api/?name=${name.split(' ').join(' + ')}`;

//faker.ts에서 사용하기 위해서
