## [NestJS+RN: 풀스택] 빵 일기장(2021)

✨ FrontEnd Repository: https://github.com/erie0210/abc_frontend

### 개발목표
연필을 사용하지 않고 레시피 엔지니어링을 가능하게 하는 어플로 구상

### 사용기술
- FrontEnd: ReactNative
- BackEnd: NestJS(nodeJS)
- Test: Jest(BackEnd only)
- Code Convention: VSC, adhere 'editor config' and 'eslint rule'
- CI(Continuous Integration): gitaction, develop branch
- CI(Continuous Integration): docker
- Infra: AWS 의 VPC, subnet, EC2, Lambda, Gateway, S3, LoadBalancer 이용 
- slack과 연동해서 빌드 알림

### 역할
- FullStack 100%
- codereview(expected)

### 기타목표
✨ 코드리뷰 3번 이상 </br>
✨ 디버깅을 위한 로깅 필요 </br>
✨ 테스트🤹‍♀️: Jest, 백엔드 코드 80% 이상 테스트 커버리지 목표 </br>
✨ 2022년 출시 목표 </br>

### 작업목록 : 
✨ 계산기 기능
- 재료추가, 삭제</br>
- 재료 전체 양 바꾸기 : 전체 재료 양에 비례해 개별 재료 양 변경</br>
- 레시피 이름, 공개 여부 설정</br>
- 초기화</br>

✨ 레시피 상세설정
- 사진 설정 (카메라, 앨범, 초기화)
- 평가 컨텐츠 설정
- 평가 점수 설정
- 삭제, 저장(업데이트)
- 계산기로 다시 이동
- 정렬하기(가나다 순, 생성순, 조회수, 좋아요수, 레시피 평가점수 순)
- 더보기(Pagenation)

✨ 커뮤니티 기능(내 레시피를 public으로 설정하면 함께 보는 레시피 게시글로 설정.) :
- public 게시글 가져오기
- 커뮤니티기능 (좋아요)
- 댓글기능

✨  레시피 검색기능
- 레시피 제목과 내용 모두 동시에 검색.

✨ 회원정보 기능
- 회원가입, 회원탈퇴, 로그인, 로그아웃, 유저정보 읽기, 유저정보 업데이트
- JWT
- access token 과 refresh token: 로그인 시 refresh token 을 발급하고 이 refrersh token을 기반으로 access token을 발급해서 API에 접근

### 백엔드 파일구성

📁 auth: 회원 인증에 관한 모듈 </br>
📁 bakery: 베이커리 게시판 CRUD 모듈</br>
📁 calculators: 계산기 기능 모듈</br>
📁 comments: 댓글 CRUD 모듈</br>
📁 common</br>
📁 likes: 좋아요 관련 모듈</br>
📁 recipe: 레시피와 관련된 모든 기능을 모은 모듈</br>
📁 users: 회원 정보에 관한 모듈</br>
📁 utils</br>
📁 test: 테스트 폴더</br>
![Untitled](https://user-images.githubusercontent.com/91591854/141668147-156e1588-2316-4a31-afa8-0738558b2797.png)



### 아키텍쳐
✨ VPC

✨ 서버 컴퓨터

- EC2 구성 (on demand)

✨ 고가용성 설계 ([AWS ELB(로드밸런서): 서버작업 부하분산](https://abc-project-tech.tistory.com/37?category=889164))

- ELB(Elastic Load Balancing)

✨ CI/CD

- Git Action 구성
- Docker 사용 (image rollup 배포)
- ECR, ECS 는 비용 문제로 사용X 직접 배포

✨ Serverless 구성 [(API Gateway + S3 + Lambda로 이미지 업로드 서비스 설정하기)](https://abc-project-tech.tistory.com/search/lambda)

- AWS API Gateway
- AWS S3(스토리지)
- AWS Lambda
![archi](https://user-images.githubusercontent.com/91591854/141668299-20f22a3d-996f-462b-88a3-78905d799664.png)



### DB
- USERS : 회원 정보 스키마
- RECIPES : 레시피 스키마
- RECIPES_COMMENT: 레시피 댓글 스키마
- BAKERIES: 베이커리 스키마  (개발 예정)
- BAKERIES_COMMENT: 베이커리 댓글 스키마 (개발 예정)

![erd](https://user-images.githubusercontent.com/91591854/141668288-1e76cf9d-d660-421a-a03f-f04e1881564d.jpg)



### UI 디자인
![uidesign](https://user-images.githubusercontent.com/91591854/141668273-7ce2cd08-ecbb-47ab-8276-ce894647f4e0.jpg)

