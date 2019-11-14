# weStore
> eCommerce PWA Built with NextJS and GraphCMS 
> 참고: https://github.com/zeit/next.js#custom-app
> graphql-tag 참고: https://vomvoru.github.io/blog/query-of-GraphQL/

## Todo
- [x] Creating a NextJS App.
- [x] Links and Navigation.
- [x] Shared Components.
- [x] Dynamic Pages.
- [x] Pretty URLS part 1.
- [x] Pretty URLS part 2.
- [x] Styles on NextJS.
- [x] Custom App.
- [x] Custom Documents and Static Files.
- [x] getInitialProps.
- [x] Fetching the movie list and details.

### Todo - eCommerce
- [x] Cleaning Up and Planning.
- [x] Installing Apollo in NextJS.
- [x] Installing Ant Design.
- [x] Component Recap.
- [x] Index Queries - useHooks.
- [x] Rendering Products on Index.
- [x] Search Screen part 1.
- [x] Search Screen part 2.
- [x] Graphql Fragment + Product Page part 1.
- [x] Product Page part 2.
- [x] Local State like a Boss part 1.
- [x] Local State like a Boss part 2.
- [x] Local State like a Boss part 3.
- [x] Local State like a Boss part 4.

### Todo - PWA
- [x] Price Calculation, Auditing with Light House part 1.

## Install
1. yarn add react react-dom next
2. yarn add express
3. yarn add axios
: 삭제함.
4. yarn add isomorphic fetch
: backend에서 fetch하는 방식을 사용하기위해서 설치함.
5. yarn add apollo-boost graphql react-apollo next-with-apollo
6. yarn add antd 
: 버전에서 버그가있어서 yarn add antd@3.8.1로 다운받기.
7. yarn add react-apollo-hooks
: hooks 설치
8. yarn add apollo-client apollo-cache-inmemory apollo-link-http

## Rule
> 기본적으로 root디렉터리 아래에는 pages디렉터리가 필요하다.


## Using
- Router - withRouter
> * NextJS에서 사용하는 HOC용 라우터로써 props를 전달해주기 위해서 사용된다.
> * 우리의 프로젝트 PostLink에서 Router를 만들어주었음.

- Route Masking
> * Link태그에서 as에 값을 넣어준다.
> * Route Masking이란 사용자에게 URL을 깔끔하게 보여주는 역할을 한다.
> * 하지만 해당 페이지에서 다시 새로고침을 해보면, Not Found 404가 뜬다.

- Route Making의 문제점
> * 여기서의 역할은 client에 직접적으로 route masking을 한것이다. 그래서 Server의 값에 전달을 해주어야하는데, 여기서의 Server가 의미하는 것은 실제 우리가 build하는 서버이며, 작은 것들을 올리는 서버이다. 알아둘게 하나있다.
> * NextJS는 framework 종류의 Front-end로 혼자 이루어지지 않는다. 풀스택의 framework로 이루어지며 front-end를 위한 back-end이다.

- Route Making의 해결
> * 우리만의 작은 NextJS custom server를 만드는 것이다. => server.js

- server.js
> * 한가지 알아둘점은 Development 서버 Or Production 서버인지 알아두어야한다.
> * production server는 그렇게 많은 것을 쌓아두지 않는다. => 모든것을 압축해서 가지고있다.

- Production / Dev
> * Production 서버를 사용하는경우 - yarn dev (node server)
> * Dev 서버를 사용하는경우 - yarn start (NODE_ENV=production node server.js)
> * 이것이 nextJS 서버를 migrate한 셈이다.
> * 이제 express를 사용하는데, express에서 route 처리하는 방법을 통해 URL을 수정해서 보이도록하면 된다.

- style
> * NextJS에서는 styled-component를 직접적으로 사용할 수 가 없다.
> * NextJS에서는 다른것을 갖고 있다.
> * NextJS에서의 style은 이해하기 쉽다. 
> * NextJS는 style을 모듈처럼 가지고있다.

- style 사용
> * 예제
<styles jsx>{`
    ul { 
        display: flex; 
        background-color: red;
    }
    ul li {
        margin-right: 10px;
    }
`}</styles>
> * 위 예제를 보면 이제는 Nextjs를 스타일하면서 클래스명을 고민할 필요가 없다.

- Global Style 사용
> * 예제
<style jsx global>
{`
    html, body {
        padding: 0;
        margin: 0;
    }
`}
</style>
> * 위 예제처럼 jsx, global을 추가해서 글로벌 스타일을 지정할수있다.

- _app.js
> * nextJS에서는 자동으로 _app.js component를 사용해서 모든 어플리케이션을 실행시켜준다. => 이말은 이제 withLayout을 사용할 필요가 없다는 것이다.
> * 이떄 Container태그도 함께사용되었으나 현재는 Deprecated.
> * 모든 페이지에서 보여주고싶은 데이터가 있을때 유용하며, 공통의 스타일작업을 하기에도편리할것같다.
> * NextJS가 모든 페이지를 초기화하는 데 사용한다. 그래서 title값을 바꾸도록 할 수 있다.

- _document.js
> * Document가 서버에서 통채로 render되지 않도록 만들기.
> * 여기서는 <html> <head></head></html> 와같이 head와 body를 작성할수있으며, head 부분에서 link태그를 통해 스타일을 가져오는 작업도 가능하다. 바로 /public에 넣으면 된다.

- /static  !deprecated. => /public으로 
> * NextJS는 강력한 static file system을 가지고있다.
> * /static/styles.css 생성이후 _document에서 styles.css를 불러오면된다.
> * /static은 deprecated. => /public으로 대체됨.

- /public
> * 경로는 /public/styles.css 가 아닌, /styles.css로 사용하도록한다.
> * link에 rel={"stylesheet"} 작성해야 적용됨!
> * NextJS가 자동으로 /public 파일을 관리해준다.
> * 이미지 파일도 넣을 수 있다. 

- _app.js와 _document.js
> * 이 두개는 가장 비슷한데, 약간의 차이점이있다면, _app.js는 body안에 즉 공통의 컴포넌트의 데이터를 제어하는데 유용하며, _document는 /public과 같이 정적인 파일 혹은 이미지 파일들을 가져올 수 있으며 스타일 적용하는것 + html태그 전체에 관여할수있으므로 잘맞춰서 사용할 수 있도록 한다.

- getInitialProps
> * NextJS에서만 존재하는 새로운 method이다.
> * Component가 Render되기전에 불리는 함수이다. => 바로 API를 호출하는 부분이다. 즉, 우리는 getInitialProps에서 data를 받아서 data가 있을때만 Component를 Render하면 된다.
> * 유저는 Loading중인것을 확인할 필요가 없다.
> * _document.js와 _app.js에 전역 메소드로 설정해주도록 한다.
> * 우리는 _document.js와 _app.js를 커스텀하게 사용하므로 설정해주어야 하지만, 그렇지 않은경우는 사용하지 않아도 된다.
> * getInitailProps는 모든 컴포넌트에서 개별적으로 실행할 수 있는데, 컴포넌트가 render되기전에 getInitialProps()가 먼저 호출된다는 점을 기억하자.!
> * React에서는 없다.

- GraphCMS
> * config.js에 API_URL을 작성한다.
> * HOC방식으로 실행시킨다. 
> * 먼저, withApollo.js에서 apollo의 client단 작성을한다음 withApollo()로 감싼다. (withApollo로 decorate한다.)
> * 그리고 _app.js에서 클래스를 withApollo(MyApp);으로 감싸면 HOC방식이 완성된다. => 이렇게 withApollo로 MyApp를 decorate하면 MyApp의 props에서는 client를 받아올수있으며 명칭은 apollo라고 되어있다.

- Ant-design
> * 우리 앱에서는 3.8.1 버전을 사용하며, 헤더에 넣어주도록 한다.
> * React ui Framework이며 design할 때 도와준다.

- Query의 alias
> * 기존 쿼리 products를 새로운 이름의 myProducts로 사용하는 방법.
myProducts: products {
    id
    name
}

- withRouter
> NextJS에서 관리하는 라우팅 모듈이다. HOC를 사용할때 유용하다.
> getInitialProps를 사용할 수 있다.
> withRouter로 컨테이너로 decorate하는것이아니라, 바로 return { id: XX }같이 리턴해주면 withRouter를 사용하는 컴포넌트에서는 props.id로 받을수있다.
> 또한, 그 이외에 새로운 객체에 추가되는 값들을 받는다.
> 또한 getInitialProps를 안에서 hooks를 사용할 수 없다.

### CRA
> 기본적인 CRA를 사용하게되면 우리는 기본적으로 react app을 생성한다. (이것은 우리가 아무것도 하지 않아도 된다는것을 의미한다.)
> react app은 웹팩을 다시 로드하지 않고 구성하고 Javascript를 이해하고 최신버전의 것도 이해한다.

### Next.js
> 우리가 next.js를 사용하면 우리는 next를 사용하는것이다. 라이브러리를 사용하는것이다. (프레임워크 next)
> 나의 script를 next로 부르고,

### CRA vs Next.js
> CRA는 내가하고싶은 것은 implement하면 다 할 수 있다.(모듈만 추가한다면 모든지 이용가능하다.)
> 서버를 개발하고 compile하고 refresh하는것을 알게된다.
> 하지만  Next를사용하면 React만 가지고 사용하지는 않는다. Next는 자동적으로 server를 가지고있다.(우리가 생각하는 서버가 아니다. Front-end를 위한 서버다.(Back-end같은 서버가아니라, Front-End를 위한 서버다.))
> 사실 Next가 서버위에서 동작한다. next가 연결을 처리하고 static file을 처리하고 서버처럼 작동한다. 그리고 이 서버는 React Frontend만을 위한것이다.(Front-end와 Back-end가 nextJs로 합쳐진다는 것이다.)


### Server Side Rendering(SSR)
> 앱을 렌더링하는 방법중 하나이다. 
(렌더링은 그림을 그리는것같은것임. 예를들어, 새로고침할때 blank state가 없고, 로딩에대한 키워드도없고, 이것은 웹사이트가 서버에 렌더됐다는것이다. 다시말하면, 모든데이터가 서버에서 호출되었다.
> 그리고 서버에서 HTML파일이 되어 나에게 보내준다. 소스코드를 보면 더이해가간다.
> 다른하나는 Client SIde Rendering(CSR)이다.
> Next.js는 모든코드가 불러온다. 이와 다르게 우리가 평소에작성했던 CRA를 살펴보면 CSR에 가깝다. 
> > SSR은 웹 사이트에 접속해서 화면이 나에게 보여주기 전에 서버에서 모든 데이터를 가져와서 자동적으로 순수한 html형태로 보여주게 된다.
> > CSR은 서버는 나에게 매우작은 HTML파일을 주고 Javascript 파일을 포함해서 말이다. javascript 파일이 client측에서 한번 로드되고 나면, 매우 빠르게 페이지를 만들게 된다. 그래서 이둘이 매우 다르다.)
> 하나는 Back-end에서 페이지를 만들고, 만들어진 페이지를 보는거고 / 다른 하나는 Javascript파일을 받고 아무것도 볼수없고, Javascript가 렌더링 되는동안에는 말이다. 이후 Javascript가 렌더링되면 페이지를 볼 수 있다.
> 그래서 이둘은 매우다르다.

### 목표
> 아이템을 클릭했을때 CSR처럼 Loading이후에 데이터가 보여지는게아니라, 바로 클릭한 데이터가 보여질수있도록한다. (데이터가 있는경우에만 페이지를 보게되는것이다.)

### 언제 사용하는지?
> 인스타 / 우버 같은 프로그램은 CSR이 적당하다. 자연스럽게 요청하고 대기할수있는 Loading이 상호작용하는 페이지 CSR이 적당하다.
> 전자상거래같은 정적인페이지에서는 Loading되는 동작또한 불필요하며, 바로바로 보여질수있는 interactive하지 않는 SSR이 적당하다.  (로딩을 보여주고싶지않고 준비된 페이지 자료만 보여주고싶을때 사용됨.)

### 정리 
> 페이지의 소스코드를 확인해보면 길고 전체페이지의 소스코드를 갖고있다면, 서버에서 렌더링한뒤 브라우저에 전달하는것이므로 SSR이다.
> 반대로 페이지소스가 짧고 전체를확인하기 어렵고 Javascript파일과 함께있다면, 이것은 CSR이라고 할수있다.
> NextJS는 framework이다. (즉, 규칙을 가지고있다. 이것을 사용하기 위해서는 그 규칙을 따르면 된다.)
> 만약 SSR을 사용한다면, SEO에 강점이있다. 왜냐? 소스코드에서 HTML문서 내용을 확인할수있으므로!!


### dev와 start의 차이
> dev: developer server를 가지고있고
> start: 단순히 그냥 기본서버 뿐이다.(모든게 압축되고 모든게 빌드된것이다.)

### webpack configuration
> NextJS는 자동적으로 webpack configuration과 같이온다.
> 구성을통해 다음과 같은 작업을 수행할수있다. => export default () => <h1>Hello from the index</h1>
> import React from "react" 와 같은 코드가 필요없다.

### console.log("test"); 
> console.log('test') 를 입력하면 서버측, 클라이언트측 둘다 "test"문자열이 찍히는데, 어디서 먼저 실행될까?
> NextJS는 SSR이므로 서버측에서 먼저 출력되고 이후에 클라이언트에서 출력된다. (SSR특징 - 서버에서 먼저 전체소스코드를 실행시킨다음에 클라이언트에게 전달해준다.)
> 그리고 NextJS위에서 백엔드에 nodejs서버가 있는것이다. - express서버이다.
> > 1. 우리가 웹사이트를 갈때마다 react.js app을 가져오고 백엔드에 렌더링이된다.
> > 2. 그리고 모든 변환된 HTML이 복사되어, 프론트로 전달이된다.
> > 3. 이것이 Server Side Rendering이 react에서 동작하는 것이다. (코드가 서버에 렌더링이 된후 -> 이코드를 복사해서 HTML이 client에 보내지는것이다. )

### react.js의 state
> Javascript 측에 있다. 그러나 우리가 보기에는 html안에서 react.js코드로 보인다. => 아주 쿨한것 (SEO 최적화!)

### Git push 취소
> local내용을 remote에 강제로 쓰는방법
> > 1. git reset HEAD^ // 가장 최근의 commit을 취소하고 워킫 디렉터리를 되돌린다.
> > 2. git reset [ coomit id ] // 단순히 이전push를 취소 할 경우 생략.
> > 3. git commit -m "XXXX" // 되돌려진 상태에서 다시 commit실행
> > 4. git push origin [branch name] -f // 원격 저장소에 강제 push


## GraphCMS
> 심플한 컨텐츠와 backend를 가질 수 있다.
> graphql을 로드할수도있다.
> 시장에서는 backend as a server 같은것을 할 수 있는 많은 옵션들이 있다. => 그중 하나가 prismic이라는 것이다.
> 이것을 언제 사용하는가? => 웹사이트가 있는데, 유저는 아무런 컨텐츠를 만들지 않고 컨텐츠를 받기만 하는 예를들면, blog 같은것을 만들때 사용됨. 
> 하지만 양방향으로 communication이 있고, 사용자가 인증을 해야하며, 그럴때는 좋은선택이 아니다. => 인증데이터를 생성할수 없으므로 좋지않다.
> 단순히 Conetent Management System 이다.
 

## Graphql의 OR 역할
 > Graphql에서 다음과 같이 조건 쿼리를 날릴수있다.
 > > gql의 where조건 예시
const XXX  = gql`
    query {
        products(where: { id: 1 }) {
            id
            name
        }
    } 
 `;
 > 하지만 여러개의 where조건 즉 OR을 사용할때는 다음과 같다.
 > > gql의 Or조건 예시 (id가 1 또는 name이 KKH인 상품검색)
const XXX = gql`
    {
        products(where: {
            OR: [
                { id: 1 },
                { name: "KKH" }
            ]
        })
    }
`;

## Fragment ~ on
> 만약 gql에서 검색한 쿼리의 필드를 계속해서 적는다면 불편할것이다 다음을살펴보자.
> > Fragment사용의 예시.
const FRAGMENT_PRODUCT = gql`
    fragment ProductItems on Product {
        id
        name
    }
`;
const XXXX = gql`
    {
        products {
            ...ProductItems
        }
    }
    ${ FRAGMENT_PRODUCT }
`;
> 주의점으로 on뒤의 Product는 graphql에 정의된 스키마 이름 그대로를 가져오도록 한다.

## Fragment ~ on - 2
> Fragment를 사용함으로써 공통적인 필드를 반환하도록했다. 하지만 문제가있다. 확장 버전의 필드가 필요할경우는 어떻게할것인가? 예를들어 아이템의 Details로 기존 + 추가된 필드를 반환하도록 하려면 추가해야 한다면?
> > 기존 Fragment Item을 확장하는 방법

## readFragment 
> cache의 데이터를 가져올때 이전에 fragment에 등록한 필드를 가져올수있다.
> > fargment예시
const fragment = gql` ${ FRAGMENT_PRODUCT } `;
const product = cache.readFragment({ fragment, id: XXXXX });

## query 필드에 로컬의 새로운 함수추가
> 필드에 리턴받는데, 함수를 추가호고싶다면, 로컬로 사용하도록한다.
> 1. resolvers에 Query와 Mutation이 아닌 해당하는 쿼리 이름으로 지정하고 함수를 쓴다.
> 2. Query에 필드를 추가된 함수의 이름을 작성하고 @client로 사용한다
> 3. API가 아닌 로컬의 필드에 추거된 함수를 사용할 수 있다.
ex)  resolvers.js에 Product에 해당하는 함수추가.
export const resolvers = {
    Query: {...},
    Mutation: {...},
    Product: {
        onData: () => false
    }
}
// queries.js
export const XXX = gql` allProducts() { ..., onData @client  }`;

## cache.writeFragment
> cache.writeFragment로 기존에 readFragment에서 해당 fragment와 id값으로 fragment불러온 값을 변환할 수 있도록 도와준다. (주의! __typenme값을 알도록 한다.)
> id와, 기존에 존재하는 데이터들, 변할 값들만 있으면된다 다음예시를 살펴보자.
> cache.writeFragment({
    id: XXXX,
    fragment: FRAGMENT_PRODUCT,
    data: {
        __typename: "Product",
        ...product,
        onCart
    }
})
