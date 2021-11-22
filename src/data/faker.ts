import faker from 'faker';
import * as U from './util'; //util.ts에서 전부 끌고와서 사용
//랜덤 아이디 생성
export const randomId = (): string => faker.datatype.uuid();
//랜덤 이름 생성
export const randomName = (): string => faker.name.findName();
//랜덤 이메일 생성
export const randomEmail = (): string => faker.internet.email();
//랜덤 프사URL 생성 함수
export const randomAvatarUrl = (name?: string): string =>
  U.avatarUriByName(name ?? randomName()); //?? = 널병합연산자 앞의값이 없으면 뒷값사용
//랜덤 날짜 생성 함수
export const randomDate = (): Date => faker.date.recent();
//랜덤 게시글 생성 함수
export const randomParagraphs = (count: number = 2): string =>
  U.makeArray(count).map(faker.lorem.paragraph).join('/n');
//랜덤 이미지 생성 함수
export const randomImage = (): string =>
  U.unsplashUrl(U.random(800, 1000), U.random(800, 1000));
