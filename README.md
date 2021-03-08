# simple_crud_client

## eslint & prettier 설정

아래 주소의 블로그를 참고하여 eslint와 prettier를 설정하였다. 설정한 것과 설정하면서 알게된 것들을 아래와 같이 정리한다.

1. ESLint & Prettier extension 설치
   VScode 사용시 ESLint와 Prettier 확장 프로그램을 설치한다.
   (CRA를 통해 프로젝트를 시작하면 eslint가 기본적으로 설치되어 있긴 합니다. 이 프로젝트는 airbnb 스타일 가이드를 적용하고 있다. airbnb 스타일 가이드를 적용한 특별한 이유는 없고 사람들이 많이 사용한다고 하여 적용해보았다.)

2. airbnb 스타일 가이드 적용
   아래 명령어 입력하여 패키지들을 설치

```
npx install-peerdeps --dev eslint-config-airbnb
```

eslint-plugin-import, eslint-plugin-jsx-ally, eslint-plugin-react, eslint-plugin-react-hooks 들이 설치되어야 한다. (package.json을 통해서 확인할 수 있다)

3. .eslintrc.js 작성
   airbnb는 스타일을 까다롭기도 하고 개인적으로 따르지 않았으면 하는 부분을 설정하기 위해서 .eslintrc.js 파일을 작성한다.

   ```
   module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["airbnb"],
   };
   ```

4. prettier 설정 및 .prettierrc.js 작성

   - 프리티어 npm 설치 : npm install --save-dev --save-exact prettier

   - .prettierrc.js 작성
     나는 아래와 같이 .prettierrc.js를 작성하였다. 자세한 규칙은 prettier 공식 사이트를 참고해서 확인하도록 하자.

   ```
   module.exports = {
    semi: false,
    trailingComma: 'none',
    singleQuote: true,
    printWidth: 120,
    bracketSpacing: false,
    tabWidth: 2,
   }
   ```

   - 지금 이상태로는 저장한다고 자동으로 지정된 형식에 맞게 수정되지는 않는다. 추가적인 설정이 필요하다.

5. eslint-config-prettier & eslint-plugin-prettier (auto formatting 적용하기)

   - eslint-config-prettier
     eslint 중 prettier와 충돌이 발생할 수 있는 규칙을 무시한다. 이 패키지 설치를 통하여 ESLint는 자바스크립트 문법 관련된 것들만 관리하게되고, 코드 스타일 관련된 작업은 prettier가 담당하게 된다.

   - eslint-plugin-prettier
     쉡게 말해 eslint-plugin-prettier 플러그인 설치를 통해 모든 Prettier 규칙 이 ESLint 규칙으로 추가한다.

   - 설치

   ```
   npm install --save-dev eslint-plugin-prettier eslint-config-prettier
   ```

   - .eslintrc.js 수정

   ```
     module.exports = {
        env: {
            browser: true,
            es6: true,
            node: true,
        },
        extends: ['airbnb', 'plugin:prettier/recommended'],
        // 다른 config를 사용하더라도 prettier를 맨 마지막에 넣어야 모든 중복 규칙을 비활성화 시킬 수 있다.
     };
   ```

   - 자동 formatting 설정
     VSCode 설정창에서 settings.json 파일을 열어 아래와 같은 내용을 추가한다.

   ```
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.alwaysShowStatus": true,
    "prettier.disableLanguages": ["js"],
    "files.autoSave": "onFocusChange",
   ```

   (위와 같이 설정하였는데 안되는 경우 npm install --save-dev --save-exact prettier 입력)

6. .eslintrc.js의 rules를 추가
   사용하지 않을 규칙을 설정하기 위해 아래와 같이 rules를 작성한다. (코드 진행 때마다 귀찮거나 필요 없는 규칙에 대해서는 직접 찾아서 rule에 추가하자)

   ```
   module.exports = {
   env: {
       browser: true,
       es6: true,
       node: true,
   },
   // 반드시 eslint:recommended라는 부분 반드시 작성해야한다
   extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
   rules: {
       'react/jsx-filename-extension': [
       'error',
       {
           extensions: ['.js', '.jsx'],
       },
       ],
   },
   };

   ```

   위와 같이 작성 후에도 여젼히 linterror를 발생할 수도 있는데 extends에 prettier/react를 추가한다.

   ```
   module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'airbnb',
        'prettier/react',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/jsx-filename-extension': [
        'error',
        {
            extensions: ['.js', '.jsx'],
        },
        ],
        "no-console": 0,
    },
   };
   ```

7. lint-staged & huskuy
   간단히 말해 설정한 규칙에 맞지 않게 코드가 작성된 경우 git commit을 하지 못하다록 하기 위해 사용하는 라이브러리이다.

   아래 명령어를 통해서 라이브러리들을 설치한다.

   ```
   npm i --save-dev lint-staged husky
   ```

   그리고 package.json에 아래와 같은 내용을 추가한다.

   ```
   "husky": {
       "hooks": {
       "pre-commit": "lint-staged"
       }
   },
   "lint-staged": {
       "{src,test}/**/*.{js,jsx,tsx,ts,json}": [
       "eslint --fix",
       "prettier --write",
       "git add"
       ]
   },
   ```

   (위의 package.json 추가 내용은 참여한 프로젝트 내용에서 그대로 가지고 왔다. 그래서 ts가 포함되어 있다)

[https://velog.io/@cookncoding/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0] 참고

## scss를 이용하여 스타일 적용

모듈 시스템을 적용해보려고 했지만 내 귀차니즘으로 인해 그냥 하나의 파일에 알아서 잘 작성하기로 했다.

## 기능

기능은 복잡하지 않다. 제목과 같이 간단하게 게시물(글 & 사진) CRUD를 구현하였다. 그리고 게시물 검색이 가능하도록 하였으며 검색에 debounce를 적용하였다.

## 배포 

1. 배포 도메인     
   https://jerry-simple-crud.herokuapp.com/       
   (일정 기간후 삭제할 거다)


2. 배포시 겪은 어려움       
   배포는 간단하게 하기위해서 깃허브페이지, netlify, heroku를 이용하여 배포를 시도하였다.
   
   - 깃허브페이지 & netlify   
   잘못된 url로 인한 잘 못된 요청을 보내는 문제가 발생하였다. setupProxy에서 설정한 baseUrl을 사용하지 않고 아래와 같은 방식으로 잘 못된 url을 사용하여 요청을 보내고 있다. 문제는 왜 이런 문제가 발생하는지 모르겠다는 것이다.
     
   ```
     ex) www.프론트 주소.com, www.백엔드 주소.com
     정상 : www.백엔드 주소.com/api/posts
     배포후 : www.프론트 주소.com/api/posts -> 문제 발생
   ```
     
   - heroku     
     Eslint와 prettier가 devDependency로만 설치하였는데 이게 배포 후에 문제가 되었다. 이를 해결하기 위해 devDependency로 설치 되었던 것을 모두 dependency로 설치하였다. 초기 로딩 속도가 느리긴 하지만 그외에 모든 기능은 정상적으로 작동한다.
     
   
     
     